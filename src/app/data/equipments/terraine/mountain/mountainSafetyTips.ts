// app/data/equipments/terrain/mountain/mountainSafetyTips.ts
import {
  TerrainSafetyTips,
  SafetyTip,
} from '../../../../../types/terraineTypes';

const tips: SafetyTip[] = [
  {
    title: 'Weather Awareness',
    description:
      'Mountain weather can change rapidly and dramatically. Check forecasts before departure, watch for developing clouds, and be prepared to turn back if conditions deteriorate.',
    icon: 'cloud-lightning',
    color: 'bg-blue-600',
  },
  {
    title: 'Navigation Skills',
    description:
      "Don't rely solely on electronic devices. Carry a topographic map and compass, and know how to use them. Recognize key landmarks and always know your location.",
    icon: 'compass',
    color: 'bg-green-600',
  },
  {
    title: 'Altitude Awareness',
    description:
      'Acclimatize gradually to higher elevations. Recognize symptoms of altitude sickness (headache, nausea, dizziness) and descend immediately if they occur.',
    icon: 'mountain',
    color: 'bg-purple-600',
  },
  {
    title: 'Trail Etiquette',
    description:
      'Uphill hikers have right of way. Stay on designated trails to prevent erosion and protect fragile ecosystems. Make noise in areas with limited visibility.',
    icon: 'users',
    color: 'bg-yellow-600',
  },
  {
    title: 'Hydration & Nutrition',
    description:
      'Drink regularly before feeling thirsty. At higher elevations, you need more water and calories than at lower elevations, even in cooler temperatures.',
    icon: 'droplet',
    color: 'bg-cyan-600',
  },
  {
    title: 'Emergency Preparedness',
    description:
      'Always carry essential safety items including first aid kit, headlamp, emergency shelter, and whistle. Know how to signal for help in areas without cell service.',
    icon: 'alert-triangle',
    color: 'bg-red-600',
  },
];

const mountainSafetyTips: TerrainSafetyTips = {
  title: 'Essential Mountain Safety',
  description:
    'Mountain environments present unique challenges and potential hazards. Understanding and preparing for these risks is crucial for a safe and enjoyable experience.',
  tips,
  linkText: 'Download Complete Mountain Safety Guide',
  linkUrl: '/guides/mountain-safety-complete.pdf',
};

export default mountainSafetyTips;
