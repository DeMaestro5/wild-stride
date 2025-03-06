// app/hiking-gear/types/gearTypes.ts
import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

// Essential Gear Category Types
export interface Recommendation {
  type: string;
  example: string;
}

export interface GearCategory {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  keyFeatures: string[];
  recommendations: Recommendation[];
}

// Seasonal Gear Types
export interface SeasonalGearItem {
  season: string;
  image: StaticImageData;
  color: string;
  icon: ReactNode;
  items: string[];
}

// Trip Type Gear Types
export interface TripType {
  type: string;
  icon: string;
  essentials: string[];
}

// Weight Philosophy Types
export interface WeightPhilosophy {
  name: string;
  baseWeight: string;
  focus: string;
  pros: string[];
  cons: string[];
}

// Budget Tips Types
export interface BudgetTipsData {
  whenToBuy: string[];
  whereToBuy: string[];
  bestValue: string[];
  investIn: string[];
}

// Maintenance Tips Types
export interface MaintenanceCategory {
  category: string;
  tips: string[];
}

// Component Props Types
export interface GearCategoryCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  keyFeatures: string[];
  recommendations: Recommendation[];
  index: number;
}

export interface SeasonalGearCardProps {
  season: string;
  image: StaticImageData;
  color: string;
  icon: ReactNode;
  items: string[];
}

export interface TripTypeCardProps {
  type: string;
  icon: string;
  essentials: string[];
}

export interface WeightPhilosophyCardProps {
  name: string;
  baseWeight: string;
  focus: string;
  pros: string[];
  cons: string[];
}

export interface BudgetTipsSectionProps {
  tips: BudgetTipsData;
}

export interface MaintenanceTipsSectionProps {
  tips: MaintenanceCategory[];
}
