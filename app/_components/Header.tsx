import { Navigation } from './navigation/Navigation';

export const Header = () => {
  return (
    <header className='w-full sticky top-0 z-10 mb-2 lg:mb-10'>
      <Navigation />
    </header>
  );
};
