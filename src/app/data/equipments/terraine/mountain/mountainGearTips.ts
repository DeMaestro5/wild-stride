// app/data/equipments/terrain/mountain/mountainGearTips.ts
import { GearTip } from '../../../../../types/terraineTypes';
import tipImage1 from '../../../../../public/images/img5.jpg';
import tipImage2 from '../../../../../public/images/img3.jpg';
import tipImage3 from '../../../../../public/images/img6.jpg';
import tipImage4 from '../../../../../public/images/img7.jpg';

const mountainGearTips: GearTip[] = [
  {
    id: 'proper-boot-lacing',
    title: 'Proper Boot Lacing Techniques',
    description:
      'Different lacing patterns can address specific fit issues and improve comfort on mountain terrain.',
    image: tipImage1,
    steps: [
      'For heel slippage: Use the "heel lock" technique by creating a loop with the top eyelets.',
      'For high arches: Skip the middle eyelets to reduce pressure on the top of your foot.',
      'For toe pressure: Start with looser lacing at the toes, tightening gradually as you move up.',
      'Always re-adjust your laces after the first mile, as feet tend to swell during hiking.',
    ],
    tags: ['Footwear', 'Comfort', 'Beginner Friendly'],
  },
  {
    id: 'trekking-pole-technique',
    title: 'Mastering Trekking Pole Technique',
    description:
      'Properly using trekking poles can reduce knee strain by up to 25% on descents and improve balance on difficult terrain.',
    image: tipImage2,
    steps: [
      'Adjust pole length: shorter for uphill (5-10cm), longer for downhill.',
      'Use wrist straps correctly: insert from below and rest weight on straps, not grip.',
      'Plant poles with each step in a rhythm: left pole with right foot, right pole with left foot.',
      'On steep descents, plant poles ahead of you to create braking points.',
    ],
    tags: ['Stability', 'Technique', 'Joint Protection'],
  },
  {
    id: 'pack-weight-distribution',
    title: 'Optimal Pack Weight Distribution',
    description:
      'How you pack your backpack affects your center of gravity and stability on mountain terrain.',
    image: tipImage3,
    steps: [
      'Place heavy items (water, food) close to your back and centered between shoulder blades.',
      'Pack sleeping bag at the bottom of your pack.',
      'Keep quick-access items like rain gear in top lid or outer pockets.',
      'Distribute weight evenly side-to-side to prevent muscle strain.',
      'Use compression straps to secure load and prevent shifting.',
    ],
    tags: ['Backpacking', 'Comfort', 'Balance'],
  },
  {
    id: 'boot-grip-maximization',
    title: 'Maximizing Boot Grip on Rocky Surfaces',
    description:
      'Techniques to improve traction and prevent slips on steep, rocky mountain terrain.',
    image: tipImage4,
    steps: [
      'Keep boot soles clean: regularly remove mud and debris to maintain tread effectiveness.',
      'Step with the full foot surface rather than just heel or toe on loose rocks.',
      'For steep descents, use the "planting" technique: point toes slightly outward and bend knees.',
      'On wet rocks, look for dry areas or lichen-free surfaces for better grip.',
      'Consider aluminum crampons or microspikes for extremely slippery conditions.',
    ],
    tags: ['Safety', 'Technical', 'Traction'],
  },
];

export default mountainGearTips;
