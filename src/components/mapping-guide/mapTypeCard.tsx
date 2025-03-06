// components/mapping-guide/mapTypesCard.tsx

import Image from 'next/image';
import { FC } from 'react';
import { MapTypesCardProps } from '../../types/mappingGuideType';

const MapTypesCard: FC<MapTypesCardProps> = ({
  title,
  description,
  image,
  keyFeatures,
  bestUses,
  index,
}) => {
  // Alternate the layout based on index (even/odd)
  const isEven = index % 2 === 0;

  return (
    <div className='flex flex-col md:flex-row bg-slate-800 rounded-xl overflow-hidden shadow-xl'>
      {/* Image Section - Conditionally changes order */}
      <div
        className={`w-full md:w-2/5 relative min-h-[300px] ${
          isEven ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className='transition-transform duration-500 hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-70'></div>
        <div className='absolute bottom-4 left-4 right-4'>
          <span className='bg-emerald-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full'>
            MAP TYPE
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`w-full md:w-3/5 p-6 md:p-8 ${
          isEven ? 'md:order-2' : 'md:order-1'
        }`}
      >
        <h3 className='text-2xl font-bold mb-3'>{title}</h3>
        <p className='text-gray-300 mb-6'>{description}</p>

        {/* Key Features */}
        <div className='mb-6'>
          <h4 className='text-emerald-500 font-semibold text-lg mb-3'>
            Key Features
          </h4>
          <ul className='space-y-3'>
            {keyFeatures.map((feature, idx) => (
              <li key={idx} className='flex items-start'>
                <span className='text-emerald-500 mr-2'>•</span>
                <div>
                  <span className='font-medium'>{feature.name}: </span>
                  <span className='text-gray-400'>{feature.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Best Uses */}
        <div>
          <h4 className='text-emerald-500 font-semibold text-lg mb-3'>
            Best For
          </h4>
          <ul className='space-y-3'>
            {bestUses.map((use, idx) => (
              <li key={idx} className='flex items-start'>
                <span className='text-emerald-500 mr-2'>→</span>
                <div>
                  <span className='font-medium'>{use.activity}: </span>
                  <span className='text-gray-400'>{use.why}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapTypesCard;
