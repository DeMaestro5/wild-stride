// app/hiking-gear/data/maintenanceTips.ts
import { MaintenanceCategory } from '../../../types/gearType';

const maintenanceTips: MaintenanceCategory[] = [
  {
    category: 'Cleaning',
    tips: [
      'Clean boots by removing laces, rinsing off mud, and air drying',
      'Wash technical fabrics with appropriate cleaner (no fabric softeners)',
      'Clean sleeping bags according to manufacturer instructions',
      'Wipe down tents before packing, deep clean at home',
      'Rinse hydration reservoirs after each use and dry completely',
    ],
  },
  {
    category: 'Storage',
    tips: [
      'Store sleeping bags uncompressed in large cotton or mesh sacks',
      'Keep tents completely dry before long-term storage',
      'Hang backpacks or store unstuffed to maintain shape',
      'Store footwear in climate-controlled environments',
      'Keep all gear away from direct sunlight and extreme temperatures',
    ],
  },
  {
    category: 'Repair',
    tips: [
      'Carry tenacious tape for field repairs of tears and holes',
      'Keep spare parts for essential gear (pole sections, buckles)',
      'Apply seam sealer to tents annually',
      'Re-waterproof rain gear when water stops beading up',
      'Regularly check and tighten loose screws/connections',
    ],
  },
  {
    category: 'Longevity',
    tips: [
      'Follow manufacturer care instructions precisely',
      'Address minor issues before they become major problems',
      'Use appropriate protection (footprint under tent, etc.)',
      'Avoid overstuffing backpacks beyond capacity',
      'Learn proper techniques for use to prevent damage',
    ],
  },
];

export default maintenanceTips;
