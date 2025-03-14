import { LayerItem } from '../../../../../types/summerTypes';

const summerLayeringSystem: LayerItem[] = [
  {
    id: 'base-layer',
    name: 'Base Layer',
    description:
      'Lightweight, moisture-wicking fabrics that pull sweat away from your skin to keep you dry and comfortable.',
    purpose:
      'Manages moisture and helps regulate body temperature in hot conditions.',
    examples: [
      {
        name: 'UltraCool Hiking Tee',
        brand: 'Mountain Designs',
        features: [
          'Ultralight',
          'Quick-drying',
          'Anti-odor treatment',
          'UPF 30+',
        ],
      },
      {
        name: 'Trail Breeze Tank',
        brand: 'Alpine Life',
        features: [
          'Mesh panels',
          'Flatlock seams',
          'Recycled polyester',
          'UPF 50+',
        ],
      },
    ],
    imageUrl: '/images/summer_base_layer.jpg',
    colorClass: 'bg-blue-100',
  },
  {
    id: 'sun-protection',
    name: 'Sun Protection Layer',
    description:
      'Despite the heat, long sleeves and pants can offer better protection from sun and insects than sunscreen alone.',
    purpose:
      'Provides physical barrier against UV rays, insects, and scratches from vegetation.',
    examples: [
      {
        name: 'SolarGuard Hoodie',
        brand: 'Trailhead',
        features: [
          'UPF 50+',
          'Cooling technology',
          'Thumb holes',
          'Lightweight',
        ],
      },
      {
        name: 'BugShield Convertible Pants',
        brand: 'WildGuard',
        features: [
          'Zip-off legs',
          'Permethrin treatment',
          'Multiple pockets',
          'Quick-dry nylon',
        ],
      },
    ],
    imageUrl: '/images/summer_sun_layer.jpg',
    colorClass: 'bg-yellow-100',
  },
  {
    id: 'weather-protection',
    name: 'Weather Protection Layer',
    description:
      'Ultralight protection against unexpected rain or wind, easily packable when not needed.',
    purpose:
      'Shields from sudden mountain storms and provides added warmth if temperatures drop.',
    examples: [
      {
        name: 'Featherlight Rain Shell',
        brand: 'Summit Systems',
        features: [
          'Packs into pocket',
          'Waterproof/breathable',
          'Adjustable hood',
          'Weighs under 6oz',
        ],
      },
      {
        name: 'Breeze Wind Jacket',
        brand: 'Alpine Designs',
        features: [
          'Windproof',
          'DWR coating',
          'Mesh ventilation',
          'Reflective details',
        ],
      },
    ],
    imageUrl: '/images/summer_weather_layer.jpg',
    colorClass: 'bg-green-100',
  },
];

export default summerLayeringSystem;
