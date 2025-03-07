// components/maps/SeasonalTrailMap.tsx
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { MapPin, Maximize, ZoomIn, ZoomOut } from 'lucide-react';

interface SeasonalTrailMapProps {
  mapImage: StaticImageData;
  mapAlt: string;
  regionName: string;
  highlightedTrails?: Array<{
    id: number;
    name: string;
    position: { top: string; left: string };
  }>;
}

const SeasonalTrailMap: React.FC<SeasonalTrailMapProps> = ({
  mapImage,
  mapAlt,
  regionName,
  highlightedTrails = [],
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTrail, setActiveTrail] = useState<number | null>(null);

  const handleZoomIn = () => {
    if (zoomLevel < 1.5) {
      setZoomLevel((prev) => prev + 0.1);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel((prev) => prev - 0.1);
    }
  };

  const handleReset = () => {
    setZoomLevel(1);
  };

  return (
    <div className='relative bg-gray-700 p-4 rounded-lg overflow-hidden'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-xl font-bold text-white'>{regionName} Trail Map</h3>

        <div className='flex space-x-2'>
          <button
            onClick={handleZoomOut}
            className='bg-gray-600 hover:bg-gray-500 p-2 rounded text-white'
            aria-label='Zoom out'
          >
            <ZoomOut size={18} />
          </button>
          <button
            onClick={handleZoomIn}
            className='bg-gray-600 hover:bg-gray-500 p-2 rounded text-white'
            aria-label='Zoom in'
          >
            <ZoomIn size={18} />
          </button>
          <button
            onClick={handleReset}
            className='bg-gray-600 hover:bg-gray-500 p-2 rounded text-white'
            aria-label='Reset zoom'
          >
            <Maximize size={18} />
          </button>
        </div>
      </div>

      <div className='relative aspect-[4/3] overflow-hidden rounded-lg'>
        <div
          className='relative w-full h-full transition-transform duration-300 ease-in-out'
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'center center',
          }}
        >
          <Image
            src={mapImage}
            alt={mapAlt}
            fill
            style={{ objectFit: 'cover' }}
            className='rounded-lg'
          />

          {/* Trail Markers */}
          {highlightedTrails.map((trail) => (
            <div
              key={trail.id}
              className={`absolute cursor-pointer transition-all duration-300 ${
                activeTrail === trail.id ? 'scale-125' : 'scale-100'
              }`}
              style={{
                top: trail.position.top,
                left: trail.position.left,
              }}
              onMouseEnter={() => setActiveTrail(trail.id)}
              onMouseLeave={() => setActiveTrail(null)}
            >
              <div
                className={`
                p-1 rounded-full 
                ${activeTrail === trail.id ? 'bg-yellow-500' : 'bg-blue-500'}
                shadow-lg animate-pulse
              `}
              >
                <MapPin size={20} className='text-white' />
              </div>

              {activeTrail === trail.id && (
                <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap'>
                  {trail.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='mt-4 text-sm text-gray-300 italic'>
        Use the zoom controls to explore trail details. Hover over markers to
        see trail names.
      </div>
    </div>
  );
};

export default SeasonalTrailMap;
