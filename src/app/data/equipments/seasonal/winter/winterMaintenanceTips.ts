import { MaintenanceTip } from '../../../../../types/seasonTypes';
import { ReactNode } from 'react';

// Icons will be created in the component that renders this data
const iconPlaceholder: ReactNode = null;

const winterMaintenanceTips: MaintenanceTip[] = [
  {
    title: 'Waterproof Gear Care',
    icon: iconPlaceholder, // Umbrella icon will be added in component
    steps: [
      'Clean with gentle soap and warm water',
      'Rinse thoroughly',
      'Air dry completely',
      'Apply DWR treatment every 5-10 washes',
      'Store loosely on hangers',
    ],
  },
  {
    title: 'Down Insulation Maintenance',
    icon: iconPlaceholder, // ThermometerSun icon will be added in component
    steps: [
      'Use down-specific wash',
      'Rinse twice to remove all soap',
      'Tumble dry on low with clean tennis balls',
      'Break up clumps while drying',
      'Store uncompressed in breathable bag',
    ],
  },
  {
    title: 'Boot & Traction Device Care',
    icon: iconPlaceholder, // Tool icon will be added in component
    steps: [
      'Remove dirt and salt after each use',
      'Dry away from direct heat',
      'Apply leather conditioner if applicable',
      'Check and tighten screws on traction devices',
      'Store in dry location',
    ],
  },
];

export default winterMaintenanceTips;
