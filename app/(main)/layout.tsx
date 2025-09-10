import type { Metadata } from 'next';
import { Header } from '../_sections';
import { Navigation } from '@/components';

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
    <>
      <Header>
        <Navigation />
      </Header>
      {children}
    </>
  );
}
