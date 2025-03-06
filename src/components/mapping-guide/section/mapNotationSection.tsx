// components/mapping-guide/sections/mapNotationSection.tsx

import React, { FC, useState } from 'react';
import { Map, Compass, Droplet, LandPlot, Home } from 'lucide-react';

interface MapSymbol {
  name: string;
  symbol: string;
  description: string;
}

interface MapNotation {
  category: string;
  symbols: MapSymbol[];
}

interface MapNotationSectionProps {
  notations: MapNotation[];
}

const MapNotationSection: FC<MapNotationSectionProps> = ({ notations }) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    notations[0]?.category || ''
  );

  // Get symbols for active category
  const activeSymbols =
    notations.find((notation) => notation.category === activeCategory)
      ?.symbols || [];

  // Map category names to icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Contour Lines':
        return <Map color='#8D6E63' size={20} />;
      case 'Water Features':
        return <Droplet color='#2196F3' size={20} />;
      case 'Vegetation & Land Cover':
        return <LandPlot color='#4CAF50' size={20} />;
      case 'Human Features':
        return <Home color='#FF5722' size={20} />;
      case 'Navigation Elements':
        return <Compass color='#673AB7' size={20} />;
      default:
        return null;
    }
  };

  // Custom SVG icons based on symbol name
  const getSymbolIcon = (
    category: string,
    name: string,
    symbolText: string
  ) => {
    // Generate SVG based on category and name
    if (category === 'Contour Lines') {
      if (name === 'Index Contour') {
        return (
          <svg width='32' height='4' viewBox='0 0 32 4'>
            <path d='M0 2 L32 2' stroke='#8D6E63' strokeWidth='3' />
          </svg>
        );
      } else if (name === 'Intermediate Contour') {
        return (
          <svg width='32' height='4' viewBox='0 0 32 4'>
            <path d='M0 2 L32 2' stroke='#A1887F' strokeWidth='2' />
          </svg>
        );
      } else if (name === 'Supplementary Contour') {
        return (
          <svg width='32' height='4' viewBox='0 0 32 4'>
            <path
              d='M0 2 L5 2 M8 2 L13 2 M16 2 L21 2 M24 2 L29 2'
              stroke='#A1887F'
              strokeWidth='2'
            />
          </svg>
        );
      } else if (name === 'Depression Contour') {
        return (
          <svg width='32' height='8' viewBox='0 0 32 8'>
            <path d='M0 2 L32 2' stroke='#A1887F' strokeWidth='2' />
            <path
              d='M8 2 L8 6 M16 2 L16 6 M24 2 L24 6'
              stroke='#A1887F'
              strokeWidth='1.5'
            />
          </svg>
        );
      } else if (name === 'Contour Interval') {
        return (
          <div className='font-bold text-gray-700 bg-gray-200 px-2 rounded text-xs text-center'>
            40 ft
          </div>
        );
      }
    } else if (category === 'Water Features') {
      if (name === 'Perennial Stream/River') {
        return (
          <svg width='32' height='6' viewBox='0 0 32 6'>
            <path
              d='M0 3 Q8 1 16 3 Q24 5 32 3'
              stroke='#2196F3'
              strokeWidth='2.5'
              fill='none'
            />
          </svg>
        );
      } else if (name === 'Intermittent Stream') {
        return (
          <svg width='32' height='6' viewBox='0 0 32 6'>
            <path
              d='M0 3 Q4 1 8 3 M12 3 Q16 1 20 3 M24 3 Q28 5 32 3'
              stroke='#2196F3'
              strokeWidth='2'
              fill='none'
            />
          </svg>
        );
      } else if (name === 'Lake/Pond') {
        return (
          <svg width='32' height='16' viewBox='0 0 32 16'>
            <ellipse
              cx='16'
              cy='8'
              rx='14'
              ry='6'
              fill='#2196F3'
              opacity='0.7'
            />
          </svg>
        );
      } else if (name === 'Marsh/Swamp') {
        return (
          <svg width='32' height='16' viewBox='0 0 32 16'>
            <rect x='0' y='0' width='32' height='16' fill='#E1F5FE' />
            <path
              d='M2 8 L5 8 M8 8 L11 8 M14 8 L17 8 M20 8 L23 8 M26 8 L29 8'
              stroke='#2196F3'
              strokeWidth='1'
            />
            <path
              d='M4 4 L4 12 M10 4 L10 12 M16 4 L16 12 M22 4 L22 12 M28 4 L28 12'
              stroke='#4CAF50'
              strokeWidth='1'
            />
          </svg>
        );
      } else if (name === 'Spring') {
        return (
          <svg width='20' height='20' viewBox='0 0 20 20'>
            <circle
              cx='10'
              cy='10'
              r='5'
              fill='#E1F5FE'
              stroke='#2196F3'
              strokeWidth='1.5'
            />
            <circle cx='10' cy='10' r='2' fill='#2196F3' />
            <path d='M10 15 L10 18' stroke='#2196F3' strokeWidth='1.5' />
          </svg>
        );
      }
    } else if (category === 'Vegetation & Land Cover') {
      if (name === 'Forest/Woodland') {
        return (
          <svg width='32' height='20' viewBox='0 0 32 20'>
            <path d='M6 16 L10 6 L14 16 Z' fill='#4CAF50' />
            <rect x='9' y='16' width='2' height='4' fill='#8D6E63' />
            <path d='M18 16 L22 6 L26 16 Z' fill='#4CAF50' />
            <rect x='21' y='16' width='2' height='4' fill='#8D6E63' />
          </svg>
        );
      } else if (name === 'Scrub/Brush') {
        return (
          <svg width='32' height='20' viewBox='0 0 32 20'>
            <circle cx='8' cy='10' r='4' fill='#81C784' />
            <circle cx='16' cy='6' r='3' fill='#81C784' />
            <circle cx='24' cy='12' r='4' fill='#81C784' />
          </svg>
        );
      } else if (name === 'Grassland/Open') {
        return (
          <svg width='32' height='20' viewBox='0 0 32 20'>
            <rect x='0' y='0' width='32' height='20' fill='#F1F8E9' />
            <path
              d='M4 10 C4 6, 4 14, 4 10 M12 8 C12 4, 12 12, 12 8 M20 12 C20 8, 20 16, 20 12 M28 10 C28 6, 28 14, 28 10'
              stroke='#AED581'
              strokeWidth='1'
            />
          </svg>
        );
      } else if (name === 'Orchard') {
        return (
          <svg width='32' height='20' viewBox='0 0 32 20'>
            <rect
              x='0'
              y='0'
              width='32'
              height='20'
              fill='#F1F8E9'
              opacity='0.5'
            />
            <circle cx='8' cy='5' r='2' fill='#8BC34A' />
            <circle cx='8' cy='15' r='2' fill='#8BC34A' />
            <circle cx='16' cy='5' r='2' fill='#8BC34A' />
            <circle cx='16' cy='15' r='2' fill='#8BC34A' />
            <circle cx='24' cy='5' r='2' fill='#8BC34A' />
            <circle cx='24' cy='15' r='2' fill='#8BC34A' />
          </svg>
        );
      } else if (name === 'Barren/Rock') {
        return (
          <svg width='32' height='20' viewBox='0 0 32 20'>
            <rect x='0' y='0' width='32' height='20' fill='#EFEBE9' />
            <path d='M5 8 L8 5 L11 8 L8 11 Z' fill='#BDBDBD' />
            <path d='M18 14 L21 11 L24 14 L21 17 Z' fill='#BDBDBD' />
          </svg>
        );
      }
    } else if (category === 'Human Features') {
      if (name === 'Trail/Path') {
        return (
          <svg width='32' height='4' viewBox='0 0 32 4'>
            <path
              d='M0 2 L4 2 M8 2 L12 2 M16 2 L20 2 M24 2 L28 2'
              stroke='#795548'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
        );
      } else if (name === 'Unimproved Road') {
        return (
          <svg width='32' height='6' viewBox='0 0 32 6'>
            <path
              d='M0 3 L5 3 M8 3 L13 3 M16 3 L21 3 M24 3 L29 3'
              stroke='#795548'
              strokeWidth='2.5'
            />
          </svg>
        );
      } else if (name === 'Improved Road') {
        return (
          <svg width='32' height='6' viewBox='0 0 32 6'>
            <path d='M0 3 L32 3' stroke='#FF5722' strokeWidth='3' />
          </svg>
        );
      } else if (name === 'Building') {
        return (
          <svg width='20' height='20' viewBox='0 0 20 20'>
            <rect
              x='4'
              y='8'
              width='12'
              height='10'
              fill='#BDBDBD'
              stroke='#424242'
              strokeWidth='1'
            />
            <path
              d='M4 8 L10 3 L16 8'
              fill='#E57373'
              stroke='#424242'
              strokeWidth='1'
            />
          </svg>
        );
      } else if (name === 'Campground') {
        return (
          <svg width='20' height='20' viewBox='0 0 20 20'>
            <path
              d='M4 16 L10 6 L16 16'
              fill='none'
              stroke='#795548'
              strokeWidth='1.5'
            />
            <path d='M6 16 L14 16' stroke='#795548' strokeWidth='1.5' />
            <path d='M8 12 L12 12' stroke='#795548' strokeWidth='1' />
          </svg>
        );
      }
    } else if (category === 'Navigation Elements') {
      if (name === 'Benchmark/Survey Point') {
        return (
          <svg width='20' height='20' viewBox='0 0 20 20'>
            <polygon points='10,4 14,14 6,14' fill='#673AB7' />
            <text x='10' y='18' textAnchor='middle' fill='#212121' fontSize='6'>
              1250
            </text>
          </svg>
        );
      } else if (name === 'Magnetic Declination') {
        return (
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <path d='M12 4 L12 20' stroke='#212121' strokeWidth='1.5' />
            <path
              d='M12 4 L9 7 M12 4 L15 7'
              stroke='#212121'
              strokeWidth='1.5'
            />
            <path d='M8 12 L16 12' stroke='#212121' strokeWidth='1.5' />
            <path
              d='M10 9 L12 7 L14 9'
              fill='none'
              stroke='#673AB7'
              strokeWidth='1.5'
            />
          </svg>
        );
      } else if (name === 'UTM Grid Lines') {
        return (
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <path
              d='M6 4 L6 20 M12 4 L12 20 M18 4 L18 20'
              stroke='#3F51B5'
              strokeWidth='1'
            />
            <path
              d='M4 6 L20 6 M4 12 L20 12 M4 18 L20 18'
              stroke='#3F51B5'
              strokeWidth='1'
            />
          </svg>
        );
      } else if (name === 'Scale Bar') {
        return (
          <svg width='32' height='12' viewBox='0 0 32 12'>
            <path d='M4 8 L28 8' stroke='#212121' strokeWidth='1.5' />
            <path d='M4 6 L4 10' stroke='#212121' strokeWidth='1.5' />
            <path d='M12 6 L12 10' stroke='#212121' strokeWidth='1.5' />
            <path d='M20 6 L20 10' stroke='#212121' strokeWidth='1.5' />
            <path d='M28 6 L28 10' stroke='#212121' strokeWidth='1.5' />
          </svg>
        );
      } else if (name === 'North Arrow') {
        return (
          <svg width='20' height='20' viewBox='0 0 20 20'>
            <path d='M10 4 L10 16' stroke='#212121' strokeWidth='1.5' />
            <path
              d='M10 4 L7 8 M10 4 L13 8'
              stroke='#212121'
              strokeWidth='1.5'
            />
            <text x='10' y='19' textAnchor='middle' fill='#212121' fontSize='6'>
              N
            </text>
          </svg>
        );
      }
    }

    // Fallback to text representation
    return <span className='text-lg'>{symbolText}</span>;
  };

  return (
    <div className='bg-slate-800 rounded-xl overflow-hidden shadow-xl'>
      {/* Category Tabs */}
      <div className='flex overflow-x-auto scrollbar-hide border-b border-slate-700'>
        {notations.map((notation) => (
          <button
            key={notation.category}
            className={`px-6 py-3 font-medium whitespace-nowrap transition-colors flex items-center ${
              activeCategory === notation.category
                ? 'bg-emerald-500 text-slate-900'
                : 'text-emerald-500 hover:bg-slate-700'
            }`}
            onClick={() => setActiveCategory(notation.category)}
          >
            <span className='mr-2'>{getCategoryIcon(notation.category)}</span>
            {notation.category}
          </button>
        ))}
      </div>

      {/* Symbols Grid */}
      <div className='p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {activeSymbols.map((symbol) => (
            <div key={symbol.name} className='flex bg-slate-700 rounded-lg p-4'>
              <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-600 rounded-lg mr-4'>
                {/* Custom SVG icon based on symbol name */}
                {getSymbolIcon(activeCategory, symbol.name, symbol.symbol)}
              </div>
              <div>
                <h4 className='font-medium text-white mb-1'>{symbol.name}</h4>
                <p className='text-gray-300 text-sm'>{symbol.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapNotationSection;
