// app/hiking-gear/components/GearCategoryCard.tsx
import Image from 'next/image';
import { Check } from 'lucide-react';
import { GearCategoryCardProps } from '../../types/gearType';

const GearCategoryCard: React.FC<GearCategoryCardProps> = ({
  title,
  description,
  image,
  keyFeatures,
  recommendations,
  index,
}) => {
  // Alternate card layout based on index
  const isEven = index % 2 === 0;

  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-xl'>
      <div className='md:grid md:grid-cols-3'>
        {/* Image section */}
        <div
          className={`relative h-64 md:h-auto ${
            isEven ? 'md:col-span-1' : 'md:col-span-1 md:order-last'
          }`}
        >
          <Image
            src={image}
            alt={`${title} hiking gear`}
            fill
            sizes='(max-width: 768px) 100vw, 33vw'
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end'>
            <h3 className='text-2xl font-bold p-6'>{title}</h3>
          </div>
        </div>

        {/* Content section */}
        <div className='p-6 md:col-span-2'>
          <p className='text-gray-300 mb-6'>{description}</p>

          <div className='mb-6'>
            <h4 className='text-yellow-400 font-semibold mb-3'>
              Key Features to Look For:
            </h4>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              {keyFeatures.map((feature, i) => (
                <li key={i} className='flex items-start'>
                  <Check className='h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5 mr-2' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-yellow-400 font-semibold mb-3'>
              Recommended Options:
            </h4>
            {recommendations.map((rec, i) => (
              <div key={i} className='mb-2 bg-gray-700 p-3 rounded'>
                <span className='font-medium block'>{rec.type}</span>
                <span className='text-sm text-gray-400'>
                  Examples: {rec.example}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearCategoryCard;
