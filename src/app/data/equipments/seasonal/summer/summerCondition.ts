import { WeatherCondition } from '../../../../../types/summerTypes';

const summerConditions: WeatherCondition[] = [
  {
    title: 'Intense Heat',
    icon: 'sun',
    description:
      'Temperatures can soar above 90°F (32°C), increasing the risk of heat exhaustion and dehydration. Proper hydration and sun protection are essential.',
    essentialGear: [
      'Wide-brimmed hat',
      'Moisture-wicking clothing',
      'High SPF sunscreen',
      'Extra water capacity',
    ],
    dangerLevel: 'high',
  },
  {
    title: 'Sudden Thunderstorms',
    icon: 'cloud-lightning',
    description:
      'Summer afternoons often bring rapid thunderstorm development, especially in mountain environments. Lightning is a serious hazard at higher elevations.',
    essentialGear: [
      'Lightweight rain jacket',
      'Weather radio',
      'Quick-dry clothing',
      'Waterproof pack cover',
    ],
    dangerLevel: 'high',
  },
  {
    title: 'High UV Exposure',
    icon: 'sun',
    description:
      'Summer means longer days and more direct sunlight, increasing exposure to harmful UV rays, especially at higher elevations where UV intensity increases.',
    essentialGear: [
      'UPF-rated clothing',
      'Sunglasses with UV protection',
      'Lip balm with SPF',
      'Portable shade (umbrella/tarp)',
    ],
    dangerLevel: 'medium',
  },
  {
    title: 'Insect Activity',
    icon: 'bug',
    description:
      'Mosquitoes, ticks, and other biting insects are abundant in summer months. Some carry diseases like Lyme disease or West Nile virus.',
    essentialGear: [
      'Insect repellent',
      'Permethrin-treated clothing',
      'Head net',
      'Long-sleeved shirts and pants',
    ],
    dangerLevel: 'medium',
  },
];

export default summerConditions;
