import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Define ContentSection type
export interface ContentCardProps {
  number: string;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  imagePosition: 'right' | 'left';
}

export default function ContentCard({
  number,
  subtitle,
  title,
  description,
  buttonText,
  buttonUrl,
  imageSrc,
  imageAlt,
  imagePosition,
}: ContentCardProps) {
  return (
    <div
      className={`grid grid-cols-1 ${
        imagePosition === 'right'
          ? 'md:grid-cols-2'
          : 'md:grid-cols-2 md:grid-flow-dense'
      } gap-8 md:gap-16 items-center`}
    >
      {/* Text Content */}
      <div
        className={`${
          imagePosition === 'right' ? 'md:col-start-1' : 'md:col-start-2'
        }`}
      >
        <div className='flex items-start mb-6'>
          {/* Large Section Number */}
          <span className='text-8xl font-bold text-white opacity-20 leading-none mr-4'>
            {number}
          </span>

          <div>
            {/* Subtitle with decorative line */}
            <div className='flex items-center mb-2'>
              <div className='h-px w-16 bg-yellow-400 mr-4'></div>
              <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                {subtitle}
              </span>
            </div>

            {/* Title */}
            <h2 className='text-3xl md:text-4xl font-bold'>{title}</h2>
          </div>
        </div>

        {/* Description */}
        <p className='text-gray-300 mb-8 leading-relaxed'>{description}</p>

        {/* Button */}
        <Link
          href={buttonUrl}
          className='inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 group'
        >
          <span className='mr-2'>{buttonText}</span>
          <ArrowRight className='h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200' />
        </Link>
      </div>

      {/* Image */}
      <div
        className={`${
          imagePosition === 'right' ? 'md:col-start-2' : 'md:col-start-1'
        } relative`}
      >
        <div className='relative rounded-lg overflow-hidden aspect-[4/3] shadow-xl'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            className='object-cover'
          />
        </div>
      </div>
    </div>
  );
}
