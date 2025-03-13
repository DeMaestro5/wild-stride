// app/data/equipments/terrain/mountain/mountainConservation.ts
import {
  ConservationFeatureData,
  ConservationStat,
  ConservationInitiative,
} from '../../../../../types/terraineTypes';

const stats: ConservationStat[] = [
  {
    value: '70%',
    label: "of the world's freshwater comes from mountain watersheds",
    color: 'bg-blue-500',
  },
  {
    value: '25%',
    label: 'of terrestrial biodiversity is found in mountain ecosystems',
    color: 'bg-green-500',
  },
  {
    value: '3x',
    label: 'faster warming rate in mountain regions compared to global average',
    color: 'bg-red-500',
  },
  {
    value: '50+',
    label: 'million people live in mountain regions worldwide',
    color: 'bg-yellow-500',
  },
];

const initiatives: ConservationInitiative[] = [
  {
    title: 'Trail Restoration',
    description:
      'Supporting volunteer efforts to repair eroded trails and prevent further degradation.',
    icon: 'path',
    actionUrl: '/conservation/trail-restoration',
  },
  {
    title: 'Alpine Ecosystem Protection',
    description:
      'Preserving fragile high-altitude environments through education and stewardship.',
    icon: 'flower',
    actionUrl: '/conservation/alpine-protection',
  },
  {
    title: 'Sustainable Gear',
    description:
      'Promoting equipment made with environmentally responsible materials and manufacturing.',
    icon: 'recycle',
    actionUrl: '/conservation/sustainable-gear',
  },
  {
    title: 'Leave No Trace',
    description:
      'Teaching and practicing minimal impact principles for mountain recreation.',
    icon: 'footprint',
    actionUrl: '/conservation/leave-no-trace',
  },
];

const mountainConservation: ConservationFeatureData = {
  title: 'Protecting Mountain Ecosystems',
  description:
    'Mountain regions host diverse ecosystems that are particularly vulnerable to environmental impacts. As hikers, we have a responsibility to minimize our footprint and support conservation efforts.',
  stats,
  initiatives,
  callToAction: {
    title: 'Join Our Conservation Partners',
    description:
      'Support organizations working to protect mountain environments for future generations.',
    buttonText: 'Get Involved',
    buttonUrl: '/conservation/partners',
  },
};

export default mountainConservation;
