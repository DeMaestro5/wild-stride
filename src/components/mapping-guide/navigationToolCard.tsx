// components/mapping-guide/navigationToolCard.tsx

import Image from 'next/image';
import { FC } from 'react';
import { NavigationToolCardProps } from '../../types/mappingGuideType';

const NavigationToolCard: FC<NavigationToolCardProps> = ({
  name,
  image,
  description,
  advantages,
  limitations,
  icon,
}) => {
  return (
    <div className='bg-slate-800 rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:translate-y-[-5px]'>
      {/* Tool Image */}
      <div className='relative h-48'>
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          className='transition-all duration-500 hover:scale-105'
        />

        {/* Icon Overlay */}
        <div className='absolute top-4 left-4 bg-emerald-500 p-2 rounded-full'>
          <span className='text-slate-900 text-xl'>
            {/* This would be an actual icon component in practice */}
            {icon === 'compass' && '🧭'}
            {icon === 'gps' && '📱'}
            {icon === 'map' && '🗺️'}
            {icon === 'altimeter' && '📈'}
            {icon === 'watch' && '⌚'}
            {icon === 'satellite' && '🛰️'}
            {/* Add fallback */}
            {![
              'compass',
              'gps',
              'map',
              'altimeter',
              'watch',
              'satellite',
            ].includes(icon) && '🔧'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className='p-6'>
        <h3 className='text-xl font-bold mb-2'>{name}</h3>
        <p className='text-gray-300 text-sm mb-5'>{description}</p>

        {/* Advantages */}
        <div className='mb-4'>
          <h4 className='text-emerald-400 font-medium text-sm uppercase tracking-wider mb-2'>
            Advantages
          </h4>
          <ul className='space-y-1'>
            {advantages.map((advantage, idx) => (
              <li key={idx} className='flex items-start text-sm'>
                <span className='text-emerald-500 mr-2'>✓</span>
                <span className='text-gray-300'>{advantage}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Limitations */}
        <div>
          <h4 className='text-red-400 font-medium text-sm uppercase tracking-wider mb-2'>
            Limitations
          </h4>
          <ul className='space-y-1'>
            {limitations.map((limitation, idx) => (
              <li key={idx} className='flex items-start text-sm'>
                <span className='text-red-500 mr-2'>✗</span>
                <span className='text-gray-300'>{limitation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationToolCard;
