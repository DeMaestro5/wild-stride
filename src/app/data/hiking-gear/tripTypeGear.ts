// app/hiking-gear/data/tripTypeGear.ts
import { TripType } from '../../../types/gearType';

const tripTypeGear: TripType[] = [
  {
    type: 'Day Hike',
    icon: '🌄',
    essentials: [
      'Daypack (15-30L)',
      'Water (min. 2 liters)',
      'Trail snacks and lunch',
      'Navigation tools',
      'First aid kit',
      'Sun protection',
      'Extra layer',
      'Headlamp',
      'Rain shell',
      'Emergency whistle',
    ],
  },
  {
    type: 'Weekend Trip',
    icon: '🏕️',
    essentials: [
      'Backpack (35-50L)',
      'Tent or shelter',
      'Sleeping bag',
      'Sleeping pad',
      'Cooking system',
      'Water filter',
      'Food for all meals + extra',
      'Weather-appropriate clothing',
      'Toiletries',
      'First aid & emergency gear',
    ],
  },
  {
    type: 'Multi-Day Trek',
    icon: '🏔️',
    essentials: [
      'Larger backpack (50-75L)',
      'Lightweight, durable shelter',
      'Appropriate sleeping system',
      'Efficient cook kit',
      'Multiple water containers',
      'Comprehensive first aid',
      'Repair kits for gear',
      'Extended food supply',
      'Navigation redundancy',
      'Weather contingency items',
    ],
  },
];

export default tripTypeGear;
