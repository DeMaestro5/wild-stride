// data/equipments/seasonal/winter/winterFeatureGear.ts
import { FeaturedGearItem } from '../../../../../components/equipment/FeatureGearGrid';
import jacket from '../../../../../public/images/jacket.jpg';
import gloves from '../../../../../public/images/gloves.jpg';
import boots from '../../../../../public/images/boots.jpg';
import gaiters from '../../../../../public/images/gaiters.jpg';
import merino from '../../../../../public/images/merino.jpg';

const winterFeaturedGear: FeaturedGearItem[] = [
  {
    id: 1,
    name: 'Arctic Explorer Jacket',
    description:
      'Premium insulated jacket designed for extreme cold conditions, featuring windproof and waterproof outer shell with 800-fill down insulation.',
    category: 'Outerwear',
    image: jacket,
    url: '/equipment/jackets/arctic-explorer',
    featured: true,
    seasonalTag: 'Winter Essential',
  },
  {
    id: 2,
    name: 'Thermal Trekking Gloves',
    description:
      'Touchscreen-compatible thermal gloves with waterproof membrane and extended cuffs to keep snow out.',
    category: 'Accessories',
    image: gloves,
    url: '/equipment/accessories/thermal-trekking-gloves',
    seasonalTag: 'Cold Weather',
  },
  {
    id: 3,
    name: 'Snow Trekker Boots',
    description:
      'Insulated winter hiking boots with aggressive traction for ice and snow. Rated to -40°F.',
    category: 'Footwear',
    image: boots,
    url: '/equipment/footwear/snow-trekker-boots',
    seasonalTag: 'Winter Rated',
  },
  {
    id: 4,
    name: 'Merino Base Layer Set',
    description:
      'Ultrasoft, moisture-wicking merino wool base layer set that regulates temperature and prevents odors even on multi-day trips.',
    category: 'Base Layers',
    image: merino,
    url: '/equipment/base-layers/merino-set',
    seasonalTag: 'Layering Essential',
  },
  {
    id: 5,
    name: 'All-Terrain Snow Gaiters',
    description:
      'Durable, waterproof gaiters that keep snow out of your boots and protect your lower legs from deep snow and ice.',
    category: 'Accessories',
    image: gaiters,
    url: '/equipment/accessories/snow-gaiters',
    seasonalTag: 'Snow Protection',
  },
];

export default winterFeaturedGear;
