import { RouterItem } from '@/components';
import { Route } from '@/enums';

type RouterItem = {
  href: Route;
  label: string;
};

const RouterItems: RouterItem[] = [
  {
    href: Route.HOME,
    label: 'Home →',
  },
  {
    href: Route.PRINCIPLES,
    label: 'Principles →',
  },
  {
    href: Route.CAREER_PATHS,
    label: 'Career Paths →',
  },
  {
    href: Route.PROJECTS,
    label: 'Projects →',
  },
];

export const Header = () => {
  const renderItems = () => {
    return RouterItems.map((item) => (
      <li key={item.href}>
        <RouterItem href={item.href} label={item.label} />
      </li>
    ));
  };
  return (
    <header className='w-full p-16 max-sm:p-2'>
      <nav>
        <ul className='flex gap-12 font-mono'>{renderItems()}</ul>
      </nav>
    </header>
  );
};
