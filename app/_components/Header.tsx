import { Navigation } from './Navigation';

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
  return (
    <header className='w-full max-sm:p-2 sticky top-0 z-10 mb-10'>
      <Navigation navItems={NavItems} />
    </header>
  );
};
