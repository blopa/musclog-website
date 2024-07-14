import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { DumbbellIcon, MenuIcon } from '@/components/ui/icons';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    description: 'Discover a world of personalized workouts, expert guidance, and a supportive community with Musclog. Achieve your fitness goals with our comprehensive fitness app.',
    title: 'Musclog - Your Ultimate Fitness Companion',
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
