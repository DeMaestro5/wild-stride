// app/data/equipments/terrain/mountain/mountainTrails.ts
import {
  TerrainTrailsData,
  Trail,
  TrailTag,
} from '../../../../../types/terraineTypes';
import mountainsMapImage from '../../../../../public/images/img1.jpg';

const trailTags: Record<string, TrailTag> = {
  alpineViews: {
    name: 'Alpine Views',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
  },
  wildflowers: {
    name: 'Wildflowers',
    bgColor: 'bg-purple-500',
    textColor: 'text-white',
  },
  technical: {
    name: 'Technical',
    bgColor: 'bg-red-500',
    textColor: 'text-white',
  },
  lakeViews: {
    name: 'Lake Views',
    bgColor: 'bg-cyan-600',
    textColor: 'text-white',
  },
  wildlife: {
    name: 'Wildlife',
    bgColor: 'bg-green-600',
    textColor: 'text-white',
  },
  rockScrambling: {
    name: 'Rock Scrambling',
    bgColor: 'bg-orange-500',
    textColor: 'text-white',
  },
  glacierViews: {
    name: 'Glacier Views',
    bgColor: 'bg-blue-400',
    textColor: 'text-black',
  },
  weatherChanges: {
    name: 'Weather Changes',
    bgColor: 'bg-gray-600',
    textColor: 'text-white',
  },
  fallFoliage: {
    name: 'Fall Foliage',
    bgColor: 'bg-amber-600',
    textColor: 'text-white',
  },
  scenicViews: {
    name: 'Scenic Views',
    bgColor: 'bg-indigo-500',
    textColor: 'text-white',
  },
  familyFriendly: {
    name: 'Family Friendly',
    bgColor: 'bg-green-500',
    textColor: 'text-white',
  },
  giantTrees: {
    name: 'Giant Trees',
    bgColor: 'bg-green-700',
    textColor: 'text-white',
  },
  mountainViews: {
    name: 'Mountain Views',
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
  },
};

const trails: Trail[] = [
  {
    id: 'alpine-ridge',
    name: 'Alpine Ridge Trail',
    location: 'Rocky Mountain National Park, Colorado',
    distance: '8.4 miles',
    elevationGain: '3,200 ft',
    difficulty: 'Difficult',
    description:
      'A challenging trail offering spectacular alpine meadows, rocky ridges, and panoramic views of surrounding peaks. This trail reaches a maximum elevation of 12,400 feet.',
    bestSeasons: ['Summer', 'Early Fall'],
    tags: [trailTags.alpineViews, trailTags.wildflowers, trailTags.technical],
    essentialGear: [
      'Mountain boots with ankle support',
      'Trekking poles',
      'Wind/rain shell',
      'Sun protection',
      'Extra water',
      'Emergency shelter',
    ],
    detailUrl: '/trails/mountain/alpine-ridge',
    imageUrl: '/images/alpine-ridge-trail.jpg',
  },
  {
    id: 'granite-peak',
    name: 'Granite Peak Loop',
    location: 'Grand Teton National Park, Wyoming',
    distance: '6.8 miles',
    elevationGain: '2,800 ft',
    difficulty: 'Moderate to Difficult',
    description:
      'This loop trail traverses varied terrain including dense forests, boulder fields, and high mountain meadows with views of pristine alpine lakes and rugged granite formations.',
    bestSeasons: ['Summer', 'Early Fall'],
    tags: [trailTags.lakeViews, trailTags.wildlife, trailTags.rockScrambling],
    essentialGear: [
      'Grippy mountain boots',
      'Layered clothing',
      'Bear spray',
      'Navigation tools',
      'First aid kit',
    ],
    detailUrl: '/trails/mountain/granite-peak',
    imageUrl: '/images/granite-peak-loop.jpg',
  },
  {
    id: 'cloud-walker',
    name: 'Cloud Walker Trail',
    location: 'Mount Rainier National Park, Washington',
    distance: '9.2 miles',
    elevationGain: '3,600 ft',
    difficulty: 'Difficult',
    description:
      'This signature trail climbs through subalpine forests into stunning high-elevation meadows with expansive views of Mount Rainier and surrounding glaciers.',
    bestSeasons: ['Summer'],
    tags: [
      trailTags.glacierViews,
      trailTags.wildflowers,
      trailTags.weatherChanges,
    ],
    essentialGear: [
      'Waterproof hiking boots',
      'Rain gear',
      'Layers for temperature changes',
      'Sun protection',
      'Navigation tools',
    ],
    detailUrl: '/trails/mountain/cloud-walker',
    imageUrl: '/images/cloud-walker-trail.jpg',
  },
  {
    id: 'eagle-point',
    name: 'Eagle Point Trail',
    location: 'White Mountains, New Hampshire',
    distance: '5.4 miles',
    elevationGain: '1,800 ft',
    difficulty: 'Moderate',
    description:
      'A scenic trail through hardwood forests that ascends to exposed granite summits offering spectacular views of the Presidential Range and surrounding valleys.',
    bestSeasons: ['Summer', 'Fall'],
    tags: [
      trailTags.fallFoliage,
      trailTags.scenicViews,
      trailTags.familyFriendly,
    ],
    essentialGear: [
      'Hiking boots',
      'Weather-appropriate layers',
      'Water',
      'Bug spray (summer)',
      'Trail map',
    ],
    detailUrl: '/trails/mountain/eagle-point',
    imageUrl: '/images/eagle-point-trail.jpg',
  },
  {
    id: 'sierra-heights',
    name: 'Sierra Heights Trail',
    location: 'Sequoia National Park, California',
    distance: '7.5 miles',
    elevationGain: '2,400 ft',
    difficulty: 'Moderate to Difficult',
    description:
      'This trail climbs through ancient sequoia groves before ascending to high mountain meadows and granite overlooks with panoramic Sierra Nevada views.',
    bestSeasons: ['Summer', 'Early Fall'],
    tags: [trailTags.giantTrees, trailTags.mountainViews, trailTags.wildlife],
    essentialGear: [
      'Sturdy hiking boots',
      'Plenty of water',
      'Sun protection',
      'Navigation tools',
      'Bear canister (if overnight)',
    ],
    detailUrl: '/trails/mountain/sierra-heights',
    imageUrl: '/images/sierra-heights-trail.jpg',
  },
];

const mountainTrails: TerrainTrailsData = {
  mapImage: mountainsMapImage,
  mapAlt: 'Map of top mountain hiking trails in the Rocky Mountains',
  regionName: 'Rocky Mountains',
  allTrailsUrl: '/trails/mountain',
  trails,
};

export default mountainTrails;
