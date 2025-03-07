// components/equipment/SeasonalTips.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Tip {
  title: string;
  content: string;
  icon: React.ReactNode;
}

interface SeasonalTipsProps {
  title: string;
  description: string;
  tips: Tip[];
  linkText?: string;
  linkUrl?: string;
}

const SeasonalTips: React.FC<SeasonalTipsProps> = ({
  title,
  description,
  tips,
  linkText,
  linkUrl,
}) => {
  return (
    <div className='bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700'>
      <div className='p-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
            {title}
          </h2>
          <p className='text-gray-400 max-w-3xl mx-auto'>{description}</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {tips.map((tip, index) => (
            <div
              key={index}
              className='bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]'
            >
              <div className='flex flex-col h-full'>
                <div className='mb-4'>{tip.icon}</div>
                <h3 className='text-xl font-bold mb-3 text-white'>
                  {tip.title}
                </h3>
                <p className='text-gray-300 flex-grow'>{tip.content}</p>
              </div>
            </div>
          ))}
        </div>

        {linkText && linkUrl && (
          <div className='text-center mt-12'>
            <Link
              href={linkUrl}
              className='inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-200'
            >
              <span className='mr-2'>{linkText}</span>
              <ArrowRight className='h-5 w-5' />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeasonalTips;
