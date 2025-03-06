// app/hiking-gear/data/seasonalGear.ts
import React from 'react';
import { SeasonalGearItem } from '../../../types/gearType';
import { Droplet, Star, Wind, Shield } from 'lucide-react';
import springImage from '../../../public/images/img5.jpg';
import summerImage from '../../../public/images/img4.jpg';
import fallImage from '../../../public/images/img6.jpg';
import winterImage from '../../../public/images/img3.jpg';

const seasonalGear: SeasonalGearItem[] = [
  {
    season: 'Spring',
    image: springImage,
    color: 'from-green-800 to-green-700',
    icon: React.createElement(Droplet, { className: 'h-6 w-6' }),
    items: [
      'Waterproof rain jacket and pants',
      'Gaiters for muddy trails',
      'Quick-drying layers',
      'Trekking poles for stream crossings',
      'Insect repellent',
      'Waterproof pack cover',
      'Dry bags for sensitive items',
    ],
  },
  {
    season: 'Summer',
    image: summerImage,
    color: 'from-yellow-700 to-amber-600',
    icon: React.createElement(Star, { className: 'h-6 w-6' }),
    items: [
      'Wide-brimmed sun hat',
      'UPF-rated lightweight clothing',
      'Extra water capacity',
      'Sunscreen and sunglasses',
      'Electrolyte supplements',
      'Cooling neck gaiter',
      'Bug protection (net, spray, clothing)',
    ],
  },
  {
    season: 'Fall',
    image: fallImage,
    color: 'from-orange-800 to-orange-600',
    icon: React.createElement(Wind, { className: 'h-6 w-6' }),
    items: [
      'Insulating mid-layers',
      'Light gloves and warm hat',
      'Headlamp (for shorter days)',
      'Rain gear for unpredictable weather',
      'Thermos for hot drinks',
      'Warmer sleeping bag',
      'Traction devices (for early snow)',
    ],
  },
  {
    season: 'Winter',
    image: winterImage,
    color: 'from-blue-900 to-blue-700',
    icon: React.createElement(Shield, { className: 'h-6 w-6' }),
    items: [
      'Insulated, waterproof boots',
      'Traction devices (microspikes, crampons)',
      'Snowshoes or skis when appropriate',
      'Insulated water bottles/reservoirs',
      'Heavy insulating layers',
      'Face protection (balaclava, goggles)',
      'High-calorie snacks and meals',
    ],
  },
];

export default seasonalGear;
