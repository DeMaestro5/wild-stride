import { EquipmentGuideData } from '../../../../../types/summerTypes';

const summerEquipmentGuide: EquipmentGuideData = {
  title: 'Complete Summer Hiking Gear Guide',
  description:
    'Our comprehensive 28-page guide covers everything you need to know about selecting, using, and maintaining summer hiking gear. Download it now to prepare for your warm-weather adventures.',
  coverImage: '/images/summer_guide_cover.jpg',
  downloadUrl: '#',
  features: [
    {
      title: 'Gear Checklists',
      description:
        'Trail-tested packing lists for day hikes, overnight trips, and extended backpacking in hot conditions.',
      icon: 'list-check',
    },
    {
      title: 'Hydration Systems',
      description:
        'Comprehensive comparison of water bottles, reservoirs, and filters with capacity recommendations based on conditions.',
      icon: 'droplet',
    },
    {
      title: 'Sun Protection Strategy',
      description:
        'Complete approach to sun protection combining clothing, accessories, and sunscreen for maximum coverage.',
      icon: 'sun',
    },
    {
      title: 'Hot Weather Nutrition',
      description:
        'Food recommendations and meal planning for maintaining energy and electrolyte balance in heat.',
      icon: 'utensils',
    },
    {
      title: 'Footwear Selection',
      description:
        'Guide to choosing the right summer hiking footwear based on terrain, distance, and personal preferences.',
      icon: 'boot',
    },
    {
      title: 'Insect Protection',
      description:
        'Region-specific strategies for dealing with mosquitoes, ticks, and other summer pests.',
      icon: 'bug',
    },
  ],
};

export default summerEquipmentGuide;
