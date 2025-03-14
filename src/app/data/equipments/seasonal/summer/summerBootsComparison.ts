import { BootComparisonItem } from '../../../../../types/summerTypes';

const summerBootComparison: BootComparisonItem[] = [
  {
    id: 'summer-boot-01',
    name: 'TrailVent Pro',
    brand: 'Summit Steps',
    price: 139.95,
    imageUrl: '/images/trailvent_pro.jpg',
    rating: 4.7,
    reviewCount: 128,
    temperature: '60°F to 100°F (15°C to 38°C)',
    ventilation: 'Excellent',
    features: [
      'Mesh upper with strategic overlays',
      'Quick-dry lining',
      'Anti-microbial treatment',
      'Drainage ports',
      'Protective toe cap',
    ],
    bestFor: 'Hot and dry conditions, maintained trails',
    waterproof: 'No',
    durability: 'Medium',
    weight: '1.6 lbs (pair)',
    recommendedUse: ['Day hiking', 'Fast hiking', 'Trail running'],
  },
  {
    id: 'summer-boot-02',
    name: 'HydroTrek Low',
    brand: 'Alpine Designs',
    price: 159.99,
    imageUrl: '/images/hydrotrek_low.jpg',
    rating: 4.5,
    reviewCount: 94,
    temperature: '50°F to 95°F (10°C to 35°C)',
    ventilation: 'Good',
    features: [
      'Waterproof membrane with vent channels',
      'Synthetic/mesh upper',
      'Cushioned EVA midsole',
      'Vibram outsole',
      'Gusseted tongue',
    ],
    bestFor: 'Water crossings, humid environments',
    waterproof: 'Yes',
    durability: 'High',
    weight: '1.9 lbs (pair)',
    recommendedUse: ['Day hiking', 'Wet conditions', 'Rocky terrain'],
  },
  {
    id: 'summer-boot-03',
    name: 'Desert Trek Ventilated Mid',
    brand: 'Trailhead',
    price: 179.95,
    imageUrl: '/images/desert_trek.jpg',
    rating: 4.8,
    reviewCount: 157,
    temperature: '65°F to 110°F (18°C to 43°C)',
    ventilation: 'Excellent',
    features: [
      'Side ventilation panels',
      'Leather/synthetic upper',
      'Compression-molded midsole',
      'Rubber toe and heel protection',
      'Anti-debris ankle collar',
    ],
    bestFor: 'Desert hiking, hot and dry trails',
    waterproof: 'No',
    durability: 'Very High',
    weight: '2.0 lbs (pair)',
    recommendedUse: ['Desert hiking', 'Hot climate trekking', 'Backpacking'],
  },
  {
    id: 'summer-boot-04',
    name: 'AquaFlex Sandal',
    brand: 'River Crossing',
    price: 89.99,
    imageUrl: '/images/aquaflex.jpg',
    rating: 4.6,
    reviewCount: 212,
    temperature: '65°F to 100°F (18°C to 38°C)',
    ventilation: 'Maximum',
    features: [
      'Quick-drying webbing upper',
      'Secure adjustable fit',
      'Cushioned footbed',
      'Rugged outsole',
      'Toe protection',
    ],
    bestFor: 'Water activities, beach approaches',
    waterproof: 'Partial',
    durability: 'Medium',
    weight: '1.2 lbs (pair)',
    recommendedUse: ['Water crossings', 'Beach hiking', 'Casual day hikes'],
  },
];

export default summerBootComparison;
