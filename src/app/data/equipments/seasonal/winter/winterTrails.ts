// data/seasonal/winter/trails.ts
import { StaticImageData } from 'next/image';

// These would be actual imports in your project
import winterTrailsMapImage from '../../../../../public/images/img2.jpg';

export interface TrailTag {
  name: string;
  bgColor: string;
  textColor: string;
}

export interface Trail {
  id: number;
  name: string;
  location: string;
  distance: string;
  elevationGain: string;
  difficulty: string;
  description: string;
  tags: TrailTag[];
  imageUrl: string;
  detailUrl: string;
}

export interface TrailsData {
  mapImage: StaticImageData;
  mapAlt: string;
  regionName: string;
  trails: Trail[];
  allTrailsUrl: string;
}

const winterTrails: TrailsData = {
  mapImage: winterTrailsMapImage,
  mapAlt: 'Map of top winter hiking trails',
  regionName: 'Rocky Mountains',
  allTrailsUrl: '/trails/seasonal/winter',
  trails: [
    {
      id: 1,
      name: 'Emerald Lake Trail',
      location: 'Rocky Mountain National Park, CO',
      distance: '3.6 miles round trip',
      elevationGain: '650 ft',
      difficulty: 'Beginner-friendly',
      description:
        'This popular snowshoe trail offers spectacular winter scenery with frozen lakes and snow-covered peaks. The trail is well-marked and suitable for beginners with proper winter gear.',
      tags: [
        {
          name: 'Snowshoeing',
          bgColor: 'bg-blue-900',
          textColor: 'text-blue-200',
        },
        {
          name: 'Winter Hiking',
          bgColor: 'bg-indigo-900',
          textColor: 'text-indigo-200',
        },
        {
          name: 'Photography',
          bgColor: 'bg-purple-900',
          textColor: 'text-purple-200',
        },
      ],
      imageUrl: '/images/seasonal/winter/emerald-lake-trail.jpg',
      detailUrl: '/trails/emerald-lake',
    },
    {
      id: 2,
      name: 'Artist Point',
      location: 'Mount Baker, WA',
      distance: '1.2 miles round trip',
      elevationGain: '200 ft',
      difficulty: 'All levels',
      description:
        'A short but spectacular snowshoe trail with panoramic views of Mount Shuksan and Mount Baker. Perfect for beginners and photographers seeking winter wonderland shots.',
      tags: [
        {
          name: 'Snowshoeing',
          bgColor: 'bg-blue-900',
          textColor: 'text-blue-200',
        },
        {
          name: 'Family-friendly',
          bgColor: 'bg-green-900',
          textColor: 'text-green-200',
        },
        {
          name: 'Views',
          bgColor: 'bg-purple-900',
          textColor: 'text-purple-200',
        },
      ],
      imageUrl: '/images/seasonal/winter/artist-point-trail.jpg',
      detailUrl: '/trails/artist-point',
    },
    {
      id: 3,
      name: 'Flagstaff Mountain Trail',
      location: 'Boulder, CO',
      distance: '4.2 miles round trip',
      elevationGain: '950 ft',
      difficulty: 'Intermediate',
      description:
        'A beautiful winter hike close to town with stunning views of the Front Range and Boulder. The trail is usually packed down and microspikes are recommended for icy sections.',
      tags: [
        {
          name: 'Winter Hiking',
          bgColor: 'bg-indigo-900',
          textColor: 'text-indigo-200',
        },
        {
          name: 'City Views',
          bgColor: 'bg-sky-900',
          textColor: 'text-sky-200',
        },
        {
          name: 'Accessible',
          bgColor: 'bg-teal-900',
          textColor: 'text-teal-200',
        },
      ],
      imageUrl: '/images/seasonal/winter/flagstaff-mountain-trail.jpg',
      detailUrl: '/trails/flagstaff-mountain',
    },
  ],
};

export default winterTrails;
