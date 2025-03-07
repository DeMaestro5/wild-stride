// data/seasonal/winter/layeringSystem.ts
import { StaticImageData } from 'next/image';

// These would be actual imports in your project
import baseLayerImage from '../../../../../public/images/innerLayer.jpg';
import midLayerImage from '../../../../../public/images/midLayer.jpg';
import shellLayerImage from '../../../../../public/images/outerLayer.jpg';

export interface LayerInfo {
  name: string;
  description: string;
  materials: string[];
  features: string[];
  image: StaticImageData;
  tips: string;
}

const winterLayeringSystem: LayerInfo[] = [
  {
    name: 'Base Layer',
    description:
      'Moisture-wicking layer that sits against your skin to move sweat away from your body.',
    materials: ['Merino wool', 'Synthetic blends', 'Silk (for mild cold)'],
    features: [
      'Form-fitting',
      'Moisture-wicking',
      'Quick-drying',
      'Antimicrobial',
    ],
    image: baseLayerImage,
    tips: 'Choose heavyweight for very cold conditions, midweight for active pursuits in cold weather.',
  },
  {
    name: 'Mid Layer',
    description:
      'Insulating layer that traps body heat while allowing moisture to escape.',
    materials: ['Fleece', 'Down', 'Synthetic insulation', 'Wool'],
    features: [
      'Various thicknesses for different temperatures',
      'Full or quarter-zip options',
      'Breathable',
    ],
    image: midLayerImage,
    tips: 'Multiple thin layers offer more versatility than a single thick layer.',
  },
  {
    name: 'Outer Shell',
    description:
      'Protective layer against wind, rain, and snow while allowing moisture to escape.',
    materials: ['GORE-TEX', 'eVent', 'Proprietary waterproof membranes'],
    features: ['Waterproof', 'Windproof', 'Breathable', 'Articulated design'],
    image: shellLayerImage,
    tips: 'Look for pit zips and adjustable features to regulate temperature during activity.',
  },
];

export default winterLayeringSystem;
