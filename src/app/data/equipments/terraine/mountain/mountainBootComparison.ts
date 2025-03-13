// app/data/equipments/terrain/mountain/mountainBootComparison.ts
import { ComparisonItem } from '../../../../../types/terraineTypes';
import boot1Image from '../../../../../public/images/img1.jpg';
import boot2Image from '../../../../../public/images/img2.jpg';
import boot3Image from '../../../../../public/images/img3.jpg';
import boot4Image from '../../../../../public/images/img4.jpg';

// Convert boot data to match the ComparisonItem interface
const mountainBootComparison: ComparisonItem[] = [
  {
    id: 'alpine-trek-pro',
    name: 'Alpine Trek Pro',
    brand: 'Mountain Master',
    price: '$189.99',
    image: boot1Image,
    rating: 4.7,
    reviewCount: 328,
    description:
      'A premium mountaineering boot with excellent ankle support and waterproofing for technical terrain.',
    weightKg: 1.27, // Converted from 2.8 lbs
    grip: 'Excellent',
    support: 'High',
    features: [
      'Vibram Megagrip outsole',
      'Gore-Tex waterproofing',
      'Reinforced toe cap',
      'PU midsole',
    ],
    bestFor: 'Technical mountain trails, rock scrambling, moderate snow',
    waterproof: true,
    durability: 'High',
    pros: [
      'Superior ankle support',
      'Excellent traction on varied terrain',
      'Durable construction',
      'Good toe protection',
    ],
    cons: [
      'Heavier than lighter hiking boots',
      'Requires break-in period',
      'Premium price point',
    ],
    url: '/equipment/footwear/alpine-trek-pro',
  },
  {
    id: 'summit-lite-gtx',
    name: 'Summit Lite GTX',
    brand: 'Trail Evolution',
    price: '$159.99',
    image: boot2Image,
    rating: 4.5,
    reviewCount: 247,
    description:
      'A lightweight yet supportive boot ideal for day hikes and moderate mountain terrain.',
    weightKg: 1.0, // Converted from 2.2 lbs
    grip: 'Very Good',
    support: 'Medium-High',
    features: [
      'Contagrip outsole',
      'Gore-Tex waterproofing',
      'EVA midsole',
      'Quick-lace system',
    ],
    bestFor: 'Day hikes, moderate trails, light scrambling',
    waterproof: true,
    durability: 'Medium',
    pros: [
      'Lightweight for a mountain boot',
      'Comfortable out of the box',
      'Good balance of support and flexibility',
      'Versatile for different terrain',
    ],
    cons: [
      'Less durable than heavier options',
      'Moderate ankle support',
      'Not ideal for heavy packs',
    ],
    url: '/equipment/footwear/summit-lite-gtx',
  },
  {
    id: 'peak-defender',
    name: 'Peak Defender',
    brand: 'Alpine Force',
    price: '$219.99',
    image: boot3Image,
    rating: 4.8,
    reviewCount: 186,
    description:
      'A rugged boot designed for serious mountain adventures and challenging conditions.',
    weightKg: 1.45, // Converted from 3.2 lbs
    grip: 'Outstanding',
    support: 'Very High',
    features: [
      'Vibram Arctic Grip outsole',
      'Full Gore-Tex lining',
      'PU/TPU midsole',
      'Crampon-compatible',
    ],
    bestFor: 'Technical ascents, rough terrain, all-season use',
    waterproof: true,
    durability: 'High',
    pros: [
      'Exceptional support and protection',
      'Superior traction on all surfaces',
      'Compatible with crampons',
      'Built for extreme durability',
    ],
    cons: ['Heavy', 'Expensive', 'Stiff - requires significant break-in'],
    url: '/equipment/footwear/peak-defender',
  },
  {
    id: 'trail-scout-mid',
    name: 'Trail Scout Mid',
    brand: 'Nature Stride',
    price: '$129.99',
    image: boot4Image,
    rating: 4.3,
    reviewCount: 412,
    description:
      'An affordable mountain boot that balances comfort and performance for casual hikers.',
    weightKg: 0.91, // Converted from 2.0 lbs
    grip: 'Good',
    support: 'Medium',
    features: [
      'Rubber outsole with multi-directional lugs',
      'Waterproof membrane',
      'EVA midsole',
      'Padded collar',
    ],
    bestFor: 'Casual day hikes, gentle to moderate trails',
    waterproof: true,
    durability: 'Medium',
    pros: [
      'Budget-friendly price',
      'Comfortable right away',
      'Lightweight',
      'Good for beginners',
    ],
    cons: [
      'Less support for technical terrain',
      'Not as durable as premium options',
      'Less aggressive tread pattern',
    ],
    url: '/equipment/footwear/trail-scout-mid',
  },
];

export default mountainBootComparison;
