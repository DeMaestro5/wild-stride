// app/hiking-gear/components/TripTypeCard.tsx
import { TripTypeCardProps } from '../../types/gearType';

const TripTypeCard: React.FC<TripTypeCardProps> = ({
  type,
  icon,
  essentials,
}) => {
  return (
    <div className='bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full'>
      <div className='p-6'>
        <div className='flex items-center mb-4'>
          <span className='text-4xl mr-3'>{icon}</span>
          <h3 className='text-xl font-bold'>{type}</h3>
        </div>

        <ul className='space-y-2'>
          {essentials.map((item, i) => (
            <li key={i} className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TripTypeCard;
