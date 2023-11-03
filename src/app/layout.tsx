import './global.css';

import type * as i from 'types';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';

import { cn } from 'utils';
import { Footer } from 'modules/layouts/Footer';
import { Menu } from 'modules/layouts/Menu';
import { PageWrapper } from 'modules/layouts/PageWrapper';

const sathosi = localFont({
  display: 'swap',
  variable: '--font-satoshi',
  src: [
    {
      path: '../../public/fonts/Satoshi-VariableItalic.ttf',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Variable.ttf',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: {
    default: 'About me | Ronny Rook',
    template: '%s | Ronny Rook',
  },
  description: 'Ronny Rook is a Javascript developer from Amsterdam',
  openGraph: {
    title: 'Ronny Rook',
    description: 'Ronny Rook is a Javascript developer from Amsterdam',
    url: 'https://rnny.nl',
    siteName: 'Ronny Rook',
    images: [
      {
        url: 'https://rnny.nl/api/og?title=Ronny%20Rook',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Ronny Rook',
    description: 'Ronny Rook is a Javascript developer from Amsterdam',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://rnny.nl/api/og?title=Ronny%20Rook',
        width: 1200,
        height: 630,
      },
    ],
    creator: '@rnnyrk',
  },
  manifest: '/images/favicon/site.webmanifest',
  icons: {
    icon: '/images/favicon/favicon-32x32.png',
    shortcut: '/images/favicon/favicon.ico',
    apple: '/images/favicon/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/images/favicon/safari-pinned-tab.svg',
      },
    ],
  },
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          'min-h-full min-w-full overflow-x-hidden text-black bg-rnny-light dark:bg-rnny-dark dark:text-rnny-dark-text',
          sathosi.variable,
        )}
      >
        <Menu />
        <main>
          <PageWrapper>{children}</PageWrapper>
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
};

type Props = i.NextPageProps<{
  children: React.ReactNode;
}>;

export default Layout;
