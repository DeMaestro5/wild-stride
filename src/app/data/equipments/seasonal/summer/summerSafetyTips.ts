import { SeasonalTipsData } from '../../../../../types/summerTypes';

const summerSafetyTips: SeasonalTipsData = {
  title: 'Summer Hiking Safety Tips',
  description:
    'Hot weather hiking presents unique challenges. Follow these essential safety tips to stay safe and comfortable on summer trails.',
  tips: [
    {
      id: 'summer-safety-01',
      title: 'Hydrate Strategically',
      description:
        'Drink small amounts frequently rather than large amounts infrequently. Aim for about 1 liter of water per hour in hot conditions. Add electrolytes to water for hikes over 2 hours.',
      icon: 'droplet',
      priority: 'critical',
    },
    {
      id: 'summer-safety-02',
      title: 'Time Your Hike Wisely',
      description:
        'Start very early in the morning to avoid peak heat. Consider a "siesta" schedule: hike early morning and evening with a long break during the hottest part of the day (11am-3pm).',
      icon: 'clock',
      priority: 'high',
    },
    {
      id: 'summer-safety-03',
      title: 'Know the Signs of Heat Illness',
      description:
        'Watch for symptoms like excessive sweating, dizziness, nausea, headache, rapid heartbeat, and confusion. These can indicate heat exhaustion or heat stroke, which can be life-threatening.',
      icon: 'thermometer',
      priority: 'critical',
    },
    {
      id: 'summer-safety-04',
      title: 'Apply Sunscreen Properly',
      description:
        "Apply broad-spectrum SPF 30+ sunscreen 15 minutes before sun exposure. Reapply every 2 hours, or more frequently if sweating heavily. Don't forget easily missed areas like ears, neck, and lips.",
      icon: 'sun',
      priority: 'high',
    },
    {
      id: 'summer-safety-05',
      title: 'Check Weather for Thunderstorms',
      description:
        'Summer afternoons often bring thunderstorms, especially in mountains. Check detailed forecasts and plan to be below treeline by noon in areas prone to afternoon storms.',
      icon: 'cloud-lightning',
      priority: 'critical',
    },
    {
      id: 'summer-safety-06',
      title: 'Protect Against Insects',
      description:
        'Use EPA-approved insect repellents containing DEET, picaridin, or oil of lemon eucalyptus. In tick-prone areas, wear long pants, treat clothing with permethrin, and check for ticks thoroughly after hiking.',
      icon: 'shield',
      priority: 'high',
    },
    {
      id: 'summer-safety-07',
      title: 'Acclimate to Altitude',
      description:
        'If hiking at high elevations, allow time to acclimate before attempting strenuous hikes. Increase elevation gradually and stay extra-hydrated as altitude intensifies effects of sun and heat.',
      icon: 'mountain',
      priority: 'medium',
    },
    {
      id: 'summer-safety-08',
      title: 'Cool Down Methods',
      description:
        'Know how to cool down quickly if overheating: seek shade, wet bandanas or clothing, loosen clothing, and place cold water on pulse points (wrists, neck, groin, behind knees).',
      icon: 'wind',
      priority: 'high',
    },
  ],
  linkText: 'Download Complete Summer Safety Guide',
  linkUrl: '#',
};

export default summerSafetyTips;
