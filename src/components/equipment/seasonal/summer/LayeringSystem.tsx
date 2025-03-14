import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { LayerItem } from '../../../../types/summerTypes';

interface LayeringSystemProps {
  layers: LayerItem[];
}

const LayeringSystem: React.FC<LayeringSystemProps> = ({ layers }) => {
  return (
    <div className='space-y-12'>
      {layers.map((layer, index) => (
        <div
          key={layer.id}
          className={`rounded-lg overflow-hidden ${
            index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-750'
          }`}
        >
          <div className='flex flex-col md:flex-row'>
            {/* Image Section */}
            <div className='md:w-1/3 relative h-64 md:h-auto'>
              <div className='h-full w-full relative'>
                <Image
                  src={layer.imageUrl}
                  alt={layer.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className='md:w-2/3 p-6'>
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${layer.colorClass} text-gray-800`}
              >
                {layer.name}
              </div>

              <h3 className='text-2xl font-bold text-white mb-2'>
                {layer.purpose}
              </h3>
              <p className='text-gray-300 mb-6'>{layer.description}</p>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {layer.examples.map((example, i) => (
                  <div key={i} className='bg-gray-800 rounded-lg p-4'>
                    <h4 className='font-bold text-white mb-1'>
                      {example.name}
                    </h4>
                    <p className='text-sm text-gray-400 mb-3'>
                      by {example.brand}
                    </p>

                    <ul className='space-y-2'>
                      {example.features.map((feature, j) => (
                        <li key={j} className='flex items-start'>
                          <span className='text-green-400 mr-2 mt-1'>
                            <Check size={16} />
                          </span>
                          <span className='text-gray-300 text-sm'>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className='mt-8 text-center'>
        <p className='text-gray-400 text-sm'>
          Pro Tip: The key to comfort in varying conditions is to add or remove
          layers as needed rather than wearing one heavy garment.
        </p>
      </div>
    </div>
  );
};

export default LayeringSystem;
