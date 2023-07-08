import './global.scss';

import type * as i from 'types';
import { Inter } from 'next/font/google';

import { cn } from 'utils';
import { Footer } from 'modules/layouts/Footer';
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
          'min-h-full min-w-full overflow-x-hidden pt-36 md:pt-60 text-black bg-rnny-light dark:bg-rnny-dark dark:text-white',
          inter.className,
        )}
      >
        <Menu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

type Props = i.NextPageProps<{
  children: React.ReactNode;
}>;

export default Layout;
