import Link from 'next/link';
import { Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';

// Define footer types
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// Footer data
const footerColumns: FooterColumn[] = [
  {
    title: 'More on The Blog',
    links: [
      { label: 'About WildStride', href: '/about' },
      { label: 'Contributors & Writers', href: '/contributors' },
      { label: 'Write For Us', href: '/write-for-us' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    title: 'More on WildStride',
    links: [
      { label: 'The Team', href: '/team' },
      { label: 'Jobs', href: '/jobs' },
      { label: 'Press', href: '/press' },
    ],
  },
];

// Social media links
const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/wildstride' },
  { icon: Twitter, href: 'https://twitter.com/wildstride' },
  { icon: Facebook, href: 'https://facebook.com/wildstride' },
  { icon: Youtube, href: 'https://youtube.com/wildstride' },
];

export default function Footer() {
  return (
    <footer className='relative z-10 bg-gradient-to-b from-gray-900 to-black text-gray-300'>
      {/* Top wave decoration */}
      <div className='absolute top-0 left-0 right-0 transform -translate-y-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 100'
          className='w-full'
        >
          <path
            fill='#111827' // matches from-gray-900
            d='M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,58.7C840,64,960,64,1080,61.3C1200,59,1320,53,1380,50.7L1440,48L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z'
          ></path>
        </svg>
      </div>

      {/* Newsletter section */}
      <div className='border-b border-gray-800'>
        <div className='container mx-auto py-10 px-4 md:px-8'>
          <div className='flex flex-col md:flex-row md:items-center justify-between gap-8'>
            <div className='md:w-1/2'>
              <h2 className='text-xl font-bold text-white mb-2'>
                Join Our Newsletter
              </h2>
              <p className='text-gray-400'>
                Get exclusive deals, adventure tips, and new gear updates.
              </p>
            </div>
            <div className='md:w-1/2'>
              <form className='flex flex-col sm:flex-row gap-2'>
                <input
                  type='email'
                  placeholder='Your email address'
                  className='bg-gray-800 border border-gray-700 rounded-md px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-green-500 text-white'
                  required
                />
                <button
                  type='submit'
                  className='bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md transition-colors duration-200'
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className='container mx-auto pt-12 pb-8 px-4 md:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-8 mb-12'>
          {/* Logo and Tagline Column */}
          <div className='md:col-span-4 space-y-4'>
            <Link href='/' className='inline-block'>
              <div className='text-2xl font-bold tracking-wider text-white'>
                <span className='text-green-500'>Wild</span> Stride
              </div>
            </Link>
            <p className='text-gray-400 text-sm mt-4'>
              Get out there & discover your next slope, mountain & destination!
            </p>

            {/* Social media links */}
            <div className='flex space-x-4 mt-6'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors duration-200'
                >
                  <social.icon
                    size={20}
                    className='text-gray-300 hover:text-green-400'
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column, idx) => (
            <div
              key={column.title}
              className={`md:col-span-${idx === 0 ? '4' : '3'} space-y-4`}
            >
              <h3 className='text-white font-medium border-b border-gray-800 pb-2'>
                {column.title}
              </h3>
              <ul className='space-y-2'>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm inline-block py-1'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className='md:col-span-3 space-y-4'>
            <h3 className='text-white font-medium border-b border-gray-800 pb-2'>
              Contact
            </h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-3 text-sm text-gray-400'>
                <Mail size={18} className='text-green-400 mt-1 flex-shrink-0' />
                <span>hello@wildstride.com</span>
              </li>
              <li className='text-sm text-gray-400 mt-2'>
                123 Adventure Way
                <br />
                Boulder, CO 80301
                <br />
                United States
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className='border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-500 text-xs'>
            &copy; {new Date().getFullYear()} WildStride, Inc. All rights
            reserved.
          </p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <Link
              href='/terms'
              className='text-gray-500 hover:text-green-400 text-xs'
            >
              Terms of Service
            </Link>
            <Link
              href='/privacy'
              className='text-gray-500 hover:text-green-400 text-xs'
            >
              Privacy Policy
            </Link>
            <Link
              href='/cookies'
              className='text-gray-500 hover:text-green-400 text-xs'
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
