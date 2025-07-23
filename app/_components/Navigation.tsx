'use client';

import { Button, Icon } from '@/components';
import { FCProps, HtmlProps } from '@/types';
import { useEffect, useState } from 'react';

type Props = HtmlProps<'nav'> & {
  navItems: {
    id: string;
    label: string;
  }[];
};

export const Navigation: FCProps<Props> = ({
  navItems,
  className,
  ...props
}) => {
  const [activeSection, setActiveSection] = useState<string>('top');
  const [navTargetId, setNavTargetId] = useState<string>('');

  const sectionIds = navItems.map((item) => item.id).toReversed();

  useEffect(() => {
    const handleScroll = () => {
      const currentSectionId = getCurrentSectionId(sectionIds);

      if (navTargetId) {
        const isNavigating = navTargetId !== currentSectionId;

        if (isNavigating) {
          setActiveSection(navTargetId);
        } else {
          setNavTargetId('');
        }
        return;
      }

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, navTargetId]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
      window.history.pushState(null, '', `#${id}`);
    }
    setNavTargetId(id);
  };

  return (
    <nav className={`px-16 backdrop-blur-md ${className}`} {...props}>
      <ul className='flex gap-20 py-6 border-b border-fg-4 text-xs font-mono'>
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <Button
              config='container'
              className={`flex container-center gap-2 ${
                activeSection === id
                  ? 'hover:cursor-default'
                  : 'hover:underline'
              }`}
              onClick={() => handleClick(id)}
            >
              {label}
              {activeSection !== id && <Icon iconName='navArrow' />}
            </Button>
          </li>
        ))}
      </ul>
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

  const activeSection = sectionIds.find((id) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      return scrollY + navOffset >= elementTop;
    }
  });

  return activeSection || 'top';
};
