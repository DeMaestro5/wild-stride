// components/mapping-guide/sections/emergencyNavigationSection.tsx

import { FC, useState } from 'react';

interface EmergencyTip {
  title: string;
  description: string;
  steps: string[];
  caution: string;
}

interface EmergencyNavigationSectionProps {
  tips: EmergencyTip[];
}

const EmergencyNavigationSection: FC<EmergencyNavigationSectionProps> = ({
  tips,
}) => {
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedTip === index) {
      setExpandedTip(null);
    } else {
      setExpandedTip(index);
    }
  };

  return (
    <div className='space-y-4'>
      {tips.map((tip, index) => (
        <div
          key={index}
          className='bg-slate-800 rounded-xl overflow-hidden shadow-xl border border-slate-700'
        >
          {/* Tip Header - Always visible */}
          <button
            className='w-full text-left p-5 flex justify-between items-center hover:bg-slate-750 transition-colors'
            onClick={() => toggleExpand(index)}
          >
            <div className='flex items-center'>
              <span className='bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4'>
                {index + 1}
              </span>
              <h3 className='text-xl font-bold'>{tip.title}</h3>
            </div>
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${
                expandedTip === index ? 'transform rotate-180' : ''
              }`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>

          {/* Expanded Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedTip === index ? 'max-h-[1000px]' : 'max-h-0'
            }`}
          >
            <div className='p-5 border-t border-slate-700'>
              <p className='text-gray-300 mb-6'>{tip.description}</p>

              {/* Steps */}
              <div className='mb-6'>
                <h4 className='text-emerald-500 font-semibold mb-3'>
                  How To Do It
                </h4>
                <ol className='space-y-2 pl-5'>
                  {tip.steps.map((step, stepIdx) => (
                    <li key={stepIdx} className='list-decimal text-gray-300'>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Caution Note */}
              <div className='bg-yellow-900 bg-opacity-30 border-l-4 border-yellow-500 p-4 rounded'>
                <div className='flex'>
                  <svg
                    className='w-6 h-6 text-yellow-500 mr-2'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                    />
                  </svg>
                  <p className='text-yellow-300 text-sm'>{tip.caution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmergencyNavigationSection;
