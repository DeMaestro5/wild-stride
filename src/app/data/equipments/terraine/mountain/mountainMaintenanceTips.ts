// app/data/equipments/terrain/mountain/mountainMaintenanceTips.ts
import { MaintenanceTip } from '../../../../../types/terraineTypes';
import bootCareImage from '../../../../../public/images/img1.jpg';
import poleMaintenanceImage from '../../../../../public/images/img2.jpg';
import packCleaningImage from '../../../../../public/images/img3.jpg';
import waterproofingImage from '../../../../../public/images/img4.jpg';

const mountainMaintenanceTips: MaintenanceTip[] = [
  {
    id: 'boot-care',
    title: 'Mountain Boot Care',
    description:
      'Proper boot maintenance extends the life of your footwear and preserves its performance on challenging terrain.',
    image: bootCareImage,
    steps: [
      'Clean after each hike: Remove dirt and debris using a soft brush and mild soap.',
      'Dry properly: Remove insoles and stuff with newspaper, dry at room temperature away from direct heat.',
      'Condition leather: Apply appropriate leather conditioner to prevent cracking.',
      'Reproof waterproofing: Use manufacturer-recommended products to maintain water resistance.',
      'Store properly: Keep in a cool, dry place with boot trees to maintain shape.',
    ],
  },
  {
    id: 'trekking-pole-maintenance',
    title: 'Trekking Pole Maintenance',
    description:
      'Well-maintained trekking poles provide reliable support and prevent failure in critical moments.',
    image: poleMaintenanceImage,
    steps: [
      'Clean after use: Wipe down shafts with damp cloth and dry completely.',
      'Inspect locking mechanisms: Check and clean debris from locking systems regularly.',
      'Maintain tips: Replace worn tips to maintain traction and prevent damage.',
      'Lubricate moving parts: Apply silicone spray to joints and locking mechanisms.',
      'Check straps: Examine for wear and replace if fraying or damaged.',
    ],
  },
  {
    id: 'backpack-care',
    title: 'Backpack Maintenance',
    description:
      'Regular care ensures your pack remains comfortable and functional for mountain adventures.',
    image: packCleaningImage,
    steps: [
      'Empty completely: Remove all items and shake out debris after each trip.',
      'Spot clean: Use mild soap and soft brush for dirty areas.',
      'Deep clean occasionally: Hand wash with technical cleaner for heavily soiled packs.',
      'Check and repair: Regularly inspect seams, straps, and buckles for wear or damage.',
      'Store properly: Hang in dry area away from sunlight when not in use.',
    ],
  },
  {
    id: 'waterproof-gear-maintenance',
    title: 'Waterproof Gear Maintenance',
    description:
      'Maintaining water resistance is crucial for comfort and safety in mountain environments.',
    image: waterproofingImage,
    steps: [
      'Clean properly: Use technical cleaners designed for waterproof fabrics.',
      'Reapply DWR: Use appropriate durable water repellent spray after washing.',
      'Check seams: Inspect and seal any damaged seams with seam sealer.',
      'Test periodically: Check water beading to assess when reproofing is needed.',
      'Avoid fabric softeners: These can damage waterproof membranes.',
    ],
  },
];

export default mountainMaintenanceTips;
