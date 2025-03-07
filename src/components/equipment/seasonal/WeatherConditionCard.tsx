// components/equipment/WeatherConditionCard.tsx
import React from 'react';

interface WeatherConditionCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  essentialGear: string[];
  dangerLevel: 'Low' | 'Moderate' | 'High' | 'Very High' | 'Extreme';
}

const WeatherConditionCard: React.FC<WeatherConditionCardProps> = ({
  title,
  icon,
  description,
  essentialGear,
  dangerLevel,
}) => {
  // Determine color based on danger level
  const getDangerColor = (level: string) => {
    switch (level) {
      case 'Low':
        return 'bg-green-500 text-green-100';
      case 'Moderate':
        return 'bg-yellow-500 text-yellow-100';
      case 'High':
        return 'bg-orange-500 text-orange-100';
      case 'Very High':
        return 'bg-red-500 text-red-100';
      case 'Extreme':
        return 'bg-red-700 text-red-100';
      default:
        return 'bg-gray-500 text-gray-100';
    }
  };

  const dangerColor = getDangerColor(dangerLevel);

  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-yellow-500 transition-all duration-300'>
      <div className='p-6'>
        <div className='flex items-center mb-4'>
          <div className='rounded-full bg-blue-900 p-3 mr-4'>{icon}</div>
          <h3 className='text-xl font-bold text-white'>{title}</h3>
        </div>

        <p className='text-gray-300 mb-6'>{description}</p>

        <div className='mb-4'>
          <h4 className='text-sm uppercase tracking-wider text-gray-400 mb-2'>
            Essential Gear
          </h4>
          <ul className='space-y-1'>
            {essentialGear.map((item, index) => (
              <li key={index} className='text-gray-300 flex items-center'>
                <span className='w-2 h-2 bg-yellow-400 rounded-full mr-2'></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-6 pt-4 border-t border-gray-700'>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-gray-400'>Danger Level:</span>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${dangerColor}`}
            >
              {dangerLevel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherConditionCard;
