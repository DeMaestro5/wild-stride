// components/equipment/GearMaintenanceTips.tsx
import React from 'react';

interface MaintenanceTip {
  title: string;
  icon: React.ReactNode;
  steps: string[];
}

interface GearMaintenanceTipsProps {
  tips: MaintenanceTip[];
}

const GearMaintenanceTips: React.FC<GearMaintenanceTipsProps> = ({ tips }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {tips.map((tip, index) => (
        <div
          key={index}
          className='bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300'
        >
          <div className='p-6'>
            <div className='flex items-center mb-6'>
              {tip.icon}
              <h3 className='text-xl font-bold text-white ml-4'>{tip.title}</h3>
            </div>

            <ol className='space-y-4'>
              {tip.steps.map((step, stepIndex) => (
                <li key={stepIndex} className='flex'>
                  <div className='mr-4'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-900 text-blue-200 font-bold'>
                      {stepIndex + 1}
                    </div>
                  </div>
                  <div className='text-gray-300 pt-1'>{step}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GearMaintenanceTips;
