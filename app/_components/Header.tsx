import Link from 'next/link';

type NavItem = {
  id: string;
  label: string;
};

const NavItems: NavItem[] = [
  {
    id: 'top',
    label: 'Home →',
  },
  {
    id: 'principles',
    label: 'Principles →',
  },
  {
    id: 'projects',
    label: 'Projects →',
  },
  {
    id: 'career-paths',
    label: 'Career Paths →',
  },
];

export const Header = () => {
  const renderItems = () => {
    return NavItems.map((item) => (
      <li key={item.id}>
        <Link
          href={`#${item.id}`}
          className='font-mono hover:underline cursor-pointer'
        >
          {item.label}
        </Link>
      </li>
    ));
  };
  return (
    <header className='w-full max-sm:p-2 sticky top-0 z-10 mb-10'>
      <nav className='px-16 backdrop-blur-md'>
        <ul className='flex gap-12 font-mono py-6 border-b border-fg-4'>
          {renderItems()}
        </ul>
      </nav>
    </header>
  );
};
