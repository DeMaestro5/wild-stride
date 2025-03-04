import Link from 'next/link';

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

export default function Footer() {
  return (
    <footer className='relative z-10 bg-gray-900 text-gray-300 pt-16 pb-8 px-4 md:px-8'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Logo and Tagline Column */}
          <div className='space-y-4'>
            <Link
              href='/'
              className='text-2xl font-bold tracking-wider text-gray-300'
            >
              Wild Stride
            </Link>
            <p className='text-gray-400 text-sm mt-4'>
              Get out there & discover your next slope, mountain & destination!
            </p>
            <p className='text-gray-500 text-xs mt-8'>
              Copyright 2025 WildStride, Inc. Terms & Privacy
            </p>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className='space-y-4'>
              <h3 className='text-white font-medium'>{column.title}</h3>
              <ul className='space-y-2'>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
