import { StaticImageData } from 'next/image';

// Season types
export interface Season {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: StaticImageData;
  heroAlt: string;
  colorClass: string;
  months: string[];
  icon: string;
}

// Weather condition types
export interface WeatherCondition {
  title: string;
  icon: string;
  description: string;
  essentialGear: string[];
  dangerLevel: 'Low' | 'Moderate' | 'High' | 'Very High' | 'Extreme';
}

// Featured gear types
export interface FeaturedGearItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  colors: string[];
  features: string[];
  tags: { text: string; colorClass: string }[];
}

// Layering system types
export interface LayerItem {
  id: string;
  name: string;
  description: string;
  purpose: string;
  examples: {
    name: string;
    brand: string;
    features: string[];
  }[];
  imageUrl: string;
  colorClass: string;
}

// Packing list types
export interface PackingItem {
  name: string;
  description: string;
  importance: 'critical' | 'high' | 'medium' | 'variable';
  category: 'clothing' | 'footwear' | 'gear' | 'safety' | 'nutrition' | 'other';
  icon: string;
}

export interface PackingList {
  essential: PackingItem[];
  optional: PackingItem[];
  downloadUrl: string;
}

// Boot comparison types
export interface BootComparisonItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  temperature: string;
  ventilation: string;
  features: string[];
  bestFor: string;
  waterproof: 'Yes' | 'No' | 'Partial';
  durability: 'Low' | 'Medium' | 'High' | 'Very High';
  weight: string;
  recommendedUse: string[];
}

// Trail types
export interface TrailTag {
  name: string;
  bgColor: string;
  textColor: string;
}

export interface Trail {
  id: string;
  name: string;
  location: string;
  distance: string;
  elevationGain: string;
  difficulty: string;
  description: string;
  imageUrl: string;
  tags: TrailTag[];
  detailUrl: string;
}

export interface TrailsData {
  mapImage: string;
  mapAlt: string;
  regionName: string;
  trails: Trail[];
  allTrailsUrl: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
  trailName?: string;
  gear?: string[];
}

// Maintenance tip types
export interface MaintenanceTip {
  id: string;
  title: string;
  icon: string;
  description: string;
  steps: string[];
  image: string;
  frequencyRecommendation: string;
  difficultyLevel: 'Easy' | 'Moderate' | 'Advanced';
  timeEstimate: string;
  relatedProducts?: {
    name: string;
    url: string;
  }[];
}

// Sustainability types
export interface SustainabilityStat {
  label: string;
  value: string;
  icon: string;
}

export interface SustainabilityBrand {
  name: string;
  logo: string;
  initiative: string;
  url: string;
}

export interface SustainabilityData {
  title: string;
  description: string;
  stats: SustainabilityStat[];
  brandsHighlighted: SustainabilityBrand[];
  callToAction: {
    text: string;
    buttonText: string;
    url: string;
  };
}

// Safety tip types
export interface SafetyTip {
  id: string;
  title: string;
  description: string;
  icon: string;
  priority: 'critical' | 'high' | 'medium';
}

export interface SeasonalTipsData {
  title: string;
  description: string;
  tips: SafetyTip[];
  linkText: string;
  linkUrl: string;
}

// Equipment guide types
export interface EquipmentGuideFeature {
  title: string;
  description: string;
  icon: string;
}

export interface EquipmentGuideData {
  title: string;
  description: string;
  coverImage: string;
  downloadUrl: string;
  features: EquipmentGuideFeature[];
}
