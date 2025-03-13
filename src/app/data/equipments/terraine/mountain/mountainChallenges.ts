// app/data/equipments/terrain/mountain/mountainChallenges.ts
import { TerrainChallenge } from '../../../../../types/terraineTypes';

const mountainChallenges: TerrainChallenge[] = [
  {
    title: 'Steep Ascents',
    icon: 'mountain',
    description:
      'Climbing steep inclines requires proper technique and equipment to prevent fatigue and injury.',
    essentialGear: [
      'Trekking poles with shock absorption',
      'Boots with ankle support',
      'Lightweight day pack with hip belt',
    ],
    difficultyLevel: 4,
  },
  {
    title: 'Rocky Terrain',
    icon: 'danger',
    description:
      'Navigating loose rocks and unstable surfaces demands focused attention and proper footwear.',
    essentialGear: [
      'Boots with vibram soles',
      'Gaiters to keep debris out',
      'Trekking poles for stability',
    ],
    difficultyLevel: 3,
  },
  {
    title: 'Weather Changes',
    icon: 'cloud',
    description:
      'Mountain weather can change rapidly, with temperature drops and sudden storms requiring preparedness.',
    essentialGear: [
      'Waterproof shell jacket',
      'Insulating mid-layer',
      'Weather radio or app',
    ],
    difficultyLevel: 4,
  },
  {
    title: 'Navigation Challenges',
    icon: 'navigation',
    description:
      'Limited visibility, unmarked trails, and complex terrain can make navigation difficult.',
    essentialGear: [
      'Topographic map and compass',
      'GPS device with spare batteries',
      'Altimeter watch',
    ],
    difficultyLevel: 5,
  },
];

export default mountainChallenges;
