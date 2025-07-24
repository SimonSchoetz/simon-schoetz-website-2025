import { BurgerMenuButton, Button, Icon } from '@/components';
import { FCProps } from '@/types';
import { useState } from 'react';
import { NavProps } from './nav.type';

export const MobileNav: FCProps<NavProps> = ({
  navItems,
  activeId,
  handleClick,
}) => {
  const currentSection = navItems.find((item) => item.id === activeId);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='lg:hidden text-xs sm:text-sm'>
      <div className='h-16 flex items-center justify-between'>
        <p>{currentSection?.label}</p>

        <BurgerMenuButton onClick={() => setIsOpen(!isOpen)} />
      </div>

      <div
        className={`absolute top-0 right-0 w-4/5 h-screen bg-bg-2 transition-all ease-in-out duration-350 ${
          isOpen ? 'translate-y-0' : '-translate-y-full opacity-0'
        }`}
      >
        <div className='h-16 flex items-center justify-end pr-4'>
          <Button
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
