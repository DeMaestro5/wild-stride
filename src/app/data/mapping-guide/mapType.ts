// app/data/mapping-guide/mapTypes.ts
import { MapType } from '../../../types/mappingGuideType';

// Import images
import topoMapImage from '../../../public/images/topoMapImage.jpg';
import trailMapImage from '../../../public/images/trailMapImage.jpg';
import gpsMapImage from '../../../public/images/gpsMapImage.jpg';
import specializedMapImage from '../../../public/images/specializedMapImage.jpg';
import historicalMapImage from '../../../public/images/historicMapImage.jpg';
import geologicalMapImage from '../../../public/images/geologicalMapImage.jpg';

const mapTypes: MapType[] = [
  {
    id: 'topo',
    title: 'Topographic Maps',
    description:
      'Detailed maps showing elevation changes through contour lines, along with major natural and human-made features in a specific area.',
    image: topoMapImage,
    keyFeatures: [
      {
        name: 'Contour Lines',
        description:
          'Shows elevation changes through equally spaced lines - closer lines indicate steeper terrain.',
      },
      {
        name: 'Scale',
        description:
          'Typically 1:24,000 (USGS) showing high detail, with 1" = 2,000 feet.',
      },
      {
        name: 'Coordinate System',
        description:
          'Usually displays UTM grid and/or latitude/longitude markings.',
      },
      {
        name: 'Legend',
        description:
          'Comprehensive symbol key for natural features, trails, buildings, and boundaries.',
      },
    ],
    bestUses: [
      {
        activity: 'Backcountry Hiking',
        why: 'Essential for safe off-trail travel and navigation in wilderness areas.',
      },
      {
        activity: 'Planning Expeditions',
        why: 'Helps identify campsites, water sources, and difficult terrain sections.',
      },
      {
        activity: 'Emergency Navigation',
        why: 'Most reliable tool when GPS or electronic devices fail.',
      },
    ],
  },
  {
    id: 'trail',
    title: 'Trail Maps',
    description:
      'Simplified maps focused primarily on trail systems, often with less topographic detail but more information about trail conditions, distances, and facilities.',
    image: trailMapImage,
    keyFeatures: [
      {
        name: 'Trail Classification',
        description:
          'Color-coded or styled lines indicating difficulty level, surface type, and use type.',
      },
      {
        name: 'Points of Interest',
        description:
          'Clearly marked viewpoints, shelters, parking areas, and facilities.',
      },
      {
        name: 'Distance Markers',
        description: 'Mileage between junctions and significant landmarks.',
      },
      {
        name: 'Simplified Elevation',
        description: 'Basic elevation indicators without detailed contours.',
      },
    ],
    bestUses: [
      {
        activity: 'Day Hiking',
        why: 'Perfect for well-maintained trail systems with clear markings.',
      },
      {
        activity: 'Biking & Multi-use',
        why: 'Shows which trails allow different activities and their difficulty ratings.',
      },
      {
        activity: 'Park Navigation',
        why: 'Clearly shows facilities, amenities, and accessibility information.',
      },
    ],
  },
  {
    id: 'gps',
    title: 'Digital GPS Maps',
    description:
      'Interactive digital maps available on GPS devices, smartphones, and computers, offering layers of information, real-time positioning, and route tracking.',
    image: gpsMapImage,
    keyFeatures: [
      {
        name: 'Real-time Positioning',
        description:
          'Shows your exact location and movement in real-time using GPS signals.',
      },
      {
        name: 'Customizable Layers',
        description:
          'Toggle between topographic, satellite, trail, and other information layers.',
      },
      {
        name: 'Track Recording',
        description:
          'Automatically records your path, pace, elevation changes, and other metrics.',
      },
      {
        name: 'Dynamic Information',
        description:
          'Can include weather updates, closures, and crowdsourced trail conditions.',
      },
    ],
    bestUses: [
      {
        activity: 'Complex Route Navigation',
        why: 'Reduces navigation errors in confusing trail networks or unmarked terrain.',
      },
      {
        activity: 'Data Collection',
        why: 'Great for recording tracks, waypoints, and sharing routes with others.',
      },
      {
        activity: 'International Travel',
        why: 'Easier to obtain than physical maps for remote international destinations.',
      },
    ],
  },
  {
    id: 'special',
    title: 'Specialized Maps',
    description:
      'Purpose-specific maps designed for particular activities or conditions, such as winter trails, water navigation, or desert travel.',
    image: specializedMapImage,
    keyFeatures: [
      {
        name: 'Activity-Specific',
        description:
          'Tailored information for skiing, water sports, climbing, etc.',
      },
      {
        name: 'Seasonal Relevance',
        description:
          'Shows information only applicable during certain times of year.',
      },
      {
        name: 'Unique Hazards',
        description:
          'Highlights activity-specific dangers like avalanche zones or rapids.',
      },
      {
        name: 'Technical Information',
        description:
          'Contains specialized data like snow depth, climbing route grades, or water depths.',
      },
    ],
    bestUses: [
      {
        activity: 'Winter Sports',
        why: 'Shows avalanche terrain, skiing difficulty, and winter-only trails.',
      },
      {
        activity: 'Water Navigation',
        why: 'Includes depth contours, hazards, and landing points for paddlers.',
      },
      {
        activity: 'Technical Climbing',
        why: 'Provides route information, climbing grades, and approach details.',
      },
    ],
  },
  {
    id: 'historical',
    title: 'Historical & Cultural Maps',
    description:
      'Maps highlighting historical sites, cultural points of interest, and heritage trails that combine outdoor recreation with educational experiences.',
    image: historicalMapImage,
    keyFeatures: [
      {
        name: 'Cultural Points',
        description:
          'Highlights historical sites, ruins, monuments, and culturally significant locations.',
      },
      {
        name: 'Educational Context',
        description:
          'Includes historical information, dates, and contextual details about sites.',
      },
      {
        name: 'Heritage Routes',
        description:
          'Shows traditional pathways, pilgrimages, or culturally significant routes.',
      },
      {
        name: 'Access Information',
        description:
          'Details about visiting hours, guided tours, and accessibility of historical sites.',
      },
    ],
    bestUses: [
      {
        activity: 'Educational Outings',
        why: "Perfect for learning about an area's history while enjoying outdoor activities.",
      },
      {
        activity: 'Cultural Tourism',
        why: 'Helps locate and understand significant cultural and historical landmarks.',
      },
      {
        activity: 'Heritage Trails',
        why: 'Follow routes that connect multiple historical or cultural points of interest.',
      },
    ],
  },
  {
    id: 'geological',
    title: 'Geological Maps',
    description:
      'Specialized maps that display rock types, geological structures, and geological history of an area, useful for understanding landscape formation and finding geological points of interest.',
    image: geologicalMapImage,
    keyFeatures: [
      {
        name: 'Rock Classification',
        description:
          'Color-coded regions showing different rock types and formations.',
      },
      {
        name: 'Fault Lines',
        description: 'Marks geological faults, folds, and structural features.',
      },
      {
        name: 'Age Indicators',
        description:
          'Shows relative or absolute ages of different geological formations.',
      },
      {
        name: 'Resource Locations',
        description:
          'Highlights areas of mineral deposits, fossil beds, or other geological resources.',
      },
    ],
    bestUses: [
      {
        activity: 'Rock Hounding',
        why: 'Essential for finding areas likely to contain specific minerals or fossils.',
      },
      {
        activity: 'Educational Geology',
        why: 'Ideal for understanding how landscapes formed and evolved over time.',
      },
      {
        activity: 'Landscape Photography',
        why: 'Helps locate visually striking geological features worth photographing.',
      },
    ],
  },
];

export default mapTypes;
