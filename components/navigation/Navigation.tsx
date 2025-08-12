'use client';

import { FCProps, HtmlProps } from '@/types';
import { useState, useEffect } from 'react';
import { NavItem, DesktopNav, MobileNav } from './components';
import { useThrottledScroll } from '@/hooks';

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
  const [targetId, setTargetId] = useState<NavItem['id']>('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sectionIds = navItems.map((item) => item.id).toReversed();

  useThrottledScroll(() => {
    const currentSectionId = getCurrentSectionId(sectionIds);

    if (targetId) {
      const isNavigating = targetId !== currentSectionId;

      if (isNavigating) {
        setActiveId(targetId);
      } else {
        setTargetId('');
      }
      return;
    }

    setActiveId(currentSectionId);
  }, 100);

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
      aria-label='Primary'
      className={`px-4 backdrop-blur-md ${className}
          lg:px-8
          xl:px-16`}
      {...props}
    >
      <DesktopNav
        navItems={navItems}
        activeId={activeId}
        handleClick={handleClick}
        className='max-lg:hidden'
        aria-hidden={isMobile}
        tabIndex={isMobile ? -1 : 0}
      />

      <MobileNav
        navItems={navItems}
        activeId={activeId}
        handleClick={handleClick}
        className='lg:hidden'
        aria-hidden={!isMobile}
        tabIndex={!isMobile ? -1 : 0}
      />
    </nav>
  );
};

let headerElement: HTMLElement | null = null;

const getCurrentSectionId = (sectionIds: string[]): string => {
  const bottomThreshold = 10;
  const navPaddingOffset = 40;
  const defaultNavOffset = 100;

  const scrollY = window.scrollY;
  const isAtBottom =
    window.innerHeight + scrollY >=
    document.documentElement.scrollHeight - bottomThreshold;

  if (isAtBottom) {
    return sectionIds[0];
  }

  headerElement = document.querySelector('header') ?? null;

  const navHeight = headerElement?.offsetHeight;

  const navOffset = navHeight ? navHeight + navPaddingOffset : defaultNavOffset;

  const activeId = sectionIds.find((id) => {
    const element = document.getElementById(id);
    if (element) {
      return scrollY + navOffset >= element.offsetTop;
    }
  });

  return activeId || 'top';
};
