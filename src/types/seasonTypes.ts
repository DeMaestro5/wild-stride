// src/types/seasonTypes.ts
import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

/**
 * Base season information
 */
export interface Season {
  id: string;
  name: string;
  icon: string; // Changed from ReactNode to string to match the data
  active: boolean;
  heroImage: string | StaticImageData;
  heroAlt: string;
  subtitle: string;
  title: string;
  description: string;
}

/**
 * Season-specific gear item
 */
export interface GearItem {
  id: number;
  name: string;
  description: string;
  category: string;
  image: StaticImageData | string; // Allow both types for flexibility
  url: string;
  featured?: boolean;
  seasonalTag?: string;
  price?: string;
  rating?: number;
}

/**
 * Weather condition for a specific season
 */
export interface WeatherCondition {
  title: string;
  icon: ReactNode | string; // Allow both types for flexibility
  description: string;
  essentialGear: string[];
  dangerLevel: 'Low' | 'Moderate' | 'High' | 'Very High' | 'Extreme';
}

/**
 * Seasonal packing list
 */
export interface PackingList {
  essential: string[];
  optional: string[];
  seasonName: string;
  downloadUrl: string;
}

/**
 * Layer information for the layering system
 */
export interface LayerInfo {
  name: string;
  description: string;
  materials: string[];
  features: string[];
  image: StaticImageData | string; // Allow both types for flexibility
  tips: string;
}

/**
 * Boot comparison data
 */
export type DurabilityRating = 'Low' | 'Medium' | 'High';

export interface BootComparisonItem {
  id: number;
  name: string;
  price: string;
  rating: number;
  temperature: string; // Temperature rating
  insulation: string;
  features: string[];
  bestFor: string;
  waterproof: boolean;
  durability: DurabilityRating;
  weight?: string;
  image?: string;
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
  id: number;
  name: string;
  location: string;
  distance: string;
  elevationGain: string;
  difficulty: string;
  description: string;
  tags: TrailTag[];
  imageUrl: string;
  detailUrl: string;
}

/**
 * Seasonal trails data
 */
export interface TrailsData {
  mapImage: StaticImageData | string; // Allow both types for flexibility
  mapAlt: string;
  regionName: string;
  trails: Trail[];
  allTrailsUrl: string;
}

/**
 * User testimonial
 */
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
  productReference?: string;
}

/**
 * Gear maintenance tip
 */
export interface MaintenanceTip {
  title: string;
  icon: ReactNode | string; // Allow both types for flexibility
  steps: string[];
}

/**
 * Sustainability statistics
 */
export interface SustainabilityStat {
  label: string;
  value: string;
  description: string;
}

/**
 * Sustainability feature data
 */
export interface SustainabilityFeatureData {
  title: string;
  description: string;
  stats: SustainabilityStat[];
  brandsHighlighted: string[];
  callToAction: {
    text: string;
    url: string;
  };
}

/**
 * Safety tip
 */
export interface SafetyTip {
  title: string;
  content: string;
  icon: ReactNode | string; // Allow both types for flexibility
}

/**
 * Seasonal safety tips collection
 */
export interface SeasonalSafetyTips {
  title: string;
  description: string;
  tips: SafetyTip[];
  linkText: string;
  linkUrl: string;
}

/**
 * Seasonal equipment guide data
 */
export interface EquipmentGuideData {
  title: string;
  description: string;
  coverImage: string;
  downloadUrl: string;
  features: string[];
}

/**
 * Complete seasonal data bundle
 */
export interface SeasonalData {
  seasonInfo: Season;
  featuredGear: GearItem[];
  weatherConditions: WeatherCondition[];
  packingList: PackingList;
  layeringSystem: LayerInfo[];
  bootComparison: BootComparisonItem[];
  trails: TrailsData;
  testimonials: Testimonial[];
  maintenanceTips: MaintenanceTip[];
  sustainability: SustainabilityFeatureData;
  safetyTips: SeasonalSafetyTips;
  equipmentGuide: EquipmentGuideData;
}
