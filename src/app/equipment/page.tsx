'use client';
// app/equipment/page.tsx
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from '../../components/ui/HeroSection';
import ContentCard from '../../components/ui/ContentCard';
import SocialMediaSidebar from '../../components/ui/SocialMediaSidebar';
import ProgressIndicator from '../../components/ui/ProgressIndicator';
// Fixed imports for section components
import Section01EquipmentOverview from '../../components/sections/Section01EquipmentOverview';
// Fix the import to use the correct component
import Section03EquipmentGuide from '../../components/sections/Section03EquipmentGuide.';
import EquipmentComparison from '../../components/equipment/EquipmentComparison';
import EquipmentReview from '../../components/equipment/EquipmentReview';
// Fix the import name to match the actual component
import FeaturedGearGrid from '../../components/equipment/FeatureGearItem';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
// Fix image imports to use the correct relative path
import heroImage from '../../public/images/img4.jpg';
import hikingImage from '../../public/images/img5.jpg';
import clothingImage from '../../public/images/img6.jpg';
import backpackImage from '../../public/images/backpack01.jpg';
import trekkingPole from '../../public/images/trekingPole.jpg';
import jacket from '../../public/images/jacket.jpg';
import tent from '../../public/images/tent.jpg';
import waterfilter from '../../public/images/waterfilter.jpg';
import footwear from '../../public/images/footwear.jpg';
import hikingBoot from '../../public/images/hikingboot.jpg';
import reviewer from '../../public/images/reviewer.jpg';

// Mock data for equipment page
// In a real app, this would come from a CMS or API

// Featured gear data
const featuredGear = [
  {
    id: 1,
    name: 'Ultimate Trekking Pole Set',
    description:
      'Lightweight, collapsible trekking poles with cork handles and carbide tips for maximum grip and stability on any terrain.',
    category: 'Accessories',
    image: trekkingPole,
    url: '/equipment/accessories/trekking-poles',
    featured: true,
  },
  {
    id: 2,
    name: 'Lightweight Down Jacket',
    description:
      '800-fill down insulation in an ultralight package that compresses to the size of a water bottle.',
    category: 'Clothing',
    image: jacket,
    url: '/equipment/clothing/down-jacket',
  },
  {
    id: 3,
    name: 'Trail Runner Pro 5',
    description:
      'The perfect balance of grip, cushioning, and protection for technical trail running.',
    category: 'Footwear',
    image: footwear,
    url: '/equipment/footwear/trail-runners',
  },
  {
    id: 4,
    name: 'Ultralight Tent 2P',
    description: 'A spacious two-person tent weighing just under 2 pounds.',
    category: 'Shelter',
    image: tent,
    url: '/equipment/shelter/ultralight-tent',
  },
  {
    id: 5,
    name: 'Water Filtration System',
    description:
      'Compact filter that removes 99.999% of bacteria and protozoa from any water source.',
    category: 'Water',
    image: waterfilter,
    url: '/equipment/water/filtration',
  },
];

// Backpack comparison data with correct typing for durability
const backpackComparison = [
  {
    id: 1,
    name: 'Trail Seeker 45',
    price: '$129.99',
    rating: 4.5,
    weightKg: 1.2,
    features: [
      'Hydration Compatible',
      'Rain Cover Included',
      'Multiple Access Points',
    ],
    bestFor: 'Weekend Trips',
    waterproof: true,
    durability: 'High' as const,
  },
  {
    id: 2,
    name: 'Ultralight Pack 30',
    price: '$89.99',
    rating: 4.0,
    weightKg: 0.8,
    features: ['Minimalist Design', 'Removable Frame', 'Ripstop Nylon'],
    bestFor: 'Day Hiking',
    waterproof: false,
    durability: 'Medium' as const,
  },
  {
    id: 3,
    name: 'Expedition 65',
    price: '$199.99',
    rating: 4.8,
    weightKg: 2.1,
    features: [
      'Adjustable Suspension',
      'Bear Canister Compatible',
      'Reinforced Bottom',
    ],
    bestFor: 'Multi-day Treks',
    waterproof: true,
    durability: 'High' as const,
  },
];

// Make sure we're exporting as a page component in the app directory
export default function Equipment() {
  return (
    <>
      {/* Main content without any layout wrappers, since RootLayout will handle that */}
      {/* Hero Section with Background Image */}
      <div className='relative h-screen' id='hero'>
        {/* Background Image - Only for hero section */}
        <div className='absolute inset-0 z-0'>
          <Image
            src={heroImage}
            alt='Mountain equipment background'
            fill
            priority
            sizes='100vw'
            quality={100}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.5)',
            }}
          />
        </div>

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className='relative z-10 h-full'>
          {/* Social Media Sidebar */}
          <SocialMediaSidebar />

          {/* Progress Indicator */}
          <ProgressIndicator
            steps={[
              { id: 1, label: 'Start', active: true },
              { id: 2, label: 'Overview', active: false },
              { id: 3, label: 'Featured', active: false },
              { id: 4, label: 'Categories', active: false },
              { id: 5, label: 'Reviews', active: false },
            ]}
          />

          {/* Hero Section */}
          <HeroSection
            subtitle='ESSENTIAL GEAR'
            title='Equipment For Every Adventure'
          />
        </div>
      </div>

      {/* Content Sections - On gray background - REDUCED SPACING HERE */}
      <div className='bg-gray-900 text-white'>
        <div className='container mx-auto px-4 space-y-12 md:space-y-20 py-2 md:py-16'>
          {/* Section 1: Equipment Overview */}
          <section id='section-01' className='pt-8'>
            <Section01EquipmentOverview />
          </section>

          {/* Section 2: Featured Equipment */}
          <section id='section-02' className='pt-8'>
            <FeaturedGearGrid
              title='Top Hiking Gear for 2023'
              subtitle='Expert Recommendations'
              items={featuredGear}
            />
          </section>

          {/* Section 3: Equipment Categories */}
          <section id='section-03' className='pt-8'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  EQUIPMENT CATEGORIES
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Essential Gear Categories
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Explore our hand-picked selection of top-quality hiking and
                outdoor equipment designed for performance and durability.
              </p>
            </div>

            {/* Equipment Category Cards - Reduced spacing between cards */}
            <div className='space-y-16'>
              <ContentCard
                number='01'
                subtitle='FOOTWEAR'
                title='Find The Perfect Hiking Boots'
                description='The right footwear can make or break your hiking experience. From lightweight trail runners to heavy-duty mountaineering boots, discover the perfect pair for your adventure. Our guide helps you choose based on terrain, weather conditions, and your hiking style.'
                buttonText='Explore Footwear'
                buttonUrl='/equipment/footwear'
                imageSrc={hikingImage}
                imageAlt='Hiking boots on a mountain trail'
                imagePosition='right'
              />

              <ContentCard
                number='02'
                subtitle='CLOTHING'
                title='Dress For The Elements'
                description="Proper hiking attire goes beyond comfort—it's about safety and performance. Learn about layering techniques, moisture-wicking fabrics, and weather-appropriate choices for year-round adventures. From base layers to outer shells, we've got you covered."
                buttonText='Discover Clothing Options'
                buttonUrl='/equipment/clothing'
                imageSrc={clothingImage}
                imageAlt='Hiker wearing proper hiking clothing'
                imagePosition='left'
              />

              <ContentCard
                number='03'
                subtitle='BACKPACKS'
                title='Carry Your Essentials With Ease'
                description="Whether you're planning a day hike or a multi-day expedition, choosing the right backpack is crucial. We break down capacity needs, fit considerations, and essential features to look for in your next hiking pack, ensuring comfort on the trail."
                buttonText='View Backpack Guide'
                buttonUrl='/equipment/backpacks'
                imageSrc={backpackImage}
                imageAlt='Hiking backpack with gear'
                imagePosition='right'
              />
            </div>
          </section>

          {/* Section 4: Backpack Comparison */}
          <section id='section-04' className='pt-8'>
            <div className='mb-8'>
              <div className='flex items-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  Compare Options
                </span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Backpack Comparison
              </h2>
              <p className='text-gray-400 max-w-3xl'>
                Not sure which backpack is right for your adventure? Compare our
                top recommendations side by side to find your perfect match.
              </p>
            </div>

            <EquipmentComparison
              category='Backpacks'
              items={backpackComparison}
            />

            <div className='mt-8 text-center'>
              <Link
                href='/equipment/compare'
                className='inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 group'
              >
                <span className='mr-2'>View More Equipment Comparisons</span>
                <ArrowRight className='h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200' />
              </Link>
            </div>
          </section>

          {/* Section 5: Featured Equipment Review */}
          <section id='section-05' className='pt-8'>
            <div className='mb-8'>
              <div className='flex items-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  Expert Opinion
                </span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Featured Review
              </h2>
              <p className='text-gray-400 max-w-3xl'>
                Our team tests equipment in real-world conditions to provide you
                with honest, comprehensive reviews.
              </p>
            </div>

            <EquipmentReview
              productName='Trail Master Hiking Boots'
              productImage={hikingBoot}
              category='Footwear'
              price='$159.99'
              rating={4.5}
              reviewDate='February 15, 2023'
              reviewText="After testing these boots across multiple terrain types and weather conditions over three months, I've found them to be exceptional performers for serious hikers. The Trail Master boots offer outstanding support and protection without feeling overly heavy or restrictive. The waterproofing held up admirably during stream crossings and rainy day hikes, keeping my feet completely dry. Break-in time was minimal compared to other hiking boots in this class, with only minor discomfort during the first few miles. The Vibram soles provided excellent traction on both wet and dry surfaces, including loose gravel and muddy trails. The lacing system allows for a customized fit, with the ability to adjust tension in different zones. Durability appears to be excellent so far, with no signs of premature wear or damage to the uppers or soles after approximately 120 miles of use on varied terrain. These boots are on the heavier side compared to trail runners or lightweight hiking shoes, which is the tradeoff for their superior support and protection. While they do feature breathable membranes, they can get warm during hot weather hikes, so they're best suited for moderate temperatures or cooler conditions."
              prosList={[
                'Excellent ankle support on uneven terrain',
                'Truly waterproof in wet conditions',
                'Grippy Vibram soles provide confidence on slippery surfaces',
                'Minimal break-in period required',
              ]}
              consList={[
                'On the heavier side compared to trail runners',
                'Not as breathable in hot weather',
                'Price point is higher than entry-level options',
              ]}
              verdict='The Trail Master Hiking Boots are a worthwhile investment for serious hikers who prioritize durability, protection, and all-weather performance. While not the lightest or most breathable option, they excel in stability and water protection, making them ideal for multi-day treks in varied conditions.'
              reviewerName='Alex Johnson'
              reviewerImage={reviewer}
              reviewerTitle='Senior Gear Tester'
            />

            <div className='mt-8 text-center'>
              <Link
                href='/equipment/reviews'
                className='inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 group'
              >
                <span className='mr-2'>View All Equipment Reviews</span>
                <ArrowRight className='h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200' />
              </Link>
            </div>
          </section>

          {/* Section 6: Equipment Guide CTA */}
          <section className='pt-8'>
            <Section03EquipmentGuide />
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
