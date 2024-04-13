import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

import { siteConf } from '@/config/sites';
import { cn } from '@/utils/cn';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConf.name,
    template: `%s | ${siteConf.name}`,
  },
  description: siteConf.description,
  icons: [
    {
      url: '/',
      href: '/favicon/favicon-love.svg',
    },
  ],
  authors: [
    {
      name: siteConf.name,
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  creator: siteConf.creator,
  publisher: siteConf.publisher,
  referrer: 'origin',
  applicationName: siteConf.applicationName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-black text-white')}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
