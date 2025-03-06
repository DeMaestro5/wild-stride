'use client';
// app/hiking-gear/page.tsx

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from '../../components/ui/HeroSection';
import SocialMediaSidebar from '../../components/ui/SocialMediaSidebar';
import ProgressIndicator from '../../components/ui/ProgressIndicator';
import Image from 'next/image';
import Link from 'next/link';

// Import components
import GearCategoryCard from '../../components/hiking-gear/gearCategoryCard';
import SeasonalGearCard from '../../components/hiking-gear/seasonalGearCard';
import TripTypeCard from '../../components/hiking-gear/tripTypeCard';
import WeightPhilosophyCard from '../../components/hiking-gear/weightPhylosophyCard';
import BudgetTipsSection from '../../components/hiking-gear/sections/budgetTipSection';
import MaintenanceTipsSection from '../../components/hiking-gear/sections/maintenanceTipSection';
import GearChecklist from '../../components/hiking-gear/gearChecklist';

// Import data
import essentialCategories from '../data/hiking-gear/essentialCategory';
import seasonalGear from '../data/hiking-gear/seasonalGear';
import tripTypeGear from '../data/hiking-gear/tripTypeGear';
import weightPhilosophies from '../data/hiking-gear/weightPhylosophy';
import budgetTips from '../data/hiking-gear/budgetTip';
import maintenanceTips from '../data/hiking-gear/maintenanceTip';

// Import hero image
import heroImage from '../../public/images/img4.jpg';

export default function HikingGear() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className='relative h-screen' id='hero'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src={heroImage}
            alt='Hiking gear and equipment background'
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
              { id: 1, label: 'Essentials', active: true },
              { id: 2, label: 'Seasonal', active: false },
              { id: 3, label: 'Trip Types', active: false },
              { id: 4, label: 'Checklist', active: false },
              { id: 5, label: 'Maintenance', active: false },
            ]}
          />

          {/* Hero Section */}
          <HeroSection
            subtitle='GEAR UP FOR ADVENTURE'
            title='Essential Hiking Equipment Guide'
          />
        </div>
      </div>

      {/* Content Sections - On gray background */}
      <div className='bg-gray-900 text-white'>
        <div className='container mx-auto px-4 space-y-16 md:space-y-24 py-16'>
          {/* Section 1: Introduction */}
          <section id='section-01' className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  HIKING EQUIPMENT
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                The Right Gear Makes All The Difference
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Quality hiking equipment enhances safety, comfort, and enjoyment
                on the trail, helping you handle anything nature throws your
                way.
              </p>
            </div>

            <div className='prose prose-lg prose-invert max-w-none'>
              <p>
                Whether you&apos;re planning a short day hike or a multi-week
                backpacking adventure, having the right gear is essential. Good
                equipment not only makes hiking more comfortable but can be
                crucial for safety in changing weather conditions or unexpected
                situations.
              </p>

              <p>
                This guide covers essential hiking equipment categories and
                helps you understand:
              </p>

              <ul>
                <li>Core equipment every hiker needs</li>
                <li>How to adapt your gear for different seasons</li>
                <li>Equipment needs based on trip duration</li>
                <li>Weight considerations and philosophies</li>
                <li>Budget-friendly options and maintenance tips</li>
              </ul>

              <p>
                Remember that the best gear is what works for <em>your</em>{' '}
                specific needs, body type, and hiking style. Start with the
                essentials, test thoroughly on shorter trips, and gradually
                build your kit as your experience grows.
              </p>
            </div>
          </section>

          {/* Section 2: Essential Gear Categories */}
          <section id='section-02'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  CORE EQUIPMENT
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Essential Hiking Gear Categories
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                These key equipment categories form the foundation of every
                hiker&apos;s gear collection, ensuring safety, comfort, and
                preparedness on the trail.
              </p>
            </div>

            <div className='space-y-10'>
              {essentialCategories.map((category, index) => (
                <GearCategoryCard
                  key={category.id}
                  title={category.title}
                  description={category.description}
                  image={category.image}
                  keyFeatures={category.keyFeatures}
                  recommendations={category.recommendations}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Section 3: Seasonal Gear */}
          <section id='section-03'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  YEAR-ROUND HIKING
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Seasonal Gear Adaptations
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Each season presents unique challenges and opportunities for
                hikers. Adapt your gear accordingly to stay safe and comfortable
                throughout the year.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {seasonalGear.map((season) => (
                <SeasonalGearCard
                  key={season.season}
                  season={season.season}
                  image={season.image}
                  color={season.color}
                  icon={season.icon}
                  items={season.items}
                />
              ))}
            </div>
          </section>

          {/* Section 4: Trip Length Gear */}
          <section id='section-04'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  TRIP PLANNING
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Gear By Trip Duration
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Your equipment needs grow with the length of your adventure.
                Here&apos;s what to pack based on how long you&apos;ll be out on
                the trail.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-6'>
              {tripTypeGear.map((trip) => (
                <TripTypeCard
                  key={trip.type}
                  type={trip.type}
                  icon={trip.icon}
                  essentials={trip.essentials}
                />
              ))}
            </div>
          </section>

          {/* Section 5: Gear Checklist */}
          <section id='section-05'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  BE PREPARED
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Complete Hiking Gear Checklist
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Use this interactive checklist to ensure you have everything
                needed for a safe and enjoyable hike.
              </p>
            </div>

            <GearChecklist />
          </section>

          {/* Section 6: Weight Philosophies */}
          <section id='section-06'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  PACK WEIGHT
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Weight Philosophy Comparison
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                From traditional to ultralight, every approach to backpacking
                weight has its merits. Find the style that matches your hiking
                goals and preferences.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-6'>
              {weightPhilosophies.map((philosophy) => (
                <WeightPhilosophyCard
                  key={philosophy.name}
                  name={philosophy.name}
                  baseWeight={philosophy.baseWeight}
                  focus={philosophy.focus}
                  pros={philosophy.pros}
                  cons={philosophy.cons}
                />
              ))}
            </div>
          </section>

          {/* Section 7: Budget Tips */}
          <section id='section-07'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  SAVING MONEY
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Hiking Gear on a Budget
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Quality hiking gear doesn&apos;t have to break the bank. Learn
                strategies for building your kit without overspending.
              </p>
            </div>

            <BudgetTipsSection tips={budgetTips} />
          </section>

          {/* Section 8: Maintenance Tips */}
          <section id='section-08'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  GEAR CARE
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Maintaining Your Hiking Equipment
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Proper maintenance extends gear lifespan, saves money, and
                ensures reliability when you need it most.
              </p>
            </div>

            <MaintenanceTipsSection tips={maintenanceTips} />
          </section>

          {/* Section 9: Equipment Shop CTA */}
          <section id='section-09' className='max-w-4xl mx-auto'>
            <div className='bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 md:p-12 shadow-lg text-center'>
              <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                Ready to Gear Up?
              </h3>
              <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
                Visit our gear shop for curated selections of high-quality
                hiking equipment, expert recommendations, and exclusive deals
                for our community members.
              </p>
              <Link
                href='/shop/hiking-gear'
                className='inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors duration-200'
              >
                Shop Hiking Gear
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
