'use client';
// app/equipment/seasonal/summer/page.tsx
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// Layout Components
import Header from '../../../../components/layout/Header';
import Footer from '../../../../components/layout/Footer';
import HeroSection from '../../../../components/ui/HeroSection';
import SocialMediaSidebar from '../../../../components/ui/SocialMediaSidebar';
import ProgressIndicator from '../../../../components/ui/ProgressIndicator';

// Feature Components
import SeasonSelector from '../../../../components/equipment/seasonal/SeasonSelector';
import WeatherConditionCard from '../../../../components/equipment/seasonal/WeatherConditionCard';
import FeaturedGearGrid from '../../../../components/equipment/FeatureGearGrid';
import LayeringSystem from '../../../../components/equipment/seasonal/LayerindSystem';
import VideoTutorial from '../../../../components/equipment/seasonal/VideoTutorial';
import SeasonalPackingList from '../../../../components/equipment/seasonal/SeasonalPackingList';
import EquipmentComparison from '../../../../components/equipment/EquipmentComparison';
import SeasonalTrailMap from '../../../../components/equipment/seasonal/SeasonalTrailMap';
import GearMaintenanceTips from '../../../../components/equipment/seasonal/GearMaintenanceTips';
import TestimonialSlider from '../../../../components/equipment/seasonal/TestimonialSlider';
import SustainabilityFeature from '../../../../components/equipment/seasonal/SustainabilityFeatures';
import SeasonalTips from '../../../../components/equipment/seasonal/SeasonalTips';
import SeasonalEquipmentGuide from '../../../../components/equipment/seasonal/SeasonalEquipmentGuide';

// Data Imports
import seasons from '../../../data/equipments/seasonal/Season';
import adaptedSummerFeaturedGear from '@/src/app/data/equipments/seasonal/summer/adaptedSummerFeaturedGear';
import summerConditions from '../../../data/equipments/seasonal/summer/summerCondition';
import summerPackingList from '../../../data/equipments/seasonal/summer/summerPackingList';
import summerLayeringSystem from '../../../data/equipments/seasonal/summer/summerLayeringSystem';
import summerBootComparison from '../../../data/equipments/seasonal/summer/summerBootsComparison';
import summerTrails from '../../../data/equipments/seasonal/summer/summerTrails';
import summerTestimonials from '../../../data/equipments/seasonal/summer/summerTestimonials';
import summerMaintenanceTips from '../../../data/equipments/seasonal/summer/summerMaintenanceTips';
import summerSustainability from '../../../data/equipments/seasonal/summer/summerSustainability';
import summerSafetyTips from '../../../data/equipments/seasonal/summer/summerSafetyTips';
import summerEquipmentGuide from '../../../data/equipments/seasonal/summer/summerEquipmentGuide';

import videoThumbnail from '../../../../public/images/img6.jpg';
import alex from '../../../../public/images/guy1.jpg';

export default function SummerEquipment() {
  // Default to summer season initially
  const [activeSeason, setActiveSeason] = useState('summer');

  // Get the active season data
  const currentSeason =
    seasons.find((season) => season.id === activeSeason) || seasons[1]; // Assuming summer is index 1

  // Handle season change
  const handleSeasonChange = (seasonId: string) => {
    setActiveSeason(seasonId);
    console.log(`Changed to ${seasonId}`);
  };

  return (
    <>
      <SocialMediaSidebar />
      {/* Hero Section with Background Image */}
      <div className='relative h-screen' id='hero'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src={currentSeason.heroImage}
            alt={currentSeason.heroAlt}
            fill
            priority
            sizes='100vw'
            quality={100}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.7)',
            }}
          />
        </div>

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className='relative z-10 h-full'>
          {/* Progress Indicator */}
          <ProgressIndicator
            steps={[
              { id: 1, label: 'Season', active: true },
              { id: 2, label: 'Weather', active: false },
              { id: 3, label: 'Featured', active: false },
              { id: 4, label: 'Layering', active: false },
              { id: 5, label: 'Packing', active: false },
              { id: 6, label: 'Reviews', active: false },
            ]}
          />

          {/* Hero Section */}
          <HeroSection
            subtitle={currentSeason.subtitle}
            title={currentSeason.title}
            extraContent={
              <div className='mt-8 bg-black bg-opacity-50 p-6 rounded-lg max-w-2xl'>
                <p className='text-white text-lg mb-4'>
                  {currentSeason.description}
                </p>
                <div className='flex space-x-4'>
                  <button className='bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md transition duration-300'>
                    Find {currentSeason.name} Gear
                  </button>
                  <button className='bg-transparent hover:bg-white hover:bg-opacity-20 text-white border border-white font-medium py-3 px-6 rounded-md transition duration-300'>
                    {currentSeason.name} Safety Tips
                  </button>
                </div>
              </div>
            }
          />
        </div>
      </div>

      {/* Season Selector */}
      <div className='bg-gray-900 py-6 top-0 z-20 shadow-sm'>
        <div className='container mx-auto'>
          <SeasonSelector
            seasons={seasons}
            onSeasonChange={handleSeasonChange}
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className='bg-gray-900 text-white'>
        <div className='container mx-auto px-4 space-y-16 md:space-y-24 py-12 md:py-20'>
          {/* Section 1: Weather Conditions */}
          <section id='section-01' className='pt-8'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  {currentSeason.name.toUpperCase()} CONDITIONS
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Prepare for These Weather Challenges
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                {currentSeason.name} brings unique challenges that require
                specialized gear. Understand what you&apos;ll face and how to
                prepare.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {summerConditions.map((condition, index) => (
                <WeatherConditionCard
                  key={index}
                  title={condition.title}
                  icon={condition.icon}
                  description={condition.description}
                  essentialGear={condition.essentialGear}
                  dangerLevel={condition.dangerLevel}
                />
              ))}
            </div>
          </section>

          {/* Section 2: Featured Equipment */}
          <section id='section-02' className='pt-12 mt-4'>
            <FeaturedGearGrid
              title={`Essential ${currentSeason.name} Hiking Gear`}
              subtitle={`${currentSeason.name} Weather Specialists`}
              items={adaptedSummerFeaturedGear}
              showSeasonalTags={true}
            />

            <div className='mt-10 text-center'>
              <button className='inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition duration-300'>
                <span className='mr-2'>
                  Browse All {currentSeason.name} Gear
                </span>
                <ArrowRight className='h-5 w-5' />
              </button>
            </div>
          </section>

          {/* Section 3: Layering System */}
          <section
            id='section-03'
            className='pt-12 mt-4 bg-gray-800 p-10 rounded-xl'
          >
            <div className='mb-12'>
              <div className='flex items-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  {currentSeason.name.toUpperCase()} COMFORT
                </span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                The Art of Layering
              </h2>
              <p className='text-gray-400 max-w-3xl'>
                Master the layering system to stay comfortable in changing{' '}
                {currentSeason.name.toLowerCase()} conditions. The right
                combination lets you adjust to your activity level and the
                weather.
              </p>
            </div>

            <LayeringSystem layers={summerLayeringSystem} />

            <div className='mt-12 p-6 bg-gray-700 rounded-lg'>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Try Our Interactive Outfit Builder
              </h3>
              <p className='text-gray-300 mb-6'>
                Select your activity type, temperature range, and precipitation
                to get personalized layering recommendations.
              </p>
              <button className='inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300'>
                <span className='mr-2'>
                  Build Your {currentSeason.name} Outfit
                </span>
                <ArrowRight className='h-5 w-5' />
              </button>
            </div>
          </section>

          {/* Section 4: Video Tutorial */}
          <section id='section-04' className='pt-12 mt-4'>
            <VideoTutorial
              title={`How to Layer for ${currentSeason.name} Hiking`}
              description={`Our gear expert demonstrates the perfect layering strategy for ${currentSeason.name.toLowerCase()} hiking in temperatures from 70°F to 100°F.`}
              videoId='summer-layering-101'
              thumbnailUrl={videoThumbnail}
              duration='6:45'
              expert={{
                name: 'Alex Rivera',
                title: `${currentSeason.name} Hiking Specialist`,
                avatar: alex,
              }}
            />
          </section>

          {/* Section 5: Packing List */}
          <section id='section-05' className='pt-12 mt-4'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  BE PREPARED
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                {currentSeason.name} Hiking Checklist
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Don&apos;t forget any critical gear with our comprehensive{' '}
                {currentSeason.name.toLowerCase()} packing list, developed by
                experienced {currentSeason.name.toLowerCase()}-weather hikers.
              </p>
            </div>

            <SeasonalPackingList
              essentialItems={summerPackingList.essential}
              optionalItems={summerPackingList.optional}
              seasonName={currentSeason.name}
              downloadUrl={summerPackingList.downloadUrl}
            />
          </section>

          {/* Section 6: Boot Comparison */}
          <section id='section-06' className='pt-12 mt-8'>
            <div className='mb-8'>
              <div className='flex items-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  Compare Options
                </span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                {currentSeason.name} Boot Comparison
              </h2>
              <p className='text-gray-400 max-w-3xl'>
                Find the perfect {currentSeason.name.toLowerCase()} boots for
                your adventures with our side-by-side comparison of top-rated
                options.
              </p>
            </div>

            <EquipmentComparison
              category={`${currentSeason.name} Boots`}
              items={summerBootComparison}
              comparisonFields={[
                'temperature',
                'ventilation',
                'features',
                'bestFor',
                'waterproof',
                'durability',
              ]}
            />
          </section>

          {/* Section 7: Seasonal Trail Recommendations */}
          <section
            id='section-07'
            className='pt-12 mt-8 bg-gray-800 p-10 rounded-xl'
          >
            <div className='mb-8'>
              <div className='flex items-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  {currentSeason.name.toUpperCase()} DESTINATIONS
                </span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Top {currentSeason.name} Trails
              </h2>
              <p className='text-gray-400 max-w-3xl'>
                Discover spectacular {currentSeason.name.toLowerCase()} hiking
                destinations that showcase the season&apos;s beauty while being
                suitable for {currentSeason.name.toLowerCase()}-weather
                adventures.
              </p>
            </div>

            <div className='flex flex-col md:flex-row gap-8'>
              <div className='md:w-1/2'>
                <SeasonalTrailMap
                  mapImage={summerTrails.mapImage}
                  mapAlt={summerTrails.mapAlt}
                  regionName={summerTrails.regionName}
                />
              </div>
              <div className='md:w-1/2 space-y-6'>
                {summerTrails.trails.slice(0, 2).map((trail) => (
                  <div key={trail.id} className='bg-gray-700 p-6 rounded-lg'>
                    <h3 className='text-xl font-bold text-white'>
                      {trail.name}
                    </h3>
                    <p className='text-sm text-yellow-400 mb-2'>
                      {trail.location}
                    </p>
                    <div className='flex items-center text-gray-300 text-sm mb-3'>
                      <span className='mr-4'>{trail.distance}</span>
                      <span className='mr-4'>
                        {trail.elevationGain} elevation gain
                      </span>
                      <span>{trail.difficulty}</span>
                    </div>
                    <p className='text-gray-300 mb-4'>{trail.description}</p>
                    <div className='flex gap-2 mb-4'>
                      {trail.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`${tag.bgColor} ${tag.textColor} text-xs px-2 py-1 rounded`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <button className='text-yellow-400 hover:text-yellow-300 text-sm inline-flex items-center'>
                      View Trail Details <ArrowRight className='ml-1 h-4 w-4' />
                    </button>
                  </div>
                ))}

                <div className='mt-6'>
                  <button className='text-center w-full inline-block bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-md transition duration-300'>
                    Explore All {currentSeason.name} Trails
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Gear Maintenance Tips */}
          <section id='section-08' className='pt-12 mt-8'>
            <div className='mb-10'>
              <div className='flex items-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  GEAR CARE
                </span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                {currentSeason.name} Gear Maintenance
              </h2>
              <p className='text-gray-400 max-w-3xl'>
                Extend the life of your {currentSeason.name.toLowerCase()} gear
                with proper care and maintenance. These tips will help keep your
                equipment in top condition season after season.
              </p>
            </div>

            <GearMaintenanceTips tips={summerMaintenanceTips} />
          </section>

          {/* Section 9: Customer Testimonials */}
          <section id='section-09' className='pt-12 mt-8'>
            <div className='mb-8'>
              <div className='flex items-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  COMMUNITY VOICES
                </span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                What {currentSeason.name} Hikers Are Saying
              </h2>
            </div>

            <TestimonialSlider testimonials={summerTestimonials} />
          </section>

          {/* Section 10: Sustainability Feature */}
          <section
            id='section-10'
            className='pt-12 mt-8 bg-gradient-to-br from-green-900 to-blue-900 p-10 rounded-xl'
          >
            <SustainabilityFeature
              title={summerSustainability.title}
              description={summerSustainability.description}
              stats={summerSustainability.stats}
              brandsHighlighted={summerSustainability.brandsHighlighted}
              callToAction={summerSustainability.callToAction}
            />
          </section>

          {/* Section 11: Safety Tips */}
          <section id='section-11' className='pt-12 mt-8'>
            <SeasonalTips
              title={summerSafetyTips.title}
              description={summerSafetyTips.description}
              tips={summerSafetyTips.tips}
              linkText={summerSafetyTips.linkText}
              linkUrl='#'
            />
          </section>

          {/* Section 12: Seasonal Equipment Guide CTA */}
          <section className='pt-12 mt-8 mb-16'>
            <SeasonalEquipmentGuide
              title={summerEquipmentGuide.title}
              description={summerEquipmentGuide.description}
              coverImage={summerEquipmentGuide.coverImage}
              downloadUrl='#'
              features={summerEquipmentGuide.features}
            />
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
