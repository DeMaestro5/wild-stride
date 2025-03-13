import { Testimonial } from '../../../../../types/seasonTypes';
import tman1 from '../../../../../public/images/tman1.jpg';
import tman2 from '../../../../../public/images/tman2.jpg';
import twoman1 from '../../../../../public/images/twoman1.jpg';
import twoman2 from '../../../../../public/images/twoman2.jpg';
import twoman3 from '../../../../../public/images/twoman3.jpg';

const winterTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah K.',
    location: 'Colorado',
    image: twoman1,
    quote:
      "The winter layering guide saved my Yellowstone trip! I stayed perfectly warm in -15°F conditions following Wild Stride's recommendations.",
    rating: 5,
    productReference: 'Winter Layering System',
  },
  {
    id: 2,
    name: 'Michael T.',
    location: 'Alaska',
    image: tman1,
    quote:
      "As someone who hikes year-round in Alaska, I can say Wild Stride's winter gear selections are spot-on. The Arctic Explorer boots kept my feet toasty even on multi-day trips.",
    rating: 5,
    productReference: 'Arctic Explorer 300 Boots',
  },
  {
    id: 3,
    name: 'Jennifer L.',
    location: 'Vermont',
    image: twoman2,
    quote:
      'I was skeptical about winter hiking until I found this guide. The snowshoe recommendations and winter safety tips gave me confidence to explore snowy trails safely.',
    rating: 4.5,
    productReference: 'Mountain Trail Snowshoes',
  },
  {
    id: 4,
    name: 'David R.',
    location: 'Washington',
    image: tman2,
    quote:
      "The Extreme Conditions Down Parka is worth every penny. I've tested it in blizzard conditions at Mt. Rainier and stayed completely comfortable the entire time.",
    rating: 5,
    productReference: 'Extreme Conditions Down Parka',
  },
  {
    id: 5,
    name: 'Michelle P.',
    location: 'Minnesota',
    image: twoman3,
    quote:
      'Living in Minnesota means serious winter conditions. The Alpine Pro Insulated Gloves have been a game-changer for my winter photography outings. My hands stay warm while I can still operate my camera.',
    rating: 4.5,
    productReference: 'Alpine Pro Insulated Gloves',
  },
];

export default winterTestimonials;
