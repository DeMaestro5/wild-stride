import { TrailsData } from '../../../../../types/summerTypes';

const summerTrails: TrailsData = {
  mapImage: '/images/summer_trails_map.jpg',
  mapAlt: 'Map of top summer hiking trails',
  regionName: 'Western National Parks',
  trails: [
    {
      id: 'summer-trail-01',
      name: 'Emerald Lake Trail',
      location: 'Rocky Mountain National Park, Colorado',
      distance: '3.5 miles round trip',
      elevationGain: '650 ft',
      difficulty: 'Moderate',
      description:
        'This popular summer trail takes you past three stunning alpine lakes surrounded by rugged mountain peaks. The trail offers excellent wildflower viewing in July and August.',
      imageUrl: '/images/emerald_lake_trail.jpg',
      tags: [
        {
          name: 'Alpine Lakes',
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-800',
        },
        {
          name: 'Wildflowers',
          bgColor: 'bg-purple-100',
          textColor: 'text-purple-800',
        },
        {
          name: 'Family-Friendly',
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
        },
      ],
      detailUrl: '#',
    },
    {
      id: 'summer-trail-02',
      name: "Angel's Landing",
      location: 'Zion National Park, Utah',
      distance: '5.4 miles round trip',
      elevationGain: '1,488 ft',
      difficulty: 'Strenuous',
      description:
        'One of the most famous and thrilling hikes in the national park system. The trail climbs to a narrow ridge with stunning views of Zion Canyon. Start very early to avoid summer heat and crowds.',
      imageUrl: '/images/angels_landing.jpg',
      tags: [
        {
          name: 'Permit Required',
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
        },
        {
          name: 'Panoramic Views',
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
        },
        {
          name: 'Strenuous',
          bgColor: 'bg-orange-100',
          textColor: 'text-orange-800',
        },
      ],
      detailUrl: '#',
    },
    {
      id: 'summer-trail-03',
      name: 'Mist Trail to Vernal Falls',
      location: 'Yosemite National Park, California',
      distance: '3 miles round trip',
      elevationGain: '1,000 ft',
      difficulty: 'Moderate',
      description:
        'This iconic Yosemite trail follows the Merced River and brings you up close to spectacular Vernal Falls. The mist from the waterfall provides welcome cooling on hot summer days.',
      imageUrl: '/images/mist_trail.jpg',
      tags: [
        {
          name: 'Waterfall',
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-800',
        },
        {
          name: 'Refreshing',
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
        },
        {
          name: 'Popular',
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
        },
      ],
      detailUrl: '#',
    },
    {
      id: 'summer-trail-04',
      name: 'Highline Trail',
      location: 'Glacier National Park, Montana',
      distance: '11.8 miles point-to-point',
      elevationGain: '1,950 ft',
      difficulty: 'Moderate to Strenuous',
      description:
        'One of the premier trails in Glacier National Park, offering spectacular views, abundant wildlife sightings, and wildflower meadows. The trail follows the Continental Divide with minimal elevation change.',
      imageUrl: '/images/highline_trail.jpg',
      tags: [
        {
          name: 'Wildlife',
          bgColor: 'bg-brown-100',
          textColor: 'text-brown-800',
        },
        {
          name: 'Wildflowers',
          bgColor: 'bg-purple-100',
          textColor: 'text-purple-800',
        },
        {
          name: 'Long Hike',
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-800',
        },
      ],
      detailUrl: '#',
    },
  ],
  allTrailsUrl: '#',
};

export default summerTrails;
