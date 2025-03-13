// app/data/equipments/terrain/mountain/mountainPackingList.ts
import {
  PackingItem,
  TerrainPackingList,
} from '../../../../../types/terraineTypes';

const essentialItems: PackingItem[] = [
  {
    name: 'Hiking Boots with Ankle Support',
    description:
      'Sturdy boots with good ankle support and grip for rocky, uneven terrain.',
    category: 'Footwear',
    importance: 'critical',
  },
  {
    name: 'Trekking Poles',
    description:
      'Adjustable poles with shock absorption to reduce strain on descents and provide stability.',
    category: 'Equipment',
    importance: 'high',
  },
  {
    name: 'Topographic Map & Compass',
    description:
      'Physical map of the area with elevation lines and a reliable compass.',
    category: 'Navigation',
    importance: 'critical',
  },
  {
    name: 'GPS Device or App',
    description: 'GPS unit or smartphone app with downloaded offline maps.',
    category: 'Navigation',
    importance: 'high',
  },
  {
    name: 'Headlamp with Extra Batteries',
    description:
      'Hands-free lighting with backup power for unexpected delays or emergencies.',
    category: 'Equipment',
    importance: 'critical',
  },
  {
    name: 'First Aid Kit',
    description:
      'Basic kit with blister treatment, pain relievers, bandages, and personal medications.',
    category: 'Safety',
    importance: 'critical',
  },
  {
    name: 'Emergency Whistle',
    description:
      'Loud whistle for signaling in case of emergency (three blasts is universal distress signal).',
    category: 'Safety',
    importance: 'critical',
  },
  {
    name: 'Water Filter or Purification Tablets',
    description:
      'Portable water filter or chemical treatment for obtaining safe drinking water from mountain sources.',
    category: 'Hydration',
    importance: 'high',
  },
  {
    name: 'Insulating Layer',
    description:
      'Fleece or synthetic mid-layer for temperature regulation at higher elevations.',
    category: 'Clothing',
    importance: 'high',
  },
  {
    name: 'Waterproof Rain Jacket',
    description:
      'Breathable, waterproof outer shell to protect from sudden mountain storms.',
    category: 'Clothing',
    importance: 'critical',
  },
  {
    name: 'Quick-Dry Hiking Pants',
    description:
      'Durable, moisture-wicking pants, preferably with zip-off legs for temperature flexibility.',
    category: 'Clothing',
    importance: 'medium',
  },
  {
    name: 'Moisture-Wicking Base Layer',
    description:
      'Synthetic or wool shirt that wicks sweat away from body to prevent chilling.',
    category: 'Clothing',
    importance: 'high',
  },
  {
    name: 'Hiking Socks',
    description:
      'Moisture-wicking, cushioned wool or synthetic blend socks with extra pair.',
    category: 'Footwear',
    importance: 'high',
  },
  {
    name: 'Sun Protection',
    description:
      'Sunscreen (SPF 30+), lip balm with SPF, sunglasses with UV protection.',
    category: 'Protection',
    importance: 'high',
  },
  {
    name: 'Hat with Brim',
    description: 'For sun protection during day hiking at exposed elevations.',
    category: 'Protection',
    importance: 'medium',
  },
  {
    name: 'Warm Hat',
    description:
      'Insulating beanie for cold temperatures at higher elevations.',
    category: 'Clothing',
    importance: 'medium',
  },
  {
    name: 'High-Energy Snacks',
    description:
      'Calorie-dense, easy-to-eat foods like trail mix, energy bars, and jerky.',
    category: 'Food',
    importance: 'high',
  },
  {
    name: 'Water Bottles or Reservoir',
    description:
      'Capacity for at least 2 liters of water, more in dry conditions.',
    category: 'Hydration',
    importance: 'critical',
  },
  {
    name: 'Multi-Tool or Knife',
    description:
      'Compact tool for repairs, food preparation, and emergency use.',
    category: 'Equipment',
    importance: 'high',
  },
  {
    name: 'Emergency Shelter',
    description:
      'Lightweight emergency bivy or space blanket for unexpected situations.',
    category: 'Safety',
    importance: 'high',
  },
];

const optionalItems: PackingItem[] = [
  {
    name: 'Altimeter Watch',
    description:
      'Watch with barometric altimeter to track elevation changes and weather trends.',
    category: 'Navigation',
    importance: 'medium',
  },
  {
    name: 'Gaiters',
    description:
      'Protective covers to keep rocks, debris, and water out of boots.',
    category: 'Footwear',
    importance: 'medium',
  },
  {
    name: 'Microspikes or Crampons',
    description: 'Removable traction devices for icy conditions or steep snow.',
    category: 'Equipment',
    importance: 'medium',
  },
  {
    name: 'Trekking Gloves',
    description:
      'Lightweight gloves with palm protection for pole use and scrambling.',
    category: 'Clothing',
    importance: 'low',
  },
  {
    name: 'Insect Repellent',
    description: 'DEET or picaridin-based repellent for lower elevations.',
    category: 'Protection',
    importance: 'low',
  },
  {
    name: 'Camera',
    description: 'For capturing mountain vistas and memories.',
    category: 'Personal',
    importance: 'low',
  },
  {
    name: 'Lightweight Binoculars',
    description: 'Compact binoculars for wildlife viewing and scouting routes.',
    category: 'Equipment',
    importance: 'low',
  },
  {
    name: 'Hiking Gaiters',
    description: 'Ankle or mid-calf gaiters to keep debris out of boots.',
    category: 'Footwear',
    importance: 'medium',
  },
  {
    name: 'Portable Weather Radio',
    description: 'Compact radio to receive weather forecasts in remote areas.',
    category: 'Safety',
    importance: 'medium',
  },
  {
    name: 'Satellite Messenger',
    description:
      'Device for emergency communication in areas without cell service.',
    category: 'Safety',
    importance: 'medium',
  },
  {
    name: 'Trekking Umbrella',
    description:
      'Lightweight umbrella for sun protection and light precipitation.',
    category: 'Protection',
    importance: 'low',
  },
  {
    name: 'Hiking Poles Tip Protectors',
    description: 'Rubber tips for trekking poles when hiking on rock surfaces.',
    category: 'Equipment',
    importance: 'low',
  },
];

const mountainPackingList: TerrainPackingList = {
  essential: essentialItems,
  optional: optionalItems,
  downloadUrl: '/downloads/mountain-packing-checklist.pdf',
};

export default mountainPackingList;
