// app/hiking-gear/components/MaintenanceTipsSection.tsx
import { Check } from 'lucide-react';
import { MaintenanceTipsSectionProps } from '../../../types/gearType';

const MaintenanceTipsSection: React.FC<MaintenanceTipsSectionProps> = ({
  tips,
}) => {
  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-xl'>
      <div className='p-6'>
        <div className='grid md:grid-cols-2 gap-8'>
          {tips.map((category, i) => (
            <div key={i}>
              <h3 className='text-xl font-bold text-yellow-400 mb-4'>
                {category.category}
              </h3>
              <ul className='space-y-3'>
                {category.tips.map((tip, j) => (
                  <li key={j} className='flex items-start'>
                    <Check className='h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5 mr-2' />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-8 p-4 bg-gray-700 rounded-md'>
          <h4 className='font-bold mb-2'>Creating a Maintenance Schedule</h4>
          <p className='text-gray-300'>
            Set calendar reminders for seasonal gear maintenance: inspect and
            clean gear after trips, perform deep cleaning seasonally, and check
            for repairs needed before storage. Track your gear&apos;s age and
            performance to anticipate replacement needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceTipsSection;
