// app/data/equipments/terrain/TerrainTypes.ts
import { TerrainType } from '../../../../types/terraineTypes';
import mountainHero from '../../../../public/images/img1.jpg';
import desertHero from '../../../../public/images/img2.jpg';
import forestHero from '../../../../public/images/img1.jpg';
import wetlandHero from '../../../../public/images/img1.jpg';
import coastalHero from '../../../../public/images/img1.jpg';

const terrainTypes: TerrainType[] = [
  {
    id: 'mountain',
    name: 'Mountain',
    subtitle: 'ELEVATED ADVENTURES',
    title: 'Mountain Hiking Gear',
    description:
      'Tackle steep ascents, rocky paths, and dramatic elevation changes with confidence. Our curated selection of mountain gear helps you conquer peaks safely while enjoying breathtaking views.',
    heroImage: mountainHero,
    heroAlt: 'Majestic mountain range with hiking trail',
    color: 'green-600',
    icon: 'mountain',
    difficultyLevel: 4,
    popularFeatures: ['Traction', 'Support', 'Weather Protection'],
    recommendedExperience: 'Intermediate',
  },
  {
    id: 'desert',
    name: 'Desert',
    subtitle: 'ARID EXPEDITIONS',
    title: 'Desert Hiking Gear',
    description:
      'Navigate hot, dry, and challenging desert landscapes with specialized gear designed for sun protection, water conservation, and temperature regulation.',
    heroImage: desertHero,
    heroAlt: 'Vast desert landscape with red rock formations',
    color: 'amber-500',
    icon: 'sun',
    difficultyLevel: 4,
    popularFeatures: ['Sun Protection', 'Hydration', 'Heat Management'],
    recommendedExperience: 'Intermediate',
  },
  {
    id: 'forest',
    name: 'Forest',
    subtitle: 'WOODLAND EXPLORATION',
    title: 'Forest Hiking Gear',
    description:
      'Wander through lush forest trails with gear designed for navigating dense vegetation, uneven terrain, and variable weather conditions.',
    heroImage: forestHero,
    heroAlt: 'Dense forest trail with sunlight filtering through trees',
    color: 'emerald-600',
    icon: 'tree',
    difficultyLevel: 2,
    popularFeatures: ['Durability', 'Weather Adaptation', 'Bug Protection'],
    recommendedExperience: 'Beginner',
  },
  {
    id: 'wetland',
    name: 'Wetland',
    subtitle: 'BOGGY ADVENTURES',
    title: 'Wetland Hiking Gear',
    description:
      'Explore marshes, swamps, and wetland areas with specialized equipment that keeps you dry, protects from insects, and provides stability on soft ground.',
    heroImage: wetlandHero,
    heroAlt: 'Boardwalk trail through a lush wetland area',
    color: 'blue-500',
    icon: 'droplets',
    difficultyLevel: 3,
    popularFeatures: ['Waterproofing', 'Insect Protection', 'Stability'],
    recommendedExperience: 'Intermediate',
  },
  {
    id: 'coastal',
    name: 'Coastal',
    subtitle: 'SHORELINE TREKS',
    title: 'Coastal Hiking Gear',
    description:
      'Navigate beach trails, rocky shorelines, and coastal cliffs with gear designed for sand, salt water, and changing tides.',
    heroImage: coastalHero,
    heroAlt: 'Dramatic coastal trail alongside ocean cliffs',
    color: 'cyan-500',
    icon: 'wave',
    difficultyLevel: 3,
    popularFeatures: ['Traction', 'Salt Resistance', 'Sun Protection'],
    recommendedExperience: 'Intermediate',
  },
];

export default terrainTypes;
