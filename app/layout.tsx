import type { Metadata } from 'next';
import './globals.css';
import { geistMono, geistSans, thunderFont } from '@/_fonts';

import { Footer, Header } from './_sections';

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
        className={`${geistSans.variable} ${geistMono.variable} ${thunderFont.variable} antialiased container-center flex-col w-full content-width`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
