// app/hiking-gear/components/BudgetTipsSection.tsx
import { BudgetTipsSectionProps } from '../../../types/gearType';

const BudgetTipsSection: React.FC<BudgetTipsSectionProps> = ({ tips }) => {
  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-xl'>
      <div className='p-6'>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h3 className='text-xl font-bold text-yellow-400 mb-4'>
              When to Buy
            </h3>
            <ul className='space-y-2'>
              {tips.whenToBuy.map((tip, i) => (
                <li key={i} className='flex items-start'>
                  <span className='text-yellow-400 mr-2'>•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>

            <h3 className='text-xl font-bold text-yellow-400 mt-6 mb-4'>
              Where to Shop
            </h3>
            <ul className='space-y-2'>
              {tips.whereToBuy.map((tip, i) => (
                <li key={i} className='flex items-start'>
                  <span className='text-yellow-400 mr-2'>•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-bold text-yellow-400 mb-4'>
              Best Value Brands
            </h3>
            <ul className='space-y-2'>
              {tips.bestValue.map((tip, i) => (
                <li key={i} className='flex items-start'>
                  <span className='text-yellow-400 mr-2'>•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>

            <h3 className='text-xl font-bold text-yellow-400 mt-6 mb-4'>
              Worth the Investment
            </h3>
            <ul className='space-y-2'>
              {tips.investIn.map((tip, i) => (
                <li key={i} className='flex items-start'>
                  <span className='text-yellow-400 mr-2'>•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-6 p-4 bg-gray-700 rounded-md'>
          <p className='text-gray-300 italic'>
            <span className='font-semibold text-yellow-400'>Pro Tip:</span>{' '}
            Quality used gear is often better than cheap new gear. Look for
            lightly used items from premium brands at significant discounts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetTipsSection;
