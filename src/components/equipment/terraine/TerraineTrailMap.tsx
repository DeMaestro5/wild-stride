// components/equipment/terrain/TerrainTrailMap.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Map } from 'lucide-react';

type TerrainTrailMapProps = {
  mapImage: string | StaticImageData;
  mapAlt: string;
  regionName: string;
};

const TerrainTrailMap: React.FC<TerrainTrailMapProps> = ({
  mapImage,
  mapAlt,
  regionName,
}) => {
  return (
    <div className='bg-gray-700 rounded-lg overflow-hidden shadow-lg'>
      <div className='p-4 bg-gray-800 flex items-center'>
        <Map className='h-5 w-5 text-green-500 mr-2' />
        <h3 className='text-xl font-bold text-white'>{regionName}</h3>
      </div>

      <div className='relative h-[400px] w-full'>
        <Image
          src={mapImage}
          alt={mapAlt}
          fill
          sizes='(max-width: 768px) 100vw, 50vw'
          style={{ objectFit: 'cover' }}
          className='hover:scale-105 transition-transform duration-300'
        />
      </div>

      <div className='p-4 bg-gray-800 text-sm text-gray-300'>
        <p className='italic'>
          Click on trail markers on the map to view detailed trail information
          and difficulty ratings.
        </p>
      </div>
    </div>
  );
};

export default TerrainTrailMap;
