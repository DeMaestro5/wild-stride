'use client';

import Link from 'next/link';
import { useState } from 'react';
import { User } from 'lucide-react';

// Define navigation items with the NavItem interface
export interface NavItem {
  label: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { label: 'Equipment', href: '/equipment' },
  { label: 'About us', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='py-6 px-4 md:px-8 absolute top-0 left-0 right-0 z-20'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='text-2xl font-bold tracking-wider text-white'>
          Wild Stride
        </Link>

        {/* Mobile menu button - only visible on small screens */}
        <button
          className='md:hidden text-white'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className='hidden md:flex space-x-8'>
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className='text-white hover:text-yellow-400 transition-colors duration-200'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Account Button */}
        <Link
          href='/account'
          className='hidden md:flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors duration-200'
        >
          <User className='h-5 w-5' />
          <span>Account</span>
        </Link>

        {/* Mobile Navigation - only visible when menu is open */}
        {mobileMenuOpen && (
          <div className='absolute top-full left-0 right-0 bg-gray-900 p-4 md:hidden'>
            <nav className='flex flex-col space-y-4'>
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className='text-white hover:text-yellow-400 transition-colors duration-200'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href='/account'
                className='flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors duration-200'
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className='h-5 w-5' />
                <span>Account</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
