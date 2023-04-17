import './global.scss';
import type * as i from 'types';
import clsx from 'clsx';
import { Inter } from 'next/font/google';

import { Menu } from 'modules/layouts/Menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'About me | Ronny Rook',
    template: '%s | Ronny Rook',
  },
  description: 'Javascript developer from Amsterdam',
  openGraph: {
    title: 'Ronny Rook',
    description: 'Javascript developer from Amsterdam',
    url: 'https://rnny.nl',
    siteName: 'Ronny Rook',
    images: [
      {
        url: 'https://rnny.nl/og.jpg',
        width: 1920,
        height: 1080,
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
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/images/favicon/favicon.ico',
  },
};

const Layout = ({ children }: Props) => {
  return (
    <html
      lang="en"
      className={clsx('text-black bg-rnny-light', inter.className)}
    >
      <head />
      <body className="min-h-full min-w-full overflow-x-hidden pt-60">
        <Menu />
        <main>{children}</main>
      </body>
    </html>
  );
};

type Props = i.NextPageProps<{
  children: React.ReactNode;
}>;

export default Layout;
