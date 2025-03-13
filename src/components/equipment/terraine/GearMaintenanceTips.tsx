// components/equipment/terrain/GearMaintenanceTips.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Wrench, CheckCircle } from 'lucide-react';
import { MaintenanceTip } from '../../../types/terraineTypes';

type GearMaintenanceTipsProps = {
  tips: MaintenanceTip[];
};

const GearMaintenanceTips: React.FC<GearMaintenanceTipsProps> = ({ tips }) => {
  const [activeTip, setActiveTip] = useState<string>(tips[0]?.id || '');

  // Find the active tip object
  const currentTip = tips.find((tip) => tip.id === activeTip) || tips[0];

  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg'>
      <div className='flex flex-col lg:flex-row'>
        {/* Sidebar Navigation */}
        <div className='lg:w-1/3 bg-gray-900'>
          <div className='p-5 border-b border-gray-700'>
            <h3 className='text-xl font-bold text-white flex items-center'>
              <Wrench className='mr-2 h-5 w-5 text-green-500' />
              Maintenance Guides
            </h3>
          </div>
          <ul>
            {tips.map((tip) => (
              <li key={tip.id}>
                <button
                  onClick={() => setActiveTip(tip.id)}
                  className={`w-full text-left p-4 border-b border-gray-800 transition duration-200 ${
                    activeTip === tip.id
                      ? 'bg-gray-800 text-white border-l-4 border-l-green-500'
                      : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <span className='font-medium'>{tip.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className='lg:w-2/3 p-6'>
          {currentTip && (
            <div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                {currentTip.title}
              </h3>
              <div className='relative h-56 w-full mb-6 rounded-lg overflow-hidden'>
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
                Maintenance Steps:
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
    </div>
  );
};

export default GearMaintenanceTips;
