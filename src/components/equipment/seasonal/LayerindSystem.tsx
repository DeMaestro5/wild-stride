// components/equipment/seasonal/LayeringSystem.tsx
import React from 'react';
import Image from 'next/image';
import { ChevronRight, Layers } from 'lucide-react';
import { LayerItem } from '../../../types/summerTypes';

interface LayeringSystemProps {
  layers: LayerItem[];
}

const LayeringSystem: React.FC<LayeringSystemProps> = ({ layers }) => {
  // Verify that we have valid layers data
  if (!layers || !Array.isArray(layers) || layers.length === 0) {
    return (
      <div className='p-8 text-center bg-gray-800 rounded-lg'>
        <Layers className='mx-auto h-12 w-12 text-gray-400 mb-4' />
        <h3 className='text-xl font-bold text-white'>
          Layering Information Coming Soon
        </h3>
        <p className='text-gray-400 mt-2'>
          We are currently updating our layering recommendations for this
          season.
        </p>
      </div>
    );
  }

  return (
    <div className='relative'>
      {/* Layer Connections */}
      <div className='hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 -translate-y-1/2 z-0'></div>

      {/* Layers */}
      <div className='relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {layers.map((layer, index) => {
          // Make sure we have a valid layer object with required properties
          if (!layer || typeof layer !== 'object') return null;

          // Use index as fallback key if id is missing
          const key = layer.id || `layer-${index}`;

          // Use placeholder image if imageUrl is empty or invalid
          const imageUrl =
            layer.imageUrl &&
            typeof layer.imageUrl === 'string' &&
            layer.imageUrl.trim() !== ''
              ? layer.imageUrl
              : '/images/placeholder-layer.jpg';

          return (
            <div
              key={key}
              className='bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-600 hover:border-yellow-500 transition-all duration-300'
            >
              <div className='h-48 relative'>
                {/* Only render Image if we have a valid imageUrl */}
                {imageUrl !== '/images/placeholder-layer.jpg' ? (
                  <Image
                    src={imageUrl}
                    alt={`${layer.name || `Layer ${index + 1}`} example`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className='h-full w-full flex items-center justify-center bg-gray-800'>
                    <Layers className='h-12 w-12 text-gray-500' />
                  </div>
                )}
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <span className='bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded'>
                    Layer {index + 1}
                  </span>
                  <h3 className='text-white text-xl font-bold mt-2'>
                    {layer.name || `Layer ${index + 1}`}
                  </h3>
                </div>
              </div>

              <div className='p-5'>
                <p className='text-gray-300 mb-4'>
                  {layer.description || 'Description coming soon.'}
                </p>

                {/* Only render examples section if examples exist and are valid */}
                {layer.examples &&
                  Array.isArray(layer.examples) &&
                  layer.examples.length > 0 && (
                    <>
                      <div className='mb-4'>
                        <h4 className='text-sm uppercase tracking-wider text-gray-400 mb-2'>
                          Recommended Products
                        </h4>
                        <div className='flex flex-wrap gap-2'>
                          {layer.examples.map((example, idx) => (
                            <span
                              key={`${key}-example-${idx}`}
                              className='bg-gray-600 text-white text-xs px-2 py-1 rounded'
                            >
                              {example.name || `Product ${idx + 1}`}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className='mb-4'>
                        <h4 className='text-sm uppercase tracking-wider text-gray-400 mb-2'>
                          Key Features
                        </h4>
                        <ul className='space-y-1'>
                          {layer.examples.flatMap((example, exampleIdx) => {
                            // Make sure features exist and are valid
                            if (
                              !example.features ||
                              !Array.isArray(example.features) ||
                              example.features.length === 0
                            ) {
                              return [];
                            }

                            return example.features.map(
                              (feature, featureIdx) => (
                                <li
                                  key={`${key}-example-${exampleIdx}-feature-${featureIdx}`}
                                  className='text-gray-300 flex items-start'
                                >
                                  <ChevronRight className='h-4 w-4 text-yellow-500 mt-1 mr-1 flex-shrink-0' />
                                  <span className='text-yellow-400'>
                                    {example.name ||
                                      `Product ${exampleIdx + 1}`}
                                    :
                                  </span>{' '}
                                  {feature}
                                </li>
                              )
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  )}

                <div className='mt-4 pt-4 border-t border-gray-600'>
                  <h4 className='text-sm uppercase tracking-wider text-gray-400 mb-2'>
                    Pro Tip
                  </h4>
                  <p className='text-gray-300 italic'>
                    {layer.purpose || 'Purpose details coming soon.'}
                  </p>
                </div>
              </div>

              {/* Arrows connecting layers (only on mobile) */}
              {index < layers.length - 1 && (
                <div className='md:hidden flex justify-center my-4'>
                  <ChevronDown className='h-8 w-8 text-yellow-500' />
                </div>
              )}
            </div>
          );
        })}
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
