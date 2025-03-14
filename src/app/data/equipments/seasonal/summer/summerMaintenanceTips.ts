import { MaintenanceTip } from '../../../../../types/summerTypes';

const summerMaintenanceTips: MaintenanceTip[] = [
  {
    id: 'summer-maintenance-01',
    title: 'Cleaning UV-Protective Clothing',
    description:
      'Properly caring for your UPF-rated clothing helps maintain its sun protection properties and extends its life.',
    steps: [
      'Turn garments inside out before washing',
      'Use cold water and gentle cycle',
      'Avoid fabric softeners and bleach',
      'Air dry in shade or use low heat',
      'Store in cool, dry place away from direct sunlight',
    ],
    image: '/images/upf_clothing_care.jpg',
    frequencyRecommendation: 'After every 2-3 uses, or when visibly soiled',
    difficultyLevel: 'Easy',
    timeEstimate: '5 minutes (plus drying time)',
    icon: 'shirt-sun', // Icon representing sun-protective clothing
    relatedProducts: [
      {
        name: 'Gear Wash for Technical Fabrics',
        url: '#',
      },
    ],
  },
  {
    id: 'summer-maintenance-02',
    title: 'Hydration System Cleaning',
    description:
      'Regular cleaning prevents bacteria and mold growth in your hydration reservoir and drinking tube.',
    steps: [
      'Empty reservoir completely after each use',
      'Rinse with warm water and mild soap solution',
      'Use reservoir cleaning tablets monthly',
      'Clean mouthpiece and tube with small brush',
      'Air dry completely with reservoir open',
      'Store in freezer when not in use for extended periods',
    ],
    image: '/images/hydration_cleaning.jpg',
    frequencyRecommendation: 'Quick rinse after each use; deep clean weekly',
    difficultyLevel: 'Moderate',
    timeEstimate: '15-20 minutes',
    icon: 'droplet-clean', // Icon representing water cleaning
    relatedProducts: [
      {
        name: 'Hydration Reservoir Cleaning Kit',
        url: '#',
      },
      {
        name: 'Cleaning Tablets',
        url: '#',
      },
    ],
  },
  {
    id: 'summer-maintenance-03',
    title: 'Treating Insect-Repellent Clothing',
    description:
      'Reapplying permethrin treatment to your hiking clothes maintains their insect-repellent properties.',
    steps: [
      'Lay clothing flat on a protected surface outdoors',
      'Spray permethrin evenly on both sides of fabric',
      'Pay special attention to cuffs, collars, and waistbands',
      'Allow to dry completely (2-4 hours)',
      'Effective for 6-7 washes or 6 weeks',
    ],
    image: '/images/permethrin_treatment.jpg',
    frequencyRecommendation: 'Every 6 weeks during bug season',
    difficultyLevel: 'Easy',
    timeEstimate: '10 minutes (plus drying time)',
    icon: 'bug-spray', // Icon representing insect repellent
    relatedProducts: [
      {
        name: 'Permethrin Spray Treatment',
        url: '#',
      },
    ],
  },
  {
    id: 'summer-maintenance-04',
    title: 'Breathable Footwear Care',
    description:
      'Properly maintaining summer hiking shoes preserves their ventilation properties and extends their durability.',
    steps: [
      'Remove insoles and laces after each hike',
      'Brush off dirt and debris',
      'Wash with mild soap and warm water if needed',
      'Stuff with newspaper to maintain shape',
      'Air dry completely away from direct heat',
      'Apply mesh protector spray once dry',
    ],
    image: '/images/summer_shoe_care.jpg',
    frequencyRecommendation: 'After each hike in dusty or muddy conditions',
    difficultyLevel: 'Easy',
    timeEstimate: '10 minutes (plus overnight drying)',
    icon: 'boot-vent', // Icon representing breathable hiking shoes
    relatedProducts: [
      {
        name: 'Footwear Cleaner',
        url: '#',
      },
      {
        name: 'Mesh Protector Spray',
        url: '#',
      },
    ],
  },
  {
    id: 'summer-maintenance-05',
    title: 'Sun Hat Reshaping',
    description:
      'Restore the shape and protective qualities of your hiking sun hat after it gets crushed in your pack.',
    steps: [
      'Fill a kettle with water and bring to boil',
      'Hold hat over steam for 30-60 seconds',
      'Shape brim with your hands while still warm',
      'Allow to cool and dry in desired shape',
      'Apply fabric protector spray if needed',
    ],
    image: '/images/hat_reshaping.jpg',
    frequencyRecommendation: 'As needed when hat loses shape',
    difficultyLevel: 'Moderate',
    timeEstimate: '5 minutes',
    icon: 'hat-sun', // Icon representing sun hat
    relatedProducts: [
      {
        name: 'Hat Storage Box',
        url: '#',
      },
    ],
  },
];

export default summerMaintenanceTips;
