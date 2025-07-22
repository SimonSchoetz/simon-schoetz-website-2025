'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

type NavItem = {
  id: string;
  label: string;
};

const NavItems: NavItem[] = [
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
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('top');
  const [navTargetId, setNavTargetId] = useState<string>('');

  const sectionIds = NavItems.map((item) => item.id);

  const getCurrentSectionId = (): string => {
    const scrollY = window.scrollY;
    const isAtBottom =
      window.innerHeight + scrollY >=
      document.documentElement.scrollHeight - 10;
    const fromBottomUpIds = sectionIds.toReversed();

    if (isAtBottom) {
      return fromBottomUpIds[0];
    }

    const navHeight = document.querySelector('header')?.offsetHeight;
    const navOffset = navHeight ? navHeight + 40 : 100;

    const activeSection = fromBottomUpIds.find((id) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        return scrollY + navOffset >= elementTop;
      }
    });

    return activeSection || 'top';
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentSectionId = getCurrentSectionId();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds]);

  const renderItems = () => {
    return NavItems.map(({ id, label }) => (
      <li key={id}>
        <Link
          href={`#${id}`}
          className={` transition-all ${
            activeSection === id ? 'cursor-default' : 'hover:underline'
          }`}
          onNavigate={() => setNavTargetId(id)}
        >
          {label}
          {activeSection === id ? '' : ' →'}
        </Link>
      </li>
    ));
  };

  return (
    <header className='w-full max-sm:p-2 sticky top-0 z-10 mb-10'>
      <nav className='px-16 backdrop-blur-md'>
        <ul className='flex gap-20 text-xs font-mono py-6 border-b border-fg-4'>
          {renderItems()}
        </ul>
      </nav>
    </header>
  );
};
