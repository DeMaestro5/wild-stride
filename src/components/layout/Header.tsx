'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Check if a given path is active (current page)
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='font-bold text-xl text-green-600'>
              Wild Stride
            </Link>
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className='hidden md:flex space-x-8'>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-green-600'
                    : 'text-gray-300 hover:text-green-600'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className='absolute bottom-0 left-0 right-0 h-0.5 bg-green-600'></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Account Button */}
          <div className='hidden md:flex items-center'>
            <Link
              href='/account'
              className={`flex items-center relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/account')
                  ? 'text-green-600'
                  : 'text-gray-300 hover:text-green-600'
              }`}
            >
              <User className='h-5 w-5 mr-1' />
              <span>Account</span>
              {isActive('/account') && (
                <span className='absolute bottom-0 left-0 right-0 h-0.5 bg-green-600'></span>
              )}
            </Link>
          </div>

          {/* Mobile menu button - only visible on small screens */}
          <div className='md:hidden flex items-center'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-green-600 focus:outline-none'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className='sr-only'>Open main menu</span>
              {mobileMenuOpen ? (
                <X className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <Menu className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='md:hidden absolute top-16 inset-x-0 z-50 bg-slate-900/95 backdrop-blur-sm overflow-hidden rounded-b-lg shadow-lg'
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className='px-2 pt-2 pb-3 space-y-1 sm:px-3'
            >
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`block w-full px-3 py-2 rounded-md text-base font-medium relative ${
                      isActive(item.href)
                        ? 'text-green-600 bg-gray-800/50'
                        : 'text-gray-300 hover:text-green-600 hover:bg-gray-800/50'
                    } transition-colors duration-200`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className='absolute left-0 top-0 bottom-0 w-0.5 bg-green-600 rounded-full'></span>
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 + navigationItems.length * 0.05,
                  duration: 0.2,
                }}
              >
                <Link
                  href='/account'
                  className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium relative ${
                    isActive('/account')
                      ? 'text-green-600 bg-gray-800/50'
                      : 'text-gray-300 hover:text-green-600 hover:bg-gray-800/50'
                  } transition-colors duration-200`}
                  onClick={closeMobileMenu}
                >
                  <User className='h-5 w-5 mr-2' />
                  Account
                  {isActive('/account') && (
                    <span className='absolute left-0 top-0 bottom-0 w-0.5 bg-green-600 rounded-full'></span>
                  )}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
