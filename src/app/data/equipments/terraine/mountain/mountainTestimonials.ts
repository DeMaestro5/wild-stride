// app/data/equipments/terrain/mountain/mountainTestimonials.ts
import { Testimonial } from '../../../../../types/terraineTypes';
import testimonialAvatar1 from '../../../../../public/images/img2.jpg';
import testimonialAvatar2 from '../../../../../public/images/img2.jpg';
import testimonialAvatar3 from '../../../../../public/images/img2.jpg';
import testimonialAvatar4 from '../../../../../public/images/img2.jpg';
import testimonialAvatar5 from '../../../../../public/images/img2.jpg';

const mountainTestimonials: Testimonial[] = [
  {
    id: 'testimonial1',
    name: 'Sarah J.',
    location: 'Colorado',
    avatar: testimonialAvatar1,
    rating: 5,
    text: 'The Summit GTX boots recommended on this site were a game-changer for my Rocky Mountain adventures. After years of sore ankles and wet feet, I finally found footwear that can handle everything from loose scree to unexpected stream crossings. Worth every penny!',
    purchasedItems: ['Summit GTX Hiking Boot', 'Alpine Shield 3L Jacket'],
    hikingExperience: 'Intermediate',
    hikeLocation: 'Rocky Mountain National Park',
    date: 'January 15, 2025',
  },
  {
    id: 'testimonial2',
    name: 'Michael T.',
    location: 'Washington',
    avatar: testimonialAvatar2,
    rating: 5,
    text: "As a guide in the Cascades, I put my gear through extreme conditions. The Alpine Trek Carbon Poles have survived 200+ miles of rugged terrain, saved my knees on steep descents, and helped clients maintain balance on challenging sections. They're lightweight yet incredibly durable.",
    purchasedItems: ['Alpine Trek Carbon Poles', 'Summit Master 45 Pack'],
    hikingExperience: 'Expert',
    hikeLocation: 'North Cascades',
    date: 'December 3, 2024',
  },
  {
    id: 'testimonial3',
    name: 'Elena R.',
    location: 'California',
    avatar: testimonialAvatar3,
    rating: 4,
    text: 'The layering system recommended for mountain hiking kept me comfortable through rapidly changing Sierra weather. From sunny exposures to sudden afternoon thunderstorms, I was prepared with versatile pieces that worked well together. My only suggestion would be more color options!',
    purchasedItems: ['Alpine Shield 3L Jacket', 'Mountain Trek Merino Sock'],
    hikingExperience: 'Intermediate',
    hikeLocation: 'Sierra Nevada',
    date: 'February 10, 2025',
  },
  {
    id: 'testimonial4',
    name: 'James L.',
    location: 'New Hampshire',
    avatar: testimonialAvatar4,
    rating: 5,
    text: 'The Mountain Navigator GPS Watch literally saved our trip in the White Mountains when unexpected fog rolled in. The accurate altimeter and detailed topo maps helped us navigate safely back to the trailhead. The battery life is impressive too - lasted our entire 3-day trek.',
    purchasedItems: ['Mountain Navigator GPS Watch', 'Summit GTX Hiking Boot'],
    hikingExperience: 'Advanced',
    hikeLocation: 'White Mountains',
    date: 'January 28, 2025',
  },
  {
    id: 'testimonial5',
    name: 'Nadia K.',
    location: 'Montana',
    avatar: testimonialAvatar5,
    rating: 5,
    text: 'Following the mountain packing list ensured I was prepared for my first serious alpine hike. The Summit Master pack distributed weight perfectly for the steep climbs in Glacier National Park, and the recommended boot/sock combination prevented any blisters despite covering 40+ miles.',
    purchasedItems: ['Summit Master 45 Pack', 'Mountain Trek Merino Sock'],
    hikingExperience: 'Beginner',
    hikeLocation: 'Glacier National Park',
    date: 'February 5, 2025',
  },
];

export default mountainTestimonials;
