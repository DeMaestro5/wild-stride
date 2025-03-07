// data/seasonal/winter/sustainability.ts

export interface SustainabilityStat {
  label: string;
  value: string;
  description: string;
}

export interface SustainabilityFeatureData {
  title: string;
  description: string;
  stats: SustainabilityStat[];
  brandsHighlighted: string[];
  callToAction: {
    text: string;
    url: string;
  };
}

const winterSustainability: SustainabilityFeatureData = {
  title: 'Eco-Friendly Winter Gear',
  description:
    'Many top winter gear brands are now incorporating recycled materials and sustainable manufacturing practices. Look for these eco-conscious options when updating your winter kit.',
  stats: [
    {
      label: 'Recycled Materials',
      value: '65%',
      description: 'of our featured winter gear contains recycled content',
    },
    {
      label: 'PFC-Free',
      value: '80%',
      description: 'of our waterproof options use PFC-free DWR treatments',
    },
    {
      label: 'Repair Programs',
      value: '12',
      description: 'brands offering lifetime repair services',
    },
  ],
  brandsHighlighted: ['Patagonia', 'REI Co-op', 'Cotopaxi', 'Picture Organic'],
  callToAction: {
    text: 'Shop Sustainable Winter Gear',
    url: '/equipment/sustainable/winter',
  },
};

export default winterSustainability;
