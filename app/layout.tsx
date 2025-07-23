import type { Metadata } from 'next';
import './globals.css';
import { geistMono, geistSans, thunderFont } from '@/_fonts';

import { Footer } from './_components';

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
    <html lang='en' className='flex justify-center'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${thunderFont.variable} pt-1.5 antialiased container-center flex-col w-full max-w-[1440px]`}
      >
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
