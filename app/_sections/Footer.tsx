import { FooterCandy } from '@/components';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='flex justify-center w-full p-16 max-sm:p-2 relative gap-8'>
      <span>© 2025 Simon Schötz</span>

      <span>·</span>

      <Link
        href='/privacy-policy'
        className='flex gap-2 items-center hover:underline'
      >
        Privacy Policy
      </Link>

      <span>·</span>

      <Link href='/imprint' className='flex gap-2 items-center hover:underline'>
        Imprint
      </Link>

      <FooterCandy />
    </footer>
  );
};
