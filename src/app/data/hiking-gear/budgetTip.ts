// app/hiking-gear/data/budgetTips.ts
import { BudgetTipsData } from '../../../types/gearType';

const budgetTips: BudgetTipsData = {
  whenToBuy: [
    'End-of-season sales (up to 50-70% off)',
    'Holiday sales events (Black Friday, etc.)',
    'REI member sales and garage sales',
    'Off-season for specific gear types',
  ],
  whereToBuy: [
    'Outlet stores (REI Outlet, Steep & Cheap)',
    'Used gear shops (GearTrade, REI Used)',
    'Local gear swaps and Facebook groups',
    'Discount retailers (Sierra, TJ Maxx outdoor section)',
  ],
  bestValue: [
    'Decathlon house brands',
    'REI Co-op brand gear',
    'Previous year models of name brands',
    'Amazon Basics (for non-critical items)',
  ],
  investIn: [
    'Footwear (prevents injuries and blisters)',
    'Rain jacket (critical safety item)',
    'Backpack (if carrying significant weight)',
    'Sleeping bag (for overnight comfort)',
  ],
};

export default budgetTips;
