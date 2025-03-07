import { SeasonalSafetyTips } from '../../../../../types/seasonTypes';
import { ReactNode } from 'react';

// Icons will be created in the component that renders this data
const iconPlaceholder: ReactNode = null;

const winterSafetyTips: SeasonalSafetyTips = {
  title: 'Winter Hiking Safety',
  description:
    'Winter hiking brings unique challenges that require additional safety precautions. Follow these expert tips to stay safe in cold and snowy conditions.',
  tips: [
    {
      title: 'Plan for Shorter Days',
      content:
        'Winter daylight hours are limited. Start early and plan to finish before dark, or bring reliable lighting.',
      icon: iconPlaceholder, // Sun icon will be added in component
    },
    {
      title: 'Check Avalanche Conditions',
      content:
        'If hiking in mountainous areas, always check avalanche forecasts and avoid high-risk slopes.',
      icon: iconPlaceholder, // Map icon will be added in component
    },
    {
      title: 'Stay Hydrated',
      content:
        "It's easy to forget hydration in cold weather. Bring insulated water bottles to prevent freezing.",
      icon: iconPlaceholder, // Droplets icon will be added in component
    },
    {
      title: 'Pack Emergency Shelter',
      content:
        "Always carry emergency shelter like a bivy sack in case you're forced to stop due to weather or injury.",
      icon: iconPlaceholder, // Cloud icon will be added in component
    },
    {
      title: 'Monitor for Hypothermia',
      content:
        'Learn to recognize the signs of hypothermia and frostbite in yourself and companions.',
      icon: iconPlaceholder, // Thermometer icon will be added in component
    },
    {
      title: 'Share Your Plan',
      content:
        'Always tell someone your route and expected return time. Consider carrying a satellite messenger.',
      icon: iconPlaceholder, // Snowflake icon will be added in component
    },
  ],
  linkText: 'Download Our Complete Winter Safety Guide',
  linkUrl: '/guides/winter-safety',
};

export default winterSafetyTips;
