// components/equipment/LayeringSystem.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ChevronRight } from 'lucide-react';

interface LayerInfo {
  name: string;
  description: string;
  materials: string[];
  features: string[];
  image: string | StaticImageData;
  tips: string;
}

interface LayeringSystemProps {
  layers: LayerInfo[];
}

const LayeringSystem: React.FC<LayeringSystemProps> = ({ layers }) => {
  return (
    <div className='relative'>
      {/* Layer Connections */}
      <div className='hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 -translate-y-1/2 z-0'></div>

      {/* Layers */}
      <div className='relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {layers.map((layer, index) => (
          <div
            key={index}
            className='bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-600 hover:border-yellow-500 transition-all duration-300'
          >
            <div className='h-48 relative'>
              <Image
                src={layer.image}
                alt={`${layer.name} layering example`}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <span className='bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded'>
                  Layer {index + 1}
                </span>
                <h3 className='text-white text-xl font-bold mt-2'>
                  {layer.name}
                </h3>
              </div>
            </div>

            <div className='p-5'>
              <p className='text-gray-300 mb-4'>{layer.description}</p>

              <div className='mb-4'>
                <h4 className='text-sm uppercase tracking-wider text-gray-400 mb-2'>
                  Recommended Materials
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {layer.materials.map((material, idx) => (
                    <span
                      key={idx}
                      className='bg-gray-600 text-white text-xs px-2 py-1 rounded'
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              <div className='mb-4'>
                <h4 className='text-sm uppercase tracking-wider text-gray-400 mb-2'>
                  Key Features
                </h4>
                <ul className='space-y-1'>
                  {layer.features.map((feature, idx) => (
                    <li key={idx} className='text-gray-300 flex items-start'>
                      <ChevronRight className='h-4 w-4 text-yellow-500 mt-1 mr-1 flex-shrink-0' />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-4 pt-4 border-t border-gray-600'>
                <h4 className='text-sm uppercase tracking-wider text-gray-400 mb-2'>
                  Pro Tip
                </h4>
                <p className='text-gray-300 italic'>{layer.tips}</p>
              </div>
            </div>

            {/* Arrows connecting layers (only on mobile) */}
            {index < layers.length - 1 && (
              <div className='md:hidden flex justify-center my-4'>
                <ChevronDown className='h-8 w-8 text-yellow-500' />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// For the mobile arrow
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <polyline points='6 9 12 15 18 9'></polyline>
  </svg>
);

export default LayeringSystem;
