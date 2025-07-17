import type { Metadata } from 'next';
import './globals.css';
import { geistMono, geistSans, thunderFont } from '@/_fonts';

import { Header } from './_components/Header';
import { Footer } from './_components/Footer';

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
        className={`${geistSans.variable} ${geistMono.variable} ${thunderFont.variable} pt-10 antialiased content-center flex-col  w-full max-w-[1440px]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
