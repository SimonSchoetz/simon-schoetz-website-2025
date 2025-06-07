import type { Metadata } from 'next';
import './globals.css';
import { geistMono, geistSans } from '@/_fonts';

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
        {children}
      </body>
    </html>
  );
}
