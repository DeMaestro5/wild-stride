// components/ui/FeaturedGearGrid.tsx
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Define Featured Gear Item type
export interface FeaturedGearItem {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string | StaticImageData;
  url: string;
  featured?: boolean;
}

interface FeaturedGearGridProps {
  title: string;
  subtitle: string;
  items: FeaturedGearItem[];
}

export default function FeaturedGearGrid({
  title,
  subtitle,
  items,
}: FeaturedGearGridProps) {
  // Find the featured item (if any)
  const featuredItem = items.find((item) => item.featured);

  // Other items (excluding the featured one)
  const regularItems = items.filter((item) => !item.featured);

  return (
    <section className='py-12'>
      <div className='text-center mb-12'>
        <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
          {subtitle}
        </span>
        <h2 className='text-3xl md:text-4xl font-bold mt-2'>{title}</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Featured Item (large) */}
        {featuredItem && (
          <div className='lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-lg shadow-lg'>
            <div className='absolute inset-0'>
              <Image
                src={featuredItem.image}
                alt={featuredItem.name}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-110'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent'></div>
            </div>

            <div className='relative h-full flex flex-col justify-end p-6 z-10'>
              <div className='mb-4'>
                <span className='bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-medium'>
                  {featuredItem.category}
                </span>
                <span className='ml-2 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium'>
                  Featured
                </span>
              </div>

              <h3 className='text-2xl font-bold text-white mb-3'>
                {featuredItem.name}
              </h3>
              <p className='text-gray-300 mb-4'>{featuredItem.description}</p>

              <Link
                href={featuredItem.url}
                className='inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 group'
              >
                <span className='mr-2'>View Details</span>
                <ArrowRight className='h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200' />
              </Link>
            </div>
          </div>
        )}

        {/* Regular Items */}
        {regularItems.map((item) => (
          <div
            key={item.id}
            className='relative group overflow-hidden rounded-lg shadow-lg h-72'
          >
            <div className='absolute inset-0'>
              <Image
                src={item.image}
                alt={item.name}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-110'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent'></div>
            </div>

            <div className='relative h-full flex flex-col justify-end p-6 z-10'>
              <div className='mb-3'>
                <span className='bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium'>
                  {item.category}
                </span>
              </div>

              <h3 className='text-xl font-bold text-white mb-2'>{item.name}</h3>
              <p className='text-gray-300 text-sm mb-3 line-clamp-2'>
                {item.description}
              </p>

              <Link
                href={item.url}
                className='inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 text-sm group'
              >
                <span className='mr-2'>Learn More</span>
                <ArrowRight className='h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Usage example:
/*
const featuredGear = [
  {
    id: 1,
    name: "Ultimate Trekking Pole Set",
    description: "Lightweight, collapsible trekking poles with cork handles and carbide tips for maximum grip and stability on any terrain.",
    category: "Accessories",
    image: "/images/trekking-poles.jpg",
    url: "/equipment/accessories/trekking-poles",
    featured: true
  },
  {
    id: 2,
    name: "Lightweight Down Jacket",
    description: "800-fill down insulation in an ultralight package that compresses to the size of a water bottle.",
    category: "Clothing",
    image: "/images/down-jacket.jpg",
    url: "/equipment/clothing/down-jacket"
  },
  {
    id: 3,
    name: "Trail Runner Pro 5",
    description: "The perfect balance of grip, cushioning, and protection for technical trail running.",
    category: "Footwear",
    image: "/images/trail-runners.jpg",
    url: "/equipment/footwear/trail-runners"
  },
  {
    id: 4,
    name: "Ultralight Tent 2P",
    description: "A spacious two-person tent weighing just under 2 pounds.",
    category: "Shelter",
    image: "/images/tent.jpg",
    url: "/equipment/shelter/ultralight-tent"
  },
  {
    id: 5,
    name: "Water Filtration System",
    description: "Compact filter that removes 99.999% of bacteria and protozoa from any water source.",
    category: "Water",
    image: "/images/water-filter.jpg",
    url: "/equipment/water/filtration"
  }
];

<FeaturedGearGrid 
  title="Top Hiking Gear for 2023" 
  subtitle="Expert Recommendations" 
  items={featuredGear} 
/>
*/
