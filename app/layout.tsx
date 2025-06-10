import type { Metadata } from 'next';
import './globals.css';
import { geistMono, geistSans } from '@/_fonts';

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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col items-center justify-center w-full max-w-[1440px]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
