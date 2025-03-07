import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Font configuration
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'WS - Wild Stride',
  description:
    'Be prepared for the mountains and beyond with our hiking guides',
  icons: {
    icon: [{ rel: 'icon', url: '/images/favicon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        {/* Direct link tag as a fallback approach */}
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      </head>
      <body className={`${inter.variable} font-sans bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
