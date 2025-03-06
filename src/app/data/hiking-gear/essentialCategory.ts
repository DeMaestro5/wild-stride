// app/hiking-gear/data/essentialCategories.ts
import { GearCategory } from '../../../types/gearType';
import backpackImage from '../../../public/images/backpack01.jpg';
import clothingImage from '../../../public/images/img5.jpg';
import footwearImage from '../../../public/images/hikingboot.jpg';
import navigationalImage from '../../../public/images/img6.jpg';
import shelterImage from '../../../public/images/tent.jpg';
import hydrationImage from '../../../public/images/waterfilter.jpg';
import safetyImage from '../../../public/images/img3.jpg';

const essentialCategories: GearCategory[] = [
  {
    id: 1,
    title: 'Backpacks',
    description:
      'Your backpack is the foundation of your hiking kit, carrying all your essentials while maintaining comfort.',
    image: backpackImage,
    keyFeatures: [
      'Proper fit for your torso length',
      'Padded hip belt to distribute weight',
      'Weather protection (built-in or rain cover)',
      'Compartments for organization',
      'External attachment points for gear',
    ],
    recommendations: [
      {
        type: 'Day Hiking (15-30L)',
        example: 'Osprey Talon 22, Deuter Speed Lite 20',
      },
      {
        type: 'Weekend Trips (30-50L)',
        example: 'Gregory Zulu 40, REI Flash 45',
      },
      {
        type: 'Extended Trips (50-75L)',
        example: 'Osprey Atmos 65, Granite Gear Blaze 60',
      },
    ],
  },
  {
    id: 2,
    title: 'Clothing',
    description:
      'Proper hiking attire focuses on layering, moisture management, and weather protection.',
    image: clothingImage,
    keyFeatures: [
      'Moisture-wicking base layers',
      'Insulating mid layers',
      'Waterproof/windproof outer layers',
      'Quick-drying materials',
      'UPF protection from sun exposure',
    ],
    recommendations: [
      {
        type: 'Base Layer',
        example: 'Merino wool or synthetic shirts/leggings',
      },
      {
        type: 'Mid Layer',
        example: 'Fleece jacket, down or synthetic vest/jacket',
      },
      {
        type: 'Shell Layer',
        example: 'Gore-Tex or equivalent rain jacket/pants',
      },
    ],
  },
  {
    id: 3,
    title: 'Footwear',
    description:
      'Your choice of footwear can make or break a hiking experience, providing comfort, protection, and stability.',
    image: footwearImage,
    keyFeatures: [
      'Proper fit with room for toes',
      'Good traction for varying terrain',
      'Adequate support for your needs',
      'Breathability and/or waterproofing',
      'Durability for trail conditions',
    ],
    recommendations: [
      {
        type: 'Trail Runners',
        example: 'Salomon Speedcross, Hoka Speedgoat, Brooks Cascadia',
      },
      {
        type: 'Hiking Shoes',
        example: 'Merrell Moab, Keen Targhee, Columbia Redmond',
      },
      {
        type: 'Hiking Boots',
        example: 'Salomon Quest, Lowa Renegade, Vasque Breeze',
      },
    ],
  },
  {
    id: 4,
    title: 'Navigation',
    description:
      'Reliable navigation tools are essential for staying on course and finding your way in all conditions.',
    image: navigationalImage,
    keyFeatures: [
      'Physical map of your route area',
      'Compass with declination adjustment',
      'GPS device or app (with backup power)',
      'Knowledge of how to use your tools',
      'Route research before departure',
    ],
    recommendations: [
      {
        type: 'Paper Maps',
        example: 'USGS Topographic, National Geographic Trails Illustrated',
      },
      { type: 'Compass', example: 'Suunto MC-2, Silva Ranger, Brunton TruArc' },
      {
        type: 'GPS Devices',
        example: 'Garmin GPSMAP 66i, Garmin inReach Mini, Garmin eTrex',
      },
    ],
  },
  {
    id: 5,
    title: 'Shelter & Sleep',
    description:
      'Your sleep system provides essential rest and protection from the elements during overnight trips.',
    image: shelterImage,
    keyFeatures: [
      'Weather-appropriate tent or shelter',
      'Sleeping bag rated for conditions',
      'Sleeping pad with adequate R-value',
      'Compact and lightweight design',
      'Durability for expected conditions',
    ],
    recommendations: [
      {
        type: 'Tents',
        example: 'MSR Hubba Hubba NX, Big Agnes Copper Spur, REI Half Dome',
      },
      {
        type: 'Sleeping Bags',
        example:
          'REI Magma, Feathered Friends Swallow, Western Mountaineering UltraLite',
      },
      {
        type: 'Sleeping Pads',
        example:
          'Therm-a-Rest NeoAir XLite, NEMO Tensor, Sea to Summit Ether Light',
      },
    ],
  },
  {
    id: 6,
    title: 'Hydration & Nutrition',
    description:
      'Maintaining energy and hydration is crucial for safety and enjoyment while hiking.',
    image: hydrationImage,
    keyFeatures: [
      'Water bottles or reservoir (2-3L capacity)',
      'Water filtration or purification',
      'High-energy, lightweight food',
      'Extra day food for emergencies',
      'Food storage (bear canister if required)',
    ],
    recommendations: [
      {
        type: 'Water Containers',
        example: 'Nalgene bottles, HydraPak reservoirs, Smart water bottles',
      },
      {
        type: 'Water Treatment',
        example: 'Sawyer Squeeze, Katadyn BeFree, Platypus QuickDraw',
      },
      {
        type: 'Food Storage',
        example: 'BearVault BV500, Ursack Major, Loksak Opsak',
      },
    ],
  },
  {
    id: 7,
    title: 'Safety & Emergency',
    description:
      'Safety gear is often unused but absolutely essential when situations take an unexpected turn.',
    image: safetyImage,
    keyFeatures: [
      'First aid kit tailored to your trip',
      'Emergency communication device',
      'Headlamp with extra batteries',
      'Fire starting tools',
      'Emergency shelter (even for day hikes)',
    ],
    recommendations: [
      {
        type: 'First Aid',
        example: 'Adventure Medical Kits UltraLight, self-built kits',
      },
      { type: 'Communication', example: 'Garmin inReach, BivyStick, ACR PLB' },
      {
        type: 'Emergency Shelter',
        example: 'SOL Emergency Bivy, Mylar blanket, Tarp',
      },
    ],
  },
];

export default essentialCategories;
