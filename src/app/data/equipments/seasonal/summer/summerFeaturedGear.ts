import { FeaturedGearItem } from '../../../../../types/summerTypes';

const summerFeaturedGear: FeaturedGearItem[] = [
  {
    id: 'summer-001',
    name: 'Trail Breeze UPF Hiking Shirt',
    category: 'Clothing',
    brand: 'Mountain Gear',
    price: 65.99,
    rating: 4.8,
    reviewCount: 147,
    imageUrl: '/images/summer_shirt.jpg',
    colors: ['Sky Blue', 'Light Grey', 'Sage Green'],
    features: [
      'UPF 50+ sun protection',
      'Moisture-wicking technology',
      'Ventilated back panel',
      'Antimicrobial treatment',
      'Roll-up sleeve tabs',
    ],
    tags: [
      { text: "Editor's Choice", colorClass: 'bg-blue-500 text-white' },
      { text: 'Breathable', colorClass: 'bg-yellow-100 text-yellow-800' },
      { text: 'Quick-Dry', colorClass: 'bg-blue-100 text-blue-800' },
    ],
  },
  {
    id: 'summer-002',
    name: 'SolarGuard Wide Brim Hat',
    category: 'Accessories',
    brand: 'Trailhead',
    price: 39.95,
    rating: 4.6,
    reviewCount: 89,
    imageUrl: '/images/summer_hat.jpg',
    colors: ['Khaki', 'Olive', 'Desert Tan'],
    features: [
      'UPF 50+ protection',
      '3.5" wide brim',
      'Moisture-wicking sweatband',
      'Adjustable chin strap',
      'Ventilated crown',
    ],
    tags: [
      { text: 'Best Seller', colorClass: 'bg-yellow-500 text-black' },
      { text: 'Sun Protection', colorClass: 'bg-orange-100 text-orange-800' },
    ],
  },
  {
    id: 'summer-003',
    name: 'Hydro Trail 3L Hydration Pack',
    category: 'Packs',
    brand: 'Alpine Designs',
    price: 129.99,
    rating: 4.7,
    reviewCount: 122,
    imageUrl: '/images/summer_hydration.jpg',
    colors: ['Electric Blue', 'Coral Red', 'Graphite'],
    features: [
      '3 liter water reservoir',
      'Ventilated back panel',
      'Multiple storage pockets',
      'Adjustable chest and waist straps',
      'External reservoir access',
    ],
    tags: [
      { text: 'Staff Pick', colorClass: 'bg-purple-500 text-white' },
      { text: 'Hydration', colorClass: 'bg-blue-100 text-blue-800' },
    ],
  },
  {
    id: 'summer-004',
    name: 'Trail Lite Ventilated Hikers',
    category: 'Footwear',
    brand: 'Summit Steps',
    price: 149.95,
    rating: 4.5,
    reviewCount: 204,
    imageUrl: '/images/summer_shoes.jpg',
    colors: ['Slate/Orange', 'Navy/Lime', 'Grey/Teal'],
    features: [
      'Breathable mesh upper',
      'Quick-dry lining',
      'Vibram outsole',
      'Cushioned EVA midsole',
      'Drainage ports for water crossings',
    ],
    tags: [
      { text: 'New Release', colorClass: 'bg-green-500 text-white' },
      { text: 'Lightweight', colorClass: 'bg-gray-100 text-gray-800' },
    ],
  },
  {
    id: 'summer-005',
    name: 'Ultra Protection SPF50 Sunscreen',
    category: 'Essentials',
    brand: 'OutdoorSkin',
    price: 14.99,
    rating: 4.9,
    reviewCount: 312,
    imageUrl: '/images/summer_sunscreen.jpg',
    colors: [],
    features: [
      'Water-resistant for 80 minutes',
      'Reef-safe formula',
      'Broad spectrum UVA/UVB protection',
      'Non-greasy application',
      'Compact size for backpacking',
    ],
    tags: [
      { text: 'Essential', colorClass: 'bg-red-500 text-white' },
      { text: 'Eco-Friendly', colorClass: 'bg-green-100 text-green-800' },
    ],
  },
  {
    id: 'summer-006',
    name: 'BugShield Insect Repellent Clothing',
    category: 'Clothing',
    brand: 'WildGuard',
    price: 79.99,
    rating: 4.6,
    reviewCount: 168,
    imageUrl: '/images/summer_bugshield.jpg',
    colors: ['Light Khaki', 'Olive Green', 'Desert Tan'],
    features: [
      'Permethrin-treated fabric',
      'Effective for up to 70 washes',
      'Moisture-wicking material',
      'UPF 30 sun protection',
      'Convertible pant/short design',
    ],
    tags: [
      {
        text: 'Insect Protection',
        colorClass: 'bg-yellow-100 text-yellow-800',
      },
      { text: 'Versatile', colorClass: 'bg-purple-100 text-purple-800' },
    ],
  },
];

export default summerFeaturedGear;
