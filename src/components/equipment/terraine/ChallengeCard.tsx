// components/equipment/terrain/ChallengeCard.tsx
import React from 'react';
import {
  Mountain,
  Sun,
  Wind,
  Snowflake,
  Cloud,
  Thermometer,
  Droplets,
  Compass,
  AlertTriangle,
  Map,
} from 'lucide-react';
import { TerrainChallenge } from '../../../types/terraineTypes';

const ChallengeCard: React.FC<TerrainChallenge> = ({
  title,
  icon,
  description,
  essentialGear,
  difficultyLevel,
}) => {
  // Get icon component based on icon name
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      mountain: <Mountain className='h-6 w-6' />,
      sun: <Sun className='h-6 w-6' />,
      wind: <Wind className='h-6 w-6' />,
      snow: <Snowflake className='h-6 w-6' />,
      cloud: <Cloud className='h-6 w-6' />,
      temp: <Thermometer className='h-6 w-6' />,
      water: <Droplets className='h-6 w-6' />,
      navigation: <Compass className='h-6 w-6' />,
      danger: <AlertTriangle className='h-6 w-6' />,
      map: <Map className='h-6 w-6' />,
    };

    return iconMap[iconName] || <Mountain className='h-6 w-6' />;
  };

  // Get danger level class based on level
  const getDifficultyColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-green-500';
      case 2:
        return 'bg-yellow-500';
      case 3:
        return 'bg-orange-500';
      case 4:
        return 'bg-red-500';
      case 5:
        return 'bg-red-700';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border border-gray-700'>
      <div className='p-5'>
        <div className='flex items-center mb-4'>
          <div className='text-green-500 mr-3'>{getIcon(icon)}</div>
          <h3 className='text-xl font-bold text-white'>{title}</h3>
        </div>
        <p className='text-gray-300 mb-4 min-h-[60px]'>{description}</p>

        <div className='mb-4'>
          <div className='text-sm text-gray-400 mb-1'>Difficulty Level:</div>
          <div className='flex items-center space-x-1'>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`h-2 w-8 rounded ${
                  i < difficultyLevel
                    ? getDifficultyColor(difficultyLevel)
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div>
          <div className='text-sm text-gray-400 mb-2'>Essential Gear:</div>
          <ul className='space-y-1'>
            {essentialGear.map((item, index) => (
              <li
                key={index}
                className='text-gray-300 text-sm flex items-center'
              >
                <span className='mr-2'>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
