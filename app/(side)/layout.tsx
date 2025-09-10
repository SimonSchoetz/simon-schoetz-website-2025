import type { Metadata } from 'next';
import { Header } from '../_sections';
import { BackToHome } from '@/components';

export const metadata: Metadata = {
  title: 'Imprint',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>
        <BackToHome />
      </Header>
      {children}
    </>
  );
}
