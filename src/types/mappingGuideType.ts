// app/mapping-guide/types/mappingTypes.ts
import { StaticImageData } from 'next/image';

// Map Types
export interface KeyFeature {
  name: string;
  description: string;
}

export interface BestUse {
  activity: string;
  why: string;
}

export interface MapType {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  keyFeatures: KeyFeature[];
  bestUses: BestUse[];
}

// Navigation Tools Types
export interface NavigationTool {
  name: string;
  image: StaticImageData | string; // Allow string as well as StaticImageData
  description: string;
  advantages: string[];
  limitations: string[];
  icon: string;
}

// Navigation Techniques Types
export interface TechniqueStep {
  title: string;
  description: string;
}

export interface NavigationTechnique {
  name: string;
  description: string;
  icon: string;
  steps: TechniqueStep[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

// Terrain Features Types
export interface TerrainFeature {
  name: string;
  image: StaticImageData | string; // Allow string as well as StaticImageData
  mapRepresentation: string;
  navigationUse: string[];
}

// Map Notation Types
export interface MapSymbol {
  name: string;
  symbol: string;
  description: string;
}

export interface MapNotation {
  category: string;
  symbols: MapSymbol[];
}

// Emergency Navigation Types
export interface EmergencyTip {
  title: string;
  description: string;
  steps: string[];
  caution: string;
}

// Component Props Types
export interface MapTypesCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  keyFeatures: KeyFeature[];
  bestUses: BestUse[];
  index: number;
}

export interface NavigationToolCardProps {
  name: string;
  image: StaticImageData | string; // Allow string as well as StaticImageData
  description: string;
  advantages: string[];
  limitations: string[];
  icon: string;
}

export interface NavigationTechniquesCardProps {
  name: string;
  description: string;
  icon: string;
  steps: TechniqueStep[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}
