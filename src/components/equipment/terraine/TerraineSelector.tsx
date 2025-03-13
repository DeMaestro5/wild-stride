// components/equipment/terrain/TerrainSelector.tsx
import React from 'react';
import { Mountain, Sun, Trees, Droplets, Waves } from 'lucide-react';
import { TerrainType } from '../../../types/terraineTypes';

type TerrainSelectorProps = {
  terrainTypes: TerrainType[];
  onTerrainChange: (terrainId: string) => void;
};

const TerrainSelector: React.FC<TerrainSelectorProps> = ({
  terrainTypes,
  onTerrainChange,
}) => {
  // Get icon component based on icon name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'mountain':
        return <Mountain className='h-6 w-6' />;
      case 'sun':
        return <Sun className='h-6 w-6' />;
      case 'tree':
        return <Trees className='h-6 w-6' />;
      case 'droplets':
        return <Droplets className='h-6 w-6' />;
      case 'wave':
        return <Waves className='h-6 w-6' />;
      default:
        return <Mountain className='h-6 w-6' />;
    }
  };

  return (
    <div className='max-w-5xl mx-auto'>
      <h2 className='text-white text-center text-xl mb-4'>
        Select Terrain Type
      </h2>
      <div className='flex flex-wrap justify-center items-stretch gap-2 md:gap-4'>
        {terrainTypes.map((terrain) => (
          <button
            key={terrain.id}
            onClick={() => onTerrainChange(terrain.id)}
            className={`bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-${terrain.color} text-white p-3 md:p-4 rounded-lg flex flex-col items-center transition-all duration-300 min-w-[120px] md:min-w-[150px]`}
          >
            <div className={`text-${terrain.color} mb-2`}>
              {getIcon(terrain.icon)}
            </div>
            <div className='font-medium'>{terrain.name}</div>
            <div className='text-xs text-gray-400 mt-1'>
              {terrain.recommendedExperience}
            </div>
            <div className='flex mt-2'>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-4 mx-0.5 rounded-full ${
                    i < terrain.difficultyLevel
                      ? `bg-${terrain.color}`
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TerrainSelector;
