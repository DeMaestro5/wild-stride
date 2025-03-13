// app/data/equipments/terrain/mountain/mountainEquipmentGuide.ts
import {
  TerrainEquipmentGuideData,
  GuideFeature,
} from '../../../../../types/terraineTypes';
import guideImage from '../../../../../public/images/img7.jpg';

const features: GuideFeature[] = [
  {
    title: 'Gear Selection by Experience Level',
    description:
      'Tailored recommendations for beginners, intermediate, and advanced mountain hikers.',
    icon: 'layers',
  },
  {
    title: 'Seasonal Considerations',
    description:
      'How to adapt your mountain gear for different weather conditions throughout the year.',
    icon: 'calendar',
  },
  {
    title: 'Technical Equipment Guide',
    description:
      'Detailed information on specialized gear for challenging mountain terrain.',
    icon: 'tool',
  },
  {
    title: 'Budget-Friendly Options',
    description:
      'Quality gear recommendations for every price point, including rental options.',
    icon: 'dollar-sign',
  },
  {
    title: 'Pack Weight Optimization',
    description:
      'Strategies for reducing pack weight without sacrificing safety or comfort.',
    icon: 'feather',
  },
  {
    title: 'Equipment Care & Maintenance',
    description:
      'Detailed instructions for extending the life of your mountain hiking gear.',
    icon: 'refresh-cw',
  },
  {
    title: 'Expert Interviews',
    description:
      'Insights and advice from professional mountain guides and experienced hikers.',
    icon: 'users',
  },
  {
    title: 'Gear Checklists',
    description:
      'Printable checklists for different trip durations and difficulty levels.',
    icon: 'check-square',
  },
];

const tableOfContents: string[] = [
  'Introduction to Mountain Hiking',
  'Understanding Mountain Terrain Types',
  'Essential Gear Fundamentals',
  'Footwear Selection & Fit Guide',
  'Clothing Layering Systems',
  'Navigation Tools & Techniques',
  'Safety & Emergency Equipment',
  'Packs & Carrying Systems',
  'Seasonal Gear Adaptations',
  'Gear for Specific Mountain Activities',
  'Care, Maintenance & Repair',
  'Budget Considerations & Priorities',
  'Resources & Further Reading',
];

const mountainEquipmentGuide: TerrainEquipmentGuideData = {
  title: 'The Complete Mountain Hiking Gear Guide',
  description:
    'Our comprehensive 45-page guide covers everything you need to know about selecting, using, and maintaining equipment for mountain hiking in all conditions.',
  coverImage: guideImage,
  downloadUrl: '/guides/mountain-equipment-complete.pdf',
  features,
  tableOfContents,
  pageCount: 45,
  fileSize: '8.4 MB',
  lastUpdated: 'February 2025',
};

export default mountainEquipmentGuide;
