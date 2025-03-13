// src/types/terrainTypes.ts

import { StaticImageData } from 'next/image';

/**
 * Base terrain information
 */
export interface TerrainType {
  id: string;
  name: string;
  icon: string;
  color: string;
  difficultyLevel: number;
  recommendedExperience: string;
  heroImage: string | StaticImageData;
  heroAlt: string;
  subtitle: string;
  title: string;
  description: string;
  popularFeatures: string[];
}

/**
 * Generic comparison item interface for equipment comparison
 */
export interface ComparisonItem {
  id: number | string;
  name: string;
  price: string;
  rating: number;
  weightKg?: number;
  features: string[];
  bestFor: string;
  waterproof: boolean;
  durability: 'Low' | 'Medium' | 'High';
  temperature?: string;
  insulation?: string;
  // Optional properties to maintain compatibility with BootComparisonItem
  brand?: string;
  image?: StaticImageData | string;
  reviewCount?: number;
  description?: string;
  grip?: string;
  support?: string;
  pros?: string[];
  cons?: string[];
  url?: string;
}

/**
 * Terrain-specific gear item
 */
export interface GearItem {
  id: string;
  name: string;
  category: string;
  price: string;
  rating: number;
  reviewCount: number;
  image: StaticImageData | string;
  description: string;
  features: string[];
  tags: string[];
  terrainTags: string[];
  url: string;
}

/**
 * Terrain challenge for a specific terrain type
 */
export interface TerrainChallenge {
  title: string;
  icon: string;
  description: string;
  essentialGear: string[];
  difficultyLevel: number;
}

/**
 * Terrain gear usage tip
 */
export interface GearTip {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  steps: string[];
  tags: string[];
}

/**
 * Packing item for a terrain-specific list
 */
export interface PackingItem {
  name: string;
  description: string;
  category: string;
  importance: 'critical' | 'high' | 'medium' | 'low';
}

/**
 * Terrain packing list
 */
export interface TerrainPackingList {
  essential: PackingItem[];
  optional: PackingItem[];
  downloadUrl: string;
}

/**
 * Boot comparison for terrain-specific footwear
 */
export interface BootComparisonItem {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: StaticImageData | string;
  rating: number;
  reviewCount: number;
  description: string;
  weight: string;
  grip: string;
  support: string;
  features: string;
  bestFor: string;
  waterproof: string;
  durability: string;
  pros: string[];
  cons: string[];
  url: string;
}

/**
 * Trail tag for categorizing trails
 */
export interface TrailTag {
  name: string;
  bgColor: string;
  textColor: string;
}

/**
 * Individual trail information
 */
export interface Trail {
  id: string;
  name: string;
  location: string;
  distance: string;
  elevationGain: string;
  difficulty: string;
  description: string;
  bestSeasons: string[];
  tags: TrailTag[];
  essentialGear: string[];
  detailUrl: string;
  imageUrl: string;
}

/**
 * Terrain trails data
 */
export interface TerrainTrailsData {
  mapImage: StaticImageData | string;
  mapAlt: string;
  regionName: string;
  allTrailsUrl: string;
  trails: Trail[];
}

/**
 * Maintenance tip for terrain-specific gear
 */
export interface MaintenanceTip {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  steps: string[];
}

/**
 * User testimonial for terrain-specific gear
 */
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: StaticImageData | string;
  rating: number;
  text: string;
  purchasedItems: string[];
  hikingExperience: string;
  hikeLocation: string;
  date: string;
}

/**
 * Conservation statistics
 */
export interface ConservationStat {
  value: string;
  label: string;
  color: string;
}

/**
 * Conservation initiative
 */
export interface ConservationInitiative {
  title: string;
  description: string;
  icon: string;
  actionUrl: string;
}

/**
 * Conservation feature data
 */
export interface ConservationFeatureData {
  title: string;
  description: string;
  stats: ConservationStat[];
  initiatives: ConservationInitiative[];
  callToAction: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
}

/**
 * Safety tip for terrain
 */
export interface SafetyTip {
  title: string;
  description: string;
  icon: string;
  color: string;
}

/**
 * Terrain safety tips collection
 */
export interface TerrainSafetyTips {
  title: string;
  description: string;
  tips: SafetyTip[];
  linkText: string;
  linkUrl: string;
}

/**
 * Equipment guide feature
 */
export interface GuideFeature {
  title: string;
  description: string;
  icon: string;
}

/**
 * Terrain equipment guide data
 */
export interface TerrainEquipmentGuideData {
  title: string;
  description: string;
  coverImage: StaticImageData | string;
  downloadUrl: string;
  features: GuideFeature[];
  tableOfContents: string[];
  pageCount: number;
  fileSize: string;
  lastUpdated: string;
}

/**
 * Video tutorial data
 */
export interface VideoTutorialData {
  title: string;
  description: string;
  videoId: string;
  thumbnailUrl: StaticImageData | string;
  duration: string;
  expert: {
    name: string;
    title: string;
    avatar: StaticImageData | string;
  };
}

/**
 * Complete terrain data bundle
 */
export interface TerrainData {
  terrainInfo: TerrainType;
  challenges: TerrainChallenge[];
  featuredGear: GearItem[];
  gearTips: GearTip[];
  videoTutorial: VideoTutorialData;
  packingList: TerrainPackingList;
  bootComparison: BootComparisonItem[];
  trails: TerrainTrailsData;
  maintenanceTips: MaintenanceTip[];
  testimonials: Testimonial[];
  conservation: ConservationFeatureData;
  safetyTips: TerrainSafetyTips;
  equipmentGuide: TerrainEquipmentGuideData;
}
