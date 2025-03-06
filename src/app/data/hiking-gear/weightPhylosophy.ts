// app/hiking-gear/data/weightPhilosophies.ts
import { WeightPhilosophy } from '../../../types/gearType';

const weightPhilosophies: WeightPhilosophy[] = [
  {
    name: 'Traditional',
    baseWeight: '30+ pounds',
    focus: 'Comfort and durability',
    pros: [
      'More comfort features',
      'Highly durable gear',
      'Often less expensive',
      'Forgiving of mistakes',
      'Better for extreme conditions',
    ],
    cons: [
      'Heavier load can cause fatigue',
      'Limited daily mileage',
      'Greater impact on joints',
      'More difficult on technical terrain',
      'Requires more effort on climbs',
    ],
  },
  {
    name: 'Lightweight',
    baseWeight: '20-30 pounds',
    focus: 'Balance of comfort and weight',
    pros: [
      'Reduced fatigue',
      'More miles possible per day',
      'Easier on body',
      'Moderate comfort',
      'Reasonable cost-to-weight ratio',
    ],
    cons: [
      'Some comfort sacrifice',
      'Higher gear costs than traditional',
      'More care required with gear',
      'Less margin for mistakes',
      'May need replacement sooner',
    ],
  },
  {
    name: 'Ultralight',
    baseWeight: 'Under 10-15 pounds',
    focus: 'Maximum efficiency and minimal weight',
    pros: [
      'Significantly reduced fatigue',
      'More miles with less effort',
      'Easier stream crossings',
      'Faster pace possible',
      'Less strain on body',
    ],
    cons: [
      'Minimal comfort features',
      'Premium price for lightweight gear',
      'Requires experience and skill',
      'Less durability in gear',
      'Smaller margin for error',
    ],
  },
];

export default weightPhilosophies;
