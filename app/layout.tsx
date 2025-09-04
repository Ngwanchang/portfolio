import { Inter } from 'next/font/google';
import './globals.css';
import Mainlayout from './templates/mainlayout/mainlayout';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Evolve Authentic',
  description: 'learning and growing as a digital designer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Mainlayout>
          {children}
        </Mainlayout>
      </body>
    </html>
  );
}