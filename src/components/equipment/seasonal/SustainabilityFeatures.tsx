// components/ui/SustainabilityFeature.tsx
import React from 'react';
import Link from 'next/link';
import { Leaf, ArrowRight } from 'lucide-react';

interface Stat {
  label: string;
  value: string;
  description: string;
}

interface SustainabilityFeatureProps {
  title: string;
  description: string;
  stats: Stat[];
  brandsHighlighted: string[];
  callToAction: {
    text: string;
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
            href={callToAction.url}
            className='flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-200 whitespace-nowrap'
          >
            <span className='mr-2'>{callToAction.text}</span>
            <ArrowRight className='h-5 w-5' />
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-10'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm'
            >
              <div className='flex flex-col h-full'>
                <span className='text-green-400 text-3xl md:text-4xl font-bold mb-2'>
                  {stat.value}
                </span>
                <h3 className='text-white text-lg font-medium mb-2'>
                  {stat.label}
                </h3>
                <p className='text-gray-300 text-sm'>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm'>
          <h3 className='text-white text-lg font-medium mb-4'>
            Featured Sustainable Brands
          </h3>
          <div className='flex flex-wrap gap-3'>
            {brandsHighlighted.map((brand, index) => (
              <span
                key={index}
                className='bg-green-900 text-green-200 px-3 py-1 rounded-full text-sm'
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityFeature;
