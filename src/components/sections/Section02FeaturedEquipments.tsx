// components/sections/Section02FeaturedEquipment.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Define featured product type
interface FeaturedProduct {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  url: string;
}

// Featured Product Card component
const FeaturedProductCard = ({ product }: { product: FeaturedProduct }) => {
  return (
    <div className='group'>
      {/* Product Image */}
      <div className='relative h-64 rounded-lg overflow-hidden mb-4'>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60'></div>
        <div className='absolute bottom-3 left-3'>
          <span className='text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded-full font-medium'>
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className='flex justify-between items-start'>
        <div>
          <h3 className='font-bold text-white group-hover:text-yellow-400 transition-colors duration-200'>
            {product.name}
          </h3>
          <span className='text-gray-400 text-sm'>{product.category}</span>
        </div>
        <span className='text-yellow-400 font-medium'>{product.price}</span>
      </div>
    </div>
  );
};

export default function Section02FeaturedEquipment() {
  // Mock featured products data
  const featuredProducts: FeaturedProduct[] = [
    {
      id: 1,
      name: 'UltraLight Backpack',
      category: 'Backpacks',
      price: '$129.99',
      image: '/images/backpack-featured.jpg',
      url: '/equipment/backpacks/ultralight',
    },
    {
      id: 2,
      name: 'All-Weather Hiking Boots',
      category: 'Footwear',
      price: '$159.99',
      image: '/images/boots-featured.jpg',
      url: '/equipment/footwear/all-weather',
    },
    {
      id: 3,
      name: 'Trail Navigator GPS',
      category: 'Technology',
      price: '$249.99',
      image: '/images/gps-featured.jpg',
      url: '/equipment/technology/gps',
    },
    {
      id: 4,
      name: 'Mountain Shell Jacket',
      category: 'Clothing',
      price: '$179.99',
      image: '/images/jacket-featured.jpg',
      url: '/equipment/clothing/shell-jacket',
    },
  ];

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-12'>
        <div>
          <div className='flex items-center mb-4'>
            <div className='h-px w-16 bg-yellow-400 mr-4'></div>
            <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
              Editor&apos;s Picks
            </span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold'>Featured Equipment</h2>
        </div>

        <Link
          href='/equipment/featured'
          className='inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 mt-4 md:mt-0 group'
        >
          <span className='mr-2'>View All Featured Gear</span>
          <ArrowRight className='h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200' />
        </Link>
      </div>

      {/* Featured Products Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {featuredProducts.map((product) => (
          <Link key={product.id} href={product.url}>
            <FeaturedProductCard product={product} />
          </Link>
        ))}
      </div>

      {/* New Arrivals Banner */}
      <div className='mt-16 relative rounded-lg overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/images/new-arrivals-bg.jpg'
            alt='New gear arrivals'
            fill
            className='object-cover'
            style={{ filter: 'brightness(0.4)' }}
          />
        </div>

        <div className='relative z-10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-6 md:mb-0'>
            <span className='inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-medium mb-3'>
              NEW ARRIVALS
            </span>
            <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>
              Spring 2023 Collection Now Available
            </h3>
            <p className='text-gray-300'>
              Lightweight, versatile gear for your spring adventures
            </p>
          </div>

          <Link
            href='/equipment/new-arrivals'
            className='bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-medium transition-colors duration-200'
          >
            Shop New Arrivals
          </Link>
        </div>
      </div>
    </div>
  );
}
