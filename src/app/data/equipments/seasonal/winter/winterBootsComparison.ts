// data/seasonal/winter/bootComparison.ts

export type DurabilityRating = 'Low' | 'Medium' | 'High';

export interface BootComparisonItem {
  id: number;
  name: string;
  price: string;
  rating: number;
  temperature: string; // Temperature rating
  insulation: string;
  features: string[];
  bestFor: string;
  waterproof: boolean;
  durability: DurabilityRating;
  weight?: string;
  image?: string;
}

const winterBootComparison: BootComparisonItem[] = [
  {
    id: 1,
    name: 'Arctic Explorer 300',
    price: '$219.99',
    rating: 4.8,
    temperature: '-40°F',
    insulation: '400g Thinsulate',
    features: [
      'Vibram Arctic Grip Outsole',
      'Reflective Thermal Layer',
      'Waterproof Leather Upper',
    ],
    bestFor: 'Extreme Cold Expeditions',
    waterproof: true,
    durability: 'High',
    weight: '2.6 lbs (pair)',
    image: '/images/seasonal/winter/arctic-explorer-boots.jpg',
  },
  {
    id: 2,
    name: 'Winter Trail Pro',
    price: '$169.99',
    rating: 4.5,
    temperature: '-25°F',
    insulation: '200g PrimaLoft',
    features: [
      'Ice-Tech Traction Lugs',
      'Moisture-Wicking Liner',
      'Gaiter Attachment D-Ring',
    ],
    bestFor: 'Winter Hiking & Snowshoeing',
    waterproof: true,
    durability: 'High',
    weight: '2.2 lbs (pair)',
    image: '/images/seasonal/winter/winter-trail-pro.jpg',
  },
  {
    id: 3,
    name: 'Alpine Lite Snow Boot',
    price: '$129.99',
    rating: 4.2,
    temperature: '-15°F',
    insulation: '200g Synthetic',
    features: ['Lightweight Design', 'Speed Lacing System', 'Fleece Collar'],
    bestFor: 'Casual Winter Use',
    waterproof: true,
    durability: 'Medium',
    weight: '1.8 lbs (pair)',
    image: '/images/seasonal/winter/alpine-lite-boot.jpg',
  },
  {
    id: 4,
    name: 'Mountain Guide GTX',
    price: '$249.99',
    rating: 4.9,
    temperature: '-30°F',
    insulation: '300g Thinsulate + Wool Felt',
    features: [
      'Full Crampon Compatibility',
      'Rigid Shank for Technical Terrain',
      'Double Stitched Construction',
    ],
    bestFor: 'Technical Mountaineering',
    waterproof: true,
    durability: 'High',
    weight: '3.4 lbs (pair)',
    image: '/images/seasonal/winter/mountain-guide-gtx.jpg',
  },
];

export default winterBootComparison;
