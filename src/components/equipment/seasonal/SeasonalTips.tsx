// components/equipment/seasonal/SeasonalTips.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { SafetyTip } from '../../../types/summerTypes';

// Updated interface to match your data structure
interface SeasonalTipsProps {
  title: string;
  description: string;
  tips: SafetyTip[]; // Changed from Tip[] to SafetyTip[]
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
  // Helper function to render icon based on icon name string
  const renderIcon = (iconName: string) => {
    // This is a simplified version - in a real app, you would import and use actual icons
    // based on the icon name
    return <div className='text-yellow-400 text-2xl'>{iconName}</div>;
  };

  // Get priority badge
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'critical':
        return (
          <span className='bg-red-900 text-red-200 text-xs px-2 py-1 rounded-full flex items-center'>
            <AlertTriangle className='h-3 w-3 mr-1' />
            Critical
          </span>
        );
      case 'high':
        return (
          <span className='bg-yellow-900 text-yellow-200 text-xs px-2 py-1 rounded-full flex items-center'>
            <AlertCircle className='h-3 w-3 mr-1' />
            Important
          </span>
        );
      case 'medium':
        return (
          <span className='bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded-full flex items-center'>
            <Info className='h-3 w-3 mr-1' />
            Recommended
          </span>
        );
      default:
        return null;
    }
  };

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
          {tips.map((tip) => (
            <div
              key={tip.id}
              className='bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]'
              style={{
                borderLeft: `4px solid ${
                  tip.priority === 'critical'
                    ? '#f87171' // red-400
                    : tip.priority === 'high'
                    ? '#facc15' // yellow-400
                    : '#60a5fa' // blue-400
                }`,
              }}
            >
              <div className='flex flex-col h-full'>
                <div className='flex justify-between items-start mb-4'>
                  <div className='mb-4'>{renderIcon(tip.icon)}</div>
                  {getPriorityBadge(tip.priority)}
                </div>
                <h3 className='text-xl font-bold mb-3 text-white'>
                  {tip.title}
                </h3>
                <p className='text-gray-300 flex-grow'>{tip.description}</p>
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
