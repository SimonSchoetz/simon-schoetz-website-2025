import { FooterCandy } from '@/components';
import Link from 'next/link';

export const Footer = () => {
  const linkClassName = 'text-center hover:underline';
  return (
    <footer className='flex content-center justify-center text-center text-xs flex-wrap w-full p-16 section-padding relative md:gap-8 max-md:flex-col'>
      <span>© 2025 Simon Schötz | All rights reserved</span>

      <span>·</span>

      <Link href='/privacy-policy' className={linkClassName}>
        Privacy Policy
      </Link>

      <span>·</span>

      <Link href='/imprint' className={linkClassName}>
        Imprint
      </Link>

      <FooterCandy />
    </footer>
  );
};
