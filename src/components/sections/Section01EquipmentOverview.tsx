// components/sections/Section01EquipmentOverview.tsx
// import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Shield } from 'lucide-react';

// Define types for the category cards
interface CategoryFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkUrl: string;
}

// Helper component for category feature cards
const CategoryFeatureCard = ({
  icon,
  title,
  description,
  linkUrl,
}: CategoryFeatureCardProps) => {
  return (
    <div className='bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-200'>
      <div className='mb-4'>{icon}</div>
      <h3 className='text-xl font-bold mb-3'>{title}</h3>
      <p className='text-gray-400 mb-4'>{description}</p>
      <Link
        href={linkUrl}
        className='inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 text-sm group'
      >
        <span className='mr-2'>Learn More</span>
        <ArrowRight className='h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200' />
      </Link>
    </div>
  );
};

export default function Section01EquipmentOverview() {
  return (
    <div>
      <div className='text-center mb-16'>
        <div className='flex items-center justify-center mb-4'>
          <div className='h-px w-12 bg-yellow-400 mr-4'></div>
          <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
            GEAR ESSENTIALS
          </span>
          <div className='h-px w-12 bg-yellow-400 ml-4'></div>
        </div>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
          Equipment For Every Adventure
        </h2>
        <p className='text-gray-400 max-w-3xl mx-auto'>
          Quality gear can make the difference between an enjoyable adventure
          and a miserable experience. Discover our expert-recommended equipment
          for hikers of all levels.
        </p>
      </div>

      {/* Main Categories */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
        <CategoryFeatureCard
          icon={<Clock className='h-8 w-8 text-yellow-400' />}
          title='Seasonal Gear'
          description='Equipment recommendations tailored to spring, summer, fall, and winter conditions.'
          linkUrl='/equipment/seasonal'
        />

        <CategoryFeatureCard
          icon={<MapPin className='h-8 w-8 text-yellow-400' />}
          title='Terrain-Specific'
          description='Specialized gear for mountains, forests, deserts, and coastal trails.'
          linkUrl='/equipment/terrain'
        />

        <CategoryFeatureCard
          icon={<Shield className='h-8 w-8 text-yellow-400' />}
          title='Experience Levels'
          description='Curated equipment lists for beginners, intermediate, and advanced hikers.'
          linkUrl='/equipment/experience-level'
        />
      </div>

      {/* Statistics Section */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center'>
        <div className='bg-gray-800 p-6 rounded-lg'>
          <div className='text-3xl font-bold text-yellow-400 mb-2'>50+</div>
          <p className='text-gray-300'>Equipment Categories</p>
        </div>
        <div className='bg-gray-800 p-6 rounded-lg'>
          <div className='text-3xl font-bold text-yellow-400 mb-2'>245</div>
          <p className='text-gray-300'>Reviewed Products</p>
        </div>
        <div className='bg-gray-800 p-6 rounded-lg'>
          <div className='text-3xl font-bold text-yellow-400 mb-2'>15k+</div>
          <p className='text-gray-300'>Trail Miles Tested</p>
        </div>
        <div className='bg-gray-800 p-6 rounded-lg'>
          <div className='text-3xl font-bold text-yellow-400 mb-2'>24/7</div>
          <p className='text-gray-300'>Expert Support</p>
        </div>
      </div>
    </div>
  );
}
