'use client';

import { BurgerMenuButton, Button, Icon } from '@/components';
import { FCProps, HtmlProps } from '@/types';
import { useEffect, useState } from 'react';
import { NavProps } from './nav.type';

type Props = HtmlProps<'div'> & NavProps;

export const MobileNav: FCProps<Props> = ({
  navItems,
  activeId,
  className = '',
  handleClick,
  ...props
}) => {
  const currentSection = navItems.find((item) => item.id === activeId);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      className={` text-xs sm:text-sm border-b border-fg-4 ${className}`}
      {...props}
    >
      <div className='h-16 flex items-center justify-between'>
        <p>{currentSection?.label}</p>

        <BurgerMenuButton onClick={() => setIsOpen(!isOpen)} />
      </div>

      <div
        aria-hidden='true'
        className={`absolute top-0 w-full left-0 h-screen ease-in-out duration-350 bg-black/70 ${
          isOpen ? 'translate-y-0' : '-translate-y-full opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        role='dialog'
        aria-modal='true'
        aria-label='Mobile navigation menu'
        className={`absolute top-0 right-0 w-4/5 h-screen bg-bg-2 transition-all ease-in-out duration-350 z-50 ${
          isOpen ? 'translate-y-0' : '-translate-y-full opacity-0'
        }`}
        style={{
          background: 'linear-gradient(to bottom, var(--bg-2), var(--bg))',
        }}
      >
        <div className='h-16 flex items-center justify-end pr-4'>
          <Button
            aria-label='Close mobile menu'
            config='container'
            className='w-8 h-8 items-center justify-end flex'
            onClick={() => setIsOpen(false)}
          >
            <Icon iconName='closeX' className='sm:w-4 sm:h-4' />
          </Button>
        </div>

        <ul className='pl-8 flex flex-col gap-8 z-20'>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <Button
                config='container'
                className={`flex container-center gap-2 ${
                  activeId === id ? 'hover:cursor-default' : 'hover:underline'
                }`}
                onClick={() => {
                  handleClick(id);
                  setIsOpen(false);
                }}
                aria-current={activeId === id ? 'page' : undefined}
                aria-label={`Navigate to ${label}`}
              >
                {label}
                {activeId !== id && <Icon iconName='navArrow' />}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
