import './globals.css';
import { ReactNode } from 'react';


export const metadata = {
title: 'Muhammad Umer — Software Engineer',
description: 'Creative and detail-focused Frontend Developer. Angular & Next.js specialist.'
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}