// app/data/mapping-guide/terrainFeatures.ts
import ridge from '../../../public/images/ridge.jpg';
import valley from '../../../public/images/valley.jpg';
import saddle from '../../../public/images/saddle.jpg';
import spur from '../../../public/images/spur.jpg';
import depression from '../../../public/images/depression.jpg';
import cliff from '../../../public/images/cliff.jpg';
import summit from '../../../public/images/summit.jpg';
import flat from '../../../public/images/flat.jpg';
import waterfeature from '../../../public/images/waterfeature.jpg';

const terrainFeatures = [
  {
    name: 'Ridge',
    image: ridge,
    mapRepresentation:
      'Appears as U or V-shaped contour lines pointing away from higher elevation. The bends in contour lines point downhill.',
    navigationUse: [
      'Provides clear line-of-sight and often easier travel than valleys',
      'Can be followed as a natural handrail through complex terrain',
      'Offers good visibility for triangulation to other landmarks',
      'Often forms natural boundaries between watersheds',
    ],
  },
  {
    name: 'Valley/Drainage',
    image: valley,
    mapRepresentation:
      'Appears as U or V-shaped contour lines pointing toward higher elevation. The bends in contour lines point uphill.',
    navigationUse: [
      'Contains water sources and often established trails',
      'Provides natural corridors through mountainous terrain',
      'Can be used as catching features when traveling perpendicular to them',
      'Often lead to settlements, roads, or other significant features',
    ],
  },
  {
    name: 'Saddle/Pass',
    image: saddle,
    mapRepresentation:
      'Appears as an hourglass shape in contour lines - the low point between two higher areas.',
    navigationUse: [
      'Provides efficient crossing points between valleys or over mountains',
      'Serves as easily identifiable location for position confirmation',
      'Often contains established trails or routes',
      'Can be used as a destination or emergency exit route',
    ],
  },
  {
    name: 'Spur',
    image: spur,
    mapRepresentation:
      'A smaller ridge extending from a main ridge, shown as contour lines forming a peninsula-like shape.',
    navigationUse: [
      'Can be used as attack points when approaching specific locations',
      'Provides relatively level routes descending from ridges',
      'Often easier to travel on than surrounding steep slopes',
      'Forms natural boundaries between smaller drainages',
    ],
  },
  {
    name: 'Depression',
    image: depression,
    mapRepresentation:
      'Circular or oval contour lines with hachures (small lines) pointing inward toward the center.',
    navigationUse: [
      'Easily identifiable landmark for confirming location',
      'May contain water sources or unique vegetation',
      'Can be used as collection points or emergency shelter locations',
      'Often represents distinctive terrain features like sinkholes or craters',
    ],
  },
  {
    name: 'Cliff/Escarpment',
    image: cliff,
    mapRepresentation:
      'Very closely spaced or merged contour lines, sometimes with special cliff symbols (small black lines perpendicular to the slope).',
    navigationUse: [
      'Critical to identify for safety - represents impassable terrain',
      'Serves as a definitive boundary or barrier',
      'Provides excellent line-of-sight for distant landmarks',
      'Can be used for long-range position confirmation',
    ],
  },
  {
    name: 'Summit/Peak',
    image: summit,
    mapRepresentation:
      'Concentric closed contour lines, often with a spot elevation marking the highest point.',
    navigationUse: [
      'Excellent landmark for triangulation and position fixing',
      'Provides 360° viewpoint for route planning and orientation',
      'Serves as distinctive destination or waypoint',
      'Often marked with survey benchmarks for precise location reference',
    ],
  },
  {
    name: 'Flat/Plateau',
    image: flat,
    mapRepresentation:
      'Area with few or widely spaced contour lines, indicating minimal elevation change.',
    navigationUse: [
      'Offers easier travel conditions than surrounding steep terrain',
      'May require more careful navigation due to fewer distinct features',
      'Can be used to make faster progress when time is critical',
      'Often contains meadows, lakes, or other distinct ecological features',
    ],
  },
  {
    name: 'Water Features',
    image: waterfeature,
    mapRepresentation:
      'Blue lines or shapes representing rivers, lakes, streams, or coastlines.',
    navigationUse: [
      'Provide unmistakable linear features for position confirmation',
      'Can be followed as natural handrails through the landscape',
      'Serve as barriers or boundaries requiring specific crossing points',
      'Important resources for water resupply and route planning',
    ],
  },
];

export default terrainFeatures;
