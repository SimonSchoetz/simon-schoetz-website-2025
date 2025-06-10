import { RouterItem } from '@/components';
import { Route } from '@/enums';

export const Header = () => {
  return (
    <header className='w-full p-16 max-sm:p-2'>
      <nav>
        <ul className='flex gap-4'>
          <RouterItem href={Route.HOME} label='Home →' />
          <RouterItem href={Route.PRINCIPLES} label='Principles →' />
          <RouterItem
            href={Route.PROFESSIONAL_CAREER}
            label='Professional Career →'
          />
          <RouterItem href={Route.PROJECTS} label='Projects →' />
        </ul>
      </nav>
    </header>
  );
};
