// app/data/equipments/terrain/mountain/mountainFeaturedGear.ts
import { GearItem } from '../../../../../types/terraineTypes';
import mountainBoot from '../../../../../public/images/img1.jpg';
import hikingPole from '../../../../../public/images/img2.jpg';
import backpack from '../../../../../public/images/img3.jpg';
import navigatorWatch from '../../../../../public/images/img4.jpg';
import rainJacket from '../../../../../public/images/img5.jpg';
import hikingSock from '../../../../../public/images/img6.jpg';

const mountainFeaturedGear: GearItem[] = [
  {
    id: 'summit-gtx-boot',
    name: 'Summit GTX Hiking Boot',
    category: 'Footwear',
    price: '$189.99',
    rating: 4.8,
    reviewCount: 342,
    image: mountainBoot,
    description:
      'Rugged waterproof boots with excellent ankle support and Vibram soles for maximum grip on rocky terrain.',
    features: [
      'Waterproof Gore-Tex membrane',
      'Vibram Megagrip outsole',
      'Full-grain leather upper',
      'Dual-density EVA midsole',
      '200g insulation',
    ],
    tags: ['Best Seller', 'Waterproof', 'Technical'],
    terrainTags: ['Mountain', 'Rocky'],
    url: '/equipment/footwear/summit-gtx-boot',
  },
  {
    id: 'alpine-trek-poles',
    name: 'Alpine Trek Carbon Poles',
    category: 'Accessories',
    price: '$129.99',
    rating: 4.7,
    reviewCount: 215,
    image: hikingPole,
    description:
      'Ultralight carbon fiber trekking poles with premium cork grips and easy adjustment for climbing and descending.',
    features: [
      'Carbon fiber construction',
      'Cork ergonomic grips',
      'Quick-lock adjustment',
      'Tungsten carbide tips',
      'Collapsible to 24 inches',
    ],
    tags: ['Lightweight', 'Premium', 'Carbon Fiber'],
    terrainTags: ['Mountain', 'Technical'],
    url: '/equipment/accessories/alpine-trek-poles',
  },
  {
    id: 'summit-master-45',
    name: 'Summit Master 45 Pack',
    category: 'Packs',
    price: '$229.99',
    rating: 4.9,
    reviewCount: 178,
    image: backpack,
    description:
      'Technical mountain pack with excellent load support, multiple access points, and durable waterproof materials.',
    features: [
      'Reinforced suspension system',
      'Waterproof main compartment',
      'Ice axe attachments',
      'Hydration compatible',
      'Integrated rain cover',
    ],
    tags: ['Top Rated', 'Technical', 'Durable'],
    terrainTags: ['Mountain', 'Alpine'],
    url: '/equipment/packs/summit-master-45',
  },
  {
    id: 'mountain-navigator-gps',
    name: 'Mountain Navigator GPS Watch',
    category: 'Navigation',
    price: '$349.99',
    rating: 4.6,
    reviewCount: 124,
    image: navigatorWatch,
    description:
      'Advanced GPS watch with altimeter, barometer, and detailed topographic maps for mountain navigation.',
    features: [
      'Full-color topographic maps',
      'Barometric altimeter',
      'Storm alert function',
      '20-hour GPS battery life',
      'Wrist-based heart rate',
    ],
    tags: ['GPS', 'Essential', 'Battery Life'],
    terrainTags: ['Mountain', 'Technical'],
    url: '/equipment/navigation/mountain-navigator-gps',
  },
  {
    id: 'alpine-shield-jacket',
    name: 'Alpine Shield 3L Jacket',
    category: 'Clothing',
    price: '$299.99',
    rating: 4.8,
    reviewCount: 203,
    image: rainJacket,
    description:
      'Premium 3-layer waterproof jacket with helmet-compatible hood and excellent breathability for mountain conditions.',
    features: [
      '3-layer Gore-Tex Pro fabric',
      'Helmet-compatible hood',
      'Pit zips for ventilation',
      'Reinforced high-wear areas',
      'Articulated design for climbing',
    ],
    tags: ['Waterproof', 'Premium', 'Technical'],
    terrainTags: ['Mountain', 'Alpine', 'Extreme'],
    url: '/equipment/clothing/alpine-shield-jacket',
  },
  {
    id: 'mountain-trek-sock',
    name: 'Mountain Trek Merino Sock',
    category: 'Footwear',
    price: '$24.99',
    rating: 4.7,
    reviewCount: 298,
    image: hikingSock,
    description:
      'Durable merino wool hiking socks with targeted cushioning and support for mountain hiking.',
    features: [
      '80% merino wool blend',
      'Reinforced heel and toe',
      'Arch support band',
      'Cushioned sole',
      'Seamless toe closure',
    ],
    tags: ['Merino Wool', 'Cushioned', 'Durable'],
    terrainTags: ['Mountain', 'All-Terrain'],
    url: '/equipment/footwear/mountain-trek-sock',
  },
];

export default mountainFeaturedGear;
