// app/data/mapping-guide/navigationTools.ts
import baseplateCompass from '../../../public/images/baseplateCompass.jpg';
import gps from '../../../public/images/gps.jpg';
import smartphone from '../../../public/images/smartPhone.jpg';
import Altimeter from '../../../public/images/Altimeter.jpg';
import mapTools from '../../../public/images/mapTools.jpg';
import satellite from '../../../public/images/satellite.jpg';

const navigationTools = [
  {
    name: 'Baseplate Compass',
    image: baseplateCompass,
    description:
      'A transparent rectangular baseplate with a rotating bezel containing a magnetized needle that always points to magnetic north.',
    advantages: [
      'No batteries required - always works',
      'Lightweight and highly durable',
      'Unaffected by tree cover or canyons',
      'Can determine accurate bearings',
      'Works in all weather conditions',
    ],
    limitations: [
      'Requires practice and skill to use effectively',
      'Must adjust for magnetic declination',
      'Can be affected by nearby metal objects',
      "Doesn't show your position automatically",
    ],
    icon: 'compass',
  },
  {
    name: 'GPS Device',
    image: gps,
    description:
      'Dedicated electronic device that receives satellite signals to determine and display your precise location on pre-loaded maps.',
    advantages: [
      'Shows exact position on digital maps',
      'Can mark and navigate to waypoints',
      'Records tracks and routes automatically',
      'Works in low visibility conditions',
      'Many include altimeter and compass functions',
    ],
    limitations: [
      'Requires batteries or charging',
      'Can fail in extreme weather',
      'Signal problems in dense forests/deep canyons',
      'Expensive compared to traditional tools',
      'Can create over-reliance on technology',
    ],
    icon: 'gps',
  },
  {
    name: 'Smartphone Apps',
    image: smartphone,
    description:
      "Navigation applications on smartphones that utilize the device's GPS capabilities and downloaded maps to provide location information.",
    advantages: [
      'Convenient all-in-one device',
      'Often more intuitive user interfaces',
      'Can download specialized maps for different activities',
      'Many apps work offline with downloaded maps',
      'Typically includes photo capabilities for documentation',
    ],
    limitations: [
      'Limited battery life, especially in cold weather',
      'More fragile than dedicated navigation tools',
      'Screen can be difficult to see in bright sunlight',
      'May have less accurate GPS than dedicated devices',
      'Risk of distraction from notifications/other apps',
    ],
    icon: 'gps',
  },
  {
    name: 'Altimeter',
    image: Altimeter,
    description:
      'Device that measures altitude based on barometric pressure or GPS data, helping confirm your position on topographic maps.',
    advantages: [
      'Helps confirm location on contour lines',
      'Useful for tracking vertical progress',
      'Can help forecast weather changes',
      'Works when visibility is limited',
      'Many models include additional functions',
    ],
    limitations: [
      'Barometric models need regular calibration',
      'Accuracy affected by weather pressure changes',
      'Only provides elevation data, not position',
      'Electronic models require batteries',
      'Limited usefulness in flat terrain',
    ],
    icon: 'altimeter',
  },
  {
    name: 'Map Tools',
    image: mapTools,
    description:
      'Specialized accessories for measuring distances, plotting coordinates, and enhancing map reading, including rulers, protractors, and magnifiers.',
    advantages: [
      'Enables precise distance measurement',
      'Helps plot accurate bearings on maps',
      'Makes reading small map details easier',
      'No batteries required',
      'Lightweight and inexpensive',
    ],
    limitations: [
      'Requires knowledge to use effectively',
      'Multiple small pieces that can be lost',
      'Limited usefulness without a physical map',
      'Additional items to carry',
      'Not useful for determining current position',
    ],
    icon: 'map',
  },
  {
    name: 'Satellite Communicator',
    image: satellite,
    description:
      'Device that combines GPS navigation with satellite communication capabilities, allowing location sharing and emergency messaging outside of cell coverage.',
    advantages: [
      'Communication capability in remote areas',
      'Emergency SOS functionality',
      'Can share location with others in real-time',
      'Many include basic navigation features',
      'Increased safety for remote adventures',
    ],
    limitations: [
      'Expensive devices and subscription services',
      'Heavier than simple navigation tools',
      'Limited battery life when actively tracking',
      'May have delayed message transmission',
      'Basic models have minimal navigation features',
    ],
    icon: 'satellite',
  },
];

export default navigationTools;
