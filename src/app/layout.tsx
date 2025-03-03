import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Font configuration
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'WS - Wild Stride',
  description:
    'Be prepared for the mountains and beyond with our hiking guides',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} font-sans bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
