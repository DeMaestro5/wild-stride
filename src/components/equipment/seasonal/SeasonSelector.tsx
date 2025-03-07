// components/equipment/SeasonSelector.tsx
'use client';

import React from 'react';
import Link from 'next/link';

interface Season {
  id: string;
  name: string;
  icon: React.ReactNode;
  active: boolean;
}

interface SeasonSelectorProps {
  seasons: Season[];
  onSeasonChange?: (seasonId: string) => void;
}

const SeasonSelector: React.FC<SeasonSelectorProps> = ({
  seasons,
  onSeasonChange,
}) => {
  return (
    <div className='flex justify-center'>
      <div className='inline-flex bg-white rounded-full shadow-md p-1'>
        {seasons.map((season) => (
          <Link
            key={season.id}
            href={`/equipment/seasonal/${season.id}`}
            className={`flex items-center px-6 py-3 rounded-full transition-all duration-200 ${
              season.active
                ? 'bg-yellow-500 text-gray-900 font-semibold'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => onSeasonChange && onSeasonChange(season.id)}
          >
            {season.icon}
            {season.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SeasonSelector;
