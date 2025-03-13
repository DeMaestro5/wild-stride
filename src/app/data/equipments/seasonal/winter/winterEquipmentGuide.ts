// data/seasonal/winter/equipmentGuide.ts
import { StaticImageData } from 'next/image';
import winterGuide from '../../../../../public/images/winterGuide.jpg';

export interface EquipmentGuideData {
  title: string;
  description: string;
  coverImage: string | StaticImageData;
  downloadUrl: string;
  features: string[];
}

const winterEquipmentGuide: EquipmentGuideData = {
  title: 'Get Our Complete Winter Equipment Guide',
  description:
    "Download our comprehensive 45-page PDF guide to winter hiking and camping gear. Includes detailed reviews, buyer's guides, and maintenance instructions.",
  coverImage: winterGuide,
  downloadUrl: '/guides/winter-equipment-guide',
  features: [
    'In-depth reviews of 50+ winter products',
    'Detailed layering charts for different temperatures',
    'Printable packing checklists',
    'Gear maintenance instructions',
    'Budget options and investment pieces',
  ],
};

export default winterEquipmentGuide;
