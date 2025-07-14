import localFont from 'next/font/local';

export const thunderFont = localFont({
  src: [
    {
      path: '../public/fonts/Thunder-LightLC.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../public/fonts/Thunder-LC.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Thunder-MediumLC.woff2',
      weight: '500',
      style: 'medium',
    },
  ],
  variable: '--font-thunder',
  display: 'swap',
});
