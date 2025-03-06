// app/hiking-gear/components/WeightPhilosophyCard.tsx
import { Check } from 'lucide-react';
import { WeightPhilosophyCardProps } from '../../types/gearType';

const WeightPhilosophyCard: React.FC<WeightPhilosophyCardProps> = ({
  name,
  baseWeight,
  focus,
  pros,
  cons,
}) => {
  return (
    <div className='bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full'>
      <div className='bg-gray-700 px-6 py-4'>
        <h3 className='text-xl font-bold'>{name}</h3>
        <p className='text-yellow-400 font-medium text-sm'>
          Base Weight: {baseWeight}
        </p>
      </div>

      <div className='p-6'>
        <div className='mb-4'>
          <h4 className='text-yellow-400 font-semibold mb-1'>Focus:</h4>
          <p>{focus}</p>
        </div>

        <div className='mb-4'>
          <h4 className='text-yellow-400 font-semibold mb-2'>Advantages:</h4>
          <ul className='space-y-1'>
            {pros.map((pro, i) => (
              <li key={i} className='flex items-start'>
                <Check className='h-4 w-4 text-green-400 flex-shrink-0 mt-1 mr-2' />
                <span className='text-sm'>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='text-yellow-400 font-semibold mb-2'>Challenges:</h4>
          <ul className='space-y-1'>
            {cons.map((con, i) => (
              <li key={i} className='flex items-start'>
                <span className='text-red-400 mr-2'>•</span>
                <span className='text-sm'>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeightPhilosophyCard;
