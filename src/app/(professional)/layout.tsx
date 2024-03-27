import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mario Villacreses',
  description: 'Personal website for Mario Villacreses',
  authors: { name: 'Mario Villacreses' },
  keywords: ['portfolio', 'software engineer'],
  openGraph: {
    type: 'website',
    url: 'https://mariovillacreses.com/',
    title: 'Mario Villacreses',
    siteName: 'Mario Villacreses',
    description: 'Personal website for Mario Villacreses',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
