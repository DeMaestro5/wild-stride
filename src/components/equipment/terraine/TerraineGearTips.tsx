// components/equipment/terrain/TerrainGearTips.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { GearTip } from '../../../types/terraineTypes';

type TerrainGearTipsProps = {
  tips: GearTip[];
};

const TerrainGearTips: React.FC<TerrainGearTipsProps> = ({ tips }) => {
  const [activeTip, setActiveTip] = useState<string>(tips[0]?.id || '');

  // Find the active tip object
  const currentTip = tips.find((tip) => tip.id === activeTip) || tips[0];

  return (
    <div className='flex flex-col lg:flex-row gap-8'>
      {/* Sidebar Navigation */}
      <div className='lg:w-1/3'>
        <ul className='space-y-2'>
          {tips.map((tip) => (
            <li key={tip.id}>
              <button
                onClick={() => setActiveTip(tip.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                  activeTip === tip.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                <div className='font-medium'>{tip.title}</div>
                <div className='flex flex-wrap gap-1 mt-2'>
                  {tip.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        activeTip === tip.id
                          ? 'bg-green-700 text-white'
                          : 'bg-gray-600 text-gray-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className='lg:w-2/3 bg-gray-700 p-6 rounded-lg'>
        {currentTip && (
          <div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              {currentTip.title}
            </h3>
            <div className='relative h-64 w-full mb-6 rounded-lg overflow-hidden'>
              <Image
                src={currentTip.image}
                alt={currentTip.title}
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className='text-gray-300 mb-6'>{currentTip.description}</p>

            <h4 className='text-lg font-medium text-white mb-4'>
              Step-by-Step Guide:
            </h4>
            <ul className='space-y-3'>
              {currentTip.steps.map((step, index) => (
                <li key={index} className='flex'>
                  <CheckCircle className='text-green-500 h-5 w-5 mt-0.5 mr-3 flex-shrink-0' />
                  <span className='text-gray-300'>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerrainGearTips;
