// components/equipment/seasonal/SeasonalEquipmentGuide.tsx
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Download, Check, BookOpen, Award, Users } from 'lucide-react';
import { EquipmentGuideFeature } from '../../../types/summerTypes';

interface SeasonalEquipmentGuideProps {
  title: string;
  description: string;
  coverImage: string | StaticImageData;
  downloadUrl: string;
  features: EquipmentGuideFeature[]; // Changed from string[] to EquipmentGuideFeature[]
}

const SeasonalEquipmentGuide: React.FC<SeasonalEquipmentGuideProps> = ({
  title,
  description,
  coverImage,
  downloadUrl,
  features,
}) => {
  // Helper function to render the appropriate icon
  const renderIcon = (
    iconName: string,
    className: string = 'h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0'
  ) => {
    switch (iconName) {
      case 'book':
        return <BookOpen className={className} />;
      case 'award':
        return <Award className={className} />;
      case 'users':
        return <Users className={className} />;
      default:
        return <Check className={className} />;
    }
  };

  return (
    <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-700'>
      <div className='p-8 md:p-12'>
        <div className='flex flex-col md:flex-row items-center'>
          {/* Book/Guide Cover */}
          <div className='mb-8 md:mb-0 md:mr-12'>
            <div className='relative w-48 h-64 md:w-64 md:h-80 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500'>
              <Image
                src={coverImage}
                alt='Equipment Guide Cover'
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-lg'
              />
              <div className='absolute inset-0 border-4 border-yellow-500 rounded-lg pointer-events-none'></div>
            </div>
          </div>

          {/* Content */}
          <div className='flex-1'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              {title}
            </h2>
            <p className='text-gray-300 mb-6'>{description}</p>

            <div className='mb-8'>
              <h3 className='text-lg font-semibold text-white mb-4'>
                What&apos;s Inside:
              </h3>
              <ul className='space-y-3'>
                {features.map((feature, index) => (
                  <li key={index} className='flex items-start'>
                    {renderIcon(feature.icon)}
                    <div>
                      <span className='text-white font-medium'>
                        {feature.title}
                      </span>
                      <p className='text-gray-400 text-sm mt-1'>
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={downloadUrl}
              className='inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition duration-300'
            >
              <Download className='mr-2 h-5 w-5' />
              Download Free Guide
            </Link>

            <p className='text-gray-400 text-sm mt-4'>
              PDF format • 8.5 MB • No email required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalEquipmentGuide;
