import { Button, Icon } from '@/components';
import { FCProps, HtmlProps } from '@/types';
import { NavProps } from './nav.type';

type Props = HtmlProps<'ul'> & NavProps;

export const DesktopNav: FCProps<Props> = ({
  navItems,
  activeId,
  handleClick,
  className = '',
  ...props
}) => {
  return (
    <ul
      className={`flex gap-20 py-6 border-b border-fg-4 text-xs ${className}`}
      {...props}
    >
      {navItems.map(({ id, label }) => (
        <li key={id}>
          <Button
            config='container'
            className={`flex container-center gap-2 ${
              activeId === id ? 'hover:!cursor-default' : 'hover:underline'
            }`}
            onClick={() => handleClick(id)}
            aria-current={activeId === id ? 'page' : undefined}
            aria-label={`Navigate to ${label}`}
          >
            {label}
            {activeId !== id && <Icon iconName='navArrow' />}
          </Button>
        </li>
      ))}
    </ul>
  );
};
