// src/app/data/equipments/seasonal/Season.ts

// Import needed for type compatibility with the Season interface
import { Season } from '../../../../types/seasonTypes';
import winterHero2 from '../../../../public/images/winterHero2.jpg';
import springHero from '../../../../public/images/springHero.jpg';
import summerHero from '../../../../public/images/summerHero.jpg';
import fallHero from '../../../../public/images/fallHero.jpg';

// Create string-based representation for icons
const seasons: Season[] = [
  {
    id: 'winter',
    name: 'Winter',
    icon: '❄️', // Using string instead of JSX
    active: true,
    heroImage: winterHero2,
    heroAlt: 'Winter mountain landscape with snow-covered peaks',
    subtitle: 'SEASONAL GEAR GUIDE',
    title: 'Winter Adventure Equipment',
    description:
      "Prepare for cold-weather adventures with our expert-selected winter gear. From insulation to traction, we've got everything you need to stay safe and comfortable in snow and ice.",
  },
  {
    id: 'spring',
    name: 'Spring',
    icon: '🍀', // Using string instead of JSX
    active: false,
    heroImage: springHero,
    heroAlt: 'Mountain trail with wildflowers and flowing streams',
    subtitle: 'SEASONAL GEAR GUIDE',
    title: 'Spring Hiking Equipment',
    description:
      'Navigate changing weather conditions with versatile spring hiking gear. From rain protection to layers for fluctuating temperatures, find what you need for mud season adventures.',
  },
  {
    id: 'summer',
    name: 'Summer',
    icon: '🌞', // Using string instead of JSX
    active: false,
    heroImage: summerHero,
    heroAlt: 'Sunny alpine meadow with mountain views',
    subtitle: 'SEASONAL GEAR GUIDE',
    title: 'Summer Hiking Essentials',
    description:
      'Stay cool, protected, and hydrated on summer trails with our lightweight gear selection. Perfect for alpine adventures, desert hikes, and forest excursions in warm weather.',
  },
  {
    id: 'fall',
    name: 'Fall',
    icon: '💨', // Using string instead of JSX
    active: false,
    heroImage: fallHero,
    heroAlt: 'Trail through colorful autumn foliage',
    subtitle: 'SEASONAL GEAR GUIDE',
    title: 'Fall Hiking Equipment',
    description:
      'Experience the magic of autumn trails with gear designed for crisp days and cool nights. From layering pieces to visibility items for shorter daylight hours.',
  },
];

export default seasons;
