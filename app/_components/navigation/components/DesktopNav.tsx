import { Button, Icon } from '@/components';
import { FCProps } from '@/types';
import { NavProps } from './nav.type';

export const DesktopNav: FCProps<NavProps> = ({
  navItems,
  activeId,
  handleClick,
}) => {
  return (
    <ul className='flex gap-20 py-6 border-b border-fg-4 text-xs max-lg:hidden'>
      {navItems.map(({ id, label }) => (
        <li key={id}>
          <Button
            config='container'
            className={`flex container-center gap-2 ${
              activeId === id ? 'hover:cursor-default' : 'hover:underline'
            }`}
            onClick={() => handleClick(id)}
          >
            {label}
            {activeId !== id && <Icon iconName='navArrow' />}
          </Button>
        </li>
      ))}
    </ul>
  );
};
