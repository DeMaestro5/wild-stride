// data/seasonal/winter/weatherConditions.ts

// Remove Lucide imports - they are handled elsewhere
// If using them directly in this file, the JSX needs to be processed in a .tsx file

export interface WeatherCondition {
  title: string;
  icon: string; // Changed from ReactNode to string to use icon names instead of components
  description: string;
  essentialGear: string[];
  dangerLevel: 'Low' | 'Moderate' | 'High' | 'Very High' | 'Extreme';
}

const winterConditions: WeatherCondition[] = [
  {
    title: 'Deep Snow',
    icon: 'Snowflake', // Using string names instead of JSX
    description:
      'Snowshoes or backcountry skis required for efficient travel. Consider gaiters to keep snow out of boots.',
    essentialGear: ['Snowshoes', 'Gaiters', 'Trekking poles with snow baskets'],
    dangerLevel: 'Moderate',
  },
  {
    title: 'Extreme Cold',
    icon: 'Thermometer',
    description:
      'Temperatures below 0°F require proper layering and protection from frostbite. Exposed skin can freeze in minutes.',
    essentialGear: [
      'Insulated parka',
      'Heavy base layers',
      'Face protection',
      'Insulated gloves',
    ],
    dangerLevel: 'High',
  },
  {
    title: 'Whiteout Conditions',
    icon: 'Cloud',
    description:
      'Reduced visibility requires navigation tools and emergency shelter options in case you need to wait it out.',
    essentialGear: ['GPS device', 'Compass', 'Emergency shelter', 'Extra food'],
    dangerLevel: 'Very High',
  },
  {
    title: 'Ice & Slippery Terrain',
    icon: 'Droplets',
    description:
      'Slippery surfaces require additional traction devices and careful foot placement to prevent falls.',
    essentialGear: [
      'Microspikes',
      'Trekking poles',
      'Ice axe (for steep terrain)',
    ],
    dangerLevel: 'High',
  },
  {
    title: 'High Winds',
    icon: 'Wind',
    description:
      'Strong winds dramatically increase the wind chill factor and can make travel difficult or dangerous.',
    essentialGear: [
      'Windproof shell',
      'Goggles',
      'Face protection',
      'Trekking poles',
    ],
    dangerLevel: 'High',
  },
];

export default winterConditions;
