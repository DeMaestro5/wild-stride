// app/hiking-gear/components/SeasonalGearCard.tsx
import Image from 'next/image';
import { SeasonalGearCardProps } from '../../types/gearType';

const SeasonalGearCard: React.FC<SeasonalGearCardProps> = ({
  season,
  image,
  color,
  icon,
  items,
}) => {
  return (
    <div className='h-full'>
      <div
        className={`bg-gradient-to-br ${color} rounded-lg overflow-hidden shadow-lg h-full`}
      >
        <div className='relative h-40'>
          <Image
            src={image}
            alt={`${season} hiking conditions`}
            fill
            sizes='(max-width: 768px) 100vw, 25vw'
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
            <div className='text-center'>
              <div className='bg-white bg-opacity-20 rounded-full p-3 mx-auto mb-2 backdrop-blur-sm'>
                {icon}
              </div>
              <h3 className='text-2xl font-bold tracking-wide'>{season}</h3>
            </div>
          </div>
        </div>

        <div className='p-5'>
          <ul className='space-y-2'>
            {items.map((item, i) => (
              <li key={i} className='flex items-start'>
                <span className='text-white mr-2'>•</span>
                <span className='text-gray-100'>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SeasonalGearCard;
