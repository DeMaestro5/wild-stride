'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Season {
  id: string;
  name: string;
  icon: React.ReactNode;
  active?: boolean; // This can be optional as we'll determine active state from the URL
}

interface SeasonSelectorProps {
  seasons: Season[];
  onSeasonChange?: (seasonId: string) => void; // This can be kept for additional state updates if needed
}

const SeasonSelector: React.FC<SeasonSelectorProps> = ({
  seasons,
  onSeasonChange,
}) => {
  // Get the current pathname to determine which season is active
  const pathname = usePathname();

  return (
    <div className='flex justify-center'>
      <div className='inline-flex bg-white rounded-full shadow-md p-1'>
        {seasons.map((season) => {
          // Determine if this season is active based on the current URL path
          const seasonPath = `/equipment/seasonal/${season.id}`;
          const isActive = pathname === seasonPath;

          return (
            <Link
              key={season.id}
              href={seasonPath}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-yellow-500 text-gray-900 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => {
                // If onSeasonChange is provided, call it (for any additional state updates)
                if (onSeasonChange) {
                  onSeasonChange(season.id);
                }
              }}
            >
              {season.icon}
              <span className='ml-2'>{season.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SeasonSelector;
