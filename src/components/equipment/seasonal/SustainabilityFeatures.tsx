// components/equipment/seasonal/SustainabilityFeatures.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Leaf, ArrowRight } from 'lucide-react';
import {
  SustainabilityStat,
  SustainabilityBrand,
} from '../../../types/summerTypes';

interface SustainabilityFeatureProps {
  title: string;
  description: string;
  stats: SustainabilityStat[];
  brandsHighlighted: SustainabilityBrand[];
  callToAction: {
    text: string;
    buttonText: string;
    url: string;
  };
}

const SustainabilityFeature: React.FC<SustainabilityFeatureProps> = ({
  title,
  description,
  stats,
  brandsHighlighted,
  callToAction,
}) => {
  // Helper function to render the appropriate icon
  const renderIcon = (
    iconName: string,
    className: string = 'h-6 w-6 text-green-400'
  ) => {
    // In a real app, you might import and use actual icon components
    // For now, we'll just render a leaf icon
    return <Leaf className={className} />;
  };

  // Helper function to render brand card that safely handles missing URLs
  const renderBrandCard = (brand: SustainabilityBrand, index: number) => {
    const cardContent = (
      <>
        <div className='flex items-center mb-2'>
          {brand.logo && (
            <div className='relative w-10 h-10 mr-3'>
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          )}
          <h4 className='text-green-200 font-medium'>{brand.name}</h4>
        </div>
        <p className='text-gray-300 text-sm'>{brand.initiative}</p>
        <span className='text-green-400 text-xs mt-2 group-hover:underline inline-flex items-center'>
          Learn more <ArrowRight className='ml-1 h-3 w-3' />
        </span>
      </>
    );

    // Check if brand.url exists and is a non-empty string
    if (brand.url && typeof brand.url === 'string') {
      return (
        <Link
          key={index}
          href={brand.url}
          className='group bg-green-900 bg-opacity-40 p-4 rounded-lg hover:bg-opacity-60 transition-all duration-300'
        >
          {cardContent}
        </Link>
      );
    } else {
      // Fallback to a div with the same styling when no URL is provided
      return (
        <div
          key={index}
          className='group bg-green-900 bg-opacity-40 p-4 rounded-lg transition-all duration-300'
        >
          {cardContent}
        </div>
      );
    }
  };

  return (
    <div className='relative overflow-hidden'>
      {/* Background leaf pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-10 left-10'>
          <Leaf className='h-40 w-40 text-white' />
        </div>
        <div className='absolute bottom-10 right-10'>
          <Leaf className='h-40 w-40 text-white' />
        </div>
      </div>

      <div className='relative z-10'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-8'>
          <div className='mb-6 md:mb-0 md:mr-8'>
            <div className='flex items-center mb-4'>
              <div className='h-px w-16 bg-green-400 mr-4'></div>
              <span className='text-green-400 tracking-widest uppercase text-sm font-medium'>
                SUSTAINABILITY
              </span>
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              {title}
            </h2>
            <p className='text-gray-300 max-w-xl'>{description}</p>
          </div>

          <Link
            href={callToAction.url || '#'}
            className='flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-200 whitespace-nowrap'
          >
            <span className='mr-2'>{callToAction.buttonText}</span>
            <ArrowRight className='h-5 w-5' />
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-10'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-amber-500 bg-opacity-10 rounded-lg p-6 backdrop-blur-sm'
            >
              <div className='flex flex-col h-full'>
                <div className='flex items-center mb-3'>
                  {renderIcon(stat.icon, 'h-6 w-6 text-green-400 mr-2')}
                  <h3 className='text-white text-lg font-medium'>
                    {stat.label}
                  </h3>
                </div>
                <span className='text-green-400 text-3xl md:text-4xl font-bold mb-2'>
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className='bg-amber-500 bg-opacity-10 rounded-lg p-6 backdrop-blur-sm'>
          <h3 className='text-white text-lg font-medium mb-4'>
            Featured Sustainable Brands
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {brandsHighlighted.map(renderBrandCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityFeature;
