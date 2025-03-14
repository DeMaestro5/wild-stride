import { ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';

// Updated HeroSection props type to include extraContent
export interface HeroSectionProps {
  subtitle: string;
  title: string;
  extraContent?: ReactNode; // Made optional with ?
}

export default function HeroSection({
  subtitle,
  title,
  extraContent,
}: HeroSectionProps) {
  return (
    <section className='relative min-h-screen flex items-center justify-center pt-24 pb-24 px-4'>
      <div className='max-w-4xl mx-auto text-center md:text-left'>
        {/* Subtitle with decorative line */}
        <div className='flex items-center justify-center md:justify-start mb-6'>
          <div className='h-px w-16 bg-yellow-400 mr-4'></div>
          <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
            {subtitle}
          </span>
        </div>

        {/* Main Title */}
        <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-16 text-gray-100'>
          {title}
        </h1>

        {/* Extra Content */}
        {extraContent && extraContent}

        {/* Scroll Down Indicator */}
        <div className='flex items-center justify-center md:justify-start space-x-2 mt-16'>
          <span className='text-sm text-gray-300'>scroll down</span>
          <ChevronDown className='h-5 w-5 text-gray-300 animate-bounce' />
        </div>
      </div>
    </section>
  );
}
