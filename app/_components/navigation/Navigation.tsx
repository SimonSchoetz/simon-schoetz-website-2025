'use client';

import { FCProps, HtmlProps } from '@/types';
import { useEffect, useState } from 'react';
import { NavItem, DesktopNav, MobileNav } from './components';

const navItems: NavItem[] = [
  {
    id: 'top',
    label: 'Simon Schötz',
  },
  {
    id: 'principles',
    label: 'Principles',
  },
  {
    id: 'projects',
    label: 'Projects',
  },
  {
    id: 'career-paths',
    label: 'Career Paths',
  },
  {
    id: 'contact',
    label: 'Contact',
  },
] as const;

export const Navigation: FCProps<HtmlProps<'nav'>> = ({
  className,
  ...props
}) => {
  const [activeId, setActiveId] = useState<NavItem['id']>('');
  const [TargetId, setTargetId] = useState<NavItem['id']>('');

  const sectionIds = navItems.map((item) => item.id).toReversed();

  useEffect(() => {
    const handleScroll = () => {
      const currentSectionId = getCurrentSectionId(sectionIds);

      if (TargetId) {
        const isNavigating = TargetId !== currentSectionId;

        if (isNavigating) {
          setActiveId(TargetId);
        } else {
          setTargetId('');
        }
        return;
      }

      setActiveId(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, TargetId]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
      window.history.pushState(null, '', `#${id}`);
    }
    setTargetId(id);
  };

  return (
    <nav
      className={`px-4 backdrop-blur-md ${className}
          lg:px-8
          xl:px-16`}
      {...props}
    >
      <DesktopNav
        navItems={navItems}
        activeId={activeId}
        handleClick={handleClick}
      />

      <MobileNav
        navItems={navItems}
        activeId={activeId}
        handleClick={handleClick}
      />
    </nav>
  );
};

const getCurrentSectionId = (sectionIds: string[]): string => {
  const scrollY = window.scrollY;
  const isAtBottom =
    window.innerHeight + scrollY >= document.documentElement.scrollHeight - 10;

  if (isAtBottom) {
    return sectionIds[0];
  }

  const navHeight = document.querySelector('header')?.offsetHeight;
  const navOffset = navHeight ? navHeight + 40 : 100;

  const activeId = sectionIds.find((id) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      return scrollY + navOffset >= elementTop;
    }
  });

  return activeId || 'top';
};
