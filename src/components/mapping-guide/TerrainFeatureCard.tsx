// components/mapping-guide/terrainFeatureCard.tsx

import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface TerrainFeatureCardProps {
  name: string;
  image: string | StaticImageData;
  mapRepresentation: string;
  navigationUse: string[];
}

const TerrainFeatureCard: FC<TerrainFeatureCardProps> = ({
  name,
  image,
  mapRepresentation,
  navigationUse,
}) => {
  return (
    <div className='bg-slate-800 rounded-xl overflow-hidden shadow-xl h-full flex flex-col'>
      {/* Feature Image */}
      <div className='relative h-48'>
        <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} />
      </div>

      {/* Content */}
      <div className='p-5 flex-grow flex flex-col'>
        <h3 className='text-xl font-bold mb-2'>{name}</h3>

        {/* Map Representation */}
        <div className='mb-4'>
          <h4 className='text-emerald-500 text-sm font-medium mb-1'>
            Map Representation
          </h4>
          <p className='text-gray-300 text-sm'>{mapRepresentation}</p>
        </div>

        {/* Navigation Use */}
        <div className='mt-auto'>
          <h4 className='text-emerald-500 text-sm font-medium mb-1'>
            Navigation Uses
          </h4>
          <ul className='space-y-1'>
            {navigationUse.map((use, idx) => (
              <li key={idx} className='flex items-start text-sm'>
                <span className='text-emerald-500 mr-2'>→</span>
                <span className='text-gray-300'>{use}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TerrainFeatureCard;
