import type { Metadata } from 'next';
import './globals.css';
import { geistMono, geistSans } from '@/_fonts';
import { RouterItem } from '@/components';
import { Route } from '@/enums';

export const metadata: Metadata = {
  title: 'Simon Schötz',
  description: `Hi! I'm Simon, welcome to my website!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col items-center justify-center w-full`}
      >
        <header className='w-full p-16 max-sm:p-2'>
          <nav>
            <ul className='flex gap-4'>
              <li>
                <RouterItem
                  className='font-mono'
                  href={Route.HOME}
                  label='Simon Schötz →'
                />
              </li>
              <li>
                <RouterItem
                  className='font-mono'
                  href={Route.VALUES}
                  label='Values →'
                />
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
