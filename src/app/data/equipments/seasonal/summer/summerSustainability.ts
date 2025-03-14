import { SustainabilityData } from '../../../../../types/summerTypes';

const summerSustainability: SustainabilityData = {
  title: 'Eco-Friendly Summer Hiking Gear',
  description:
    'Our collection of sustainable summer hiking equipment helps minimize environmental impact while maximizing performance. These brands are leading the way in eco-friendly outdoor gear innovation.',
  stats: [
    {
      label: 'Recycled Materials',
      value: '8.2 Million',
      icon: 'recycle',
    },
    {
      label: 'Water Saved',
      value: '4.5 Million Gallons',
      icon: 'droplet',
    },
    {
      label: 'Solar Powered Production',
      value: '62%',
      icon: 'sun',
    },
  ],
  brandsHighlighted: [
    {
      name: 'EcoVent',
      logo: '/images/brands/ecovent.jpg',
      initiative: 'Uses 100% recycled plastic bottles for performance fabrics',
      url: '#',
    },
    {
      name: 'GreenStep',
      logo: '/images/brands/greenstep.jpg',
      initiative: 'Carbon-neutral manufacturing and biodegradable packaging',
      url: '#',
    },
    {
      name: 'Nimbus Gear',
      logo: '/images/brands/nimbus.jpg',
      initiative: 'Water-free dyeing process for all hiking apparel',
      url: '#',
    },
    {
      name: 'Terra Tread',
      logo: '/images/brands/terratread.jpg',
      initiative: 'Footwear with natural rubber and recycled components',
      url: '#',
    },
  ],
  callToAction: {
    text: 'Look for our "Eco-Friendly" tag to find sustainable options for all your summer hiking needs.',
    buttonText: 'Shop Sustainable Summer Gear',
    url: '#',
  },
};

export default summerSustainability;
