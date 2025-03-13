'use client';
// app/equipment/terrain/page.tsx
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Types
import { TerrainType } from '../../../types/terraineTypes';

// Layout Components
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import HeroSection from '../../../components/ui/HeroSection';
import SocialMediaSidebar from '../../../components/ui/SocialMediaSidebar';
import ProgressIndicator from '../../../components/ui/ProgressIndicator';

// Feature Components
import TerrainSelector from '../../../components/equipment/terraine/TerraineSelector';
import ChallengeCard from '../../../components/equipment/terraine/ChallengeCard';
import FeaturedGearGrid from '../../../components/equipment/FeatureGearGrid';
import TerrainGearTips from '../../../components/equipment/terraine/TerraineGearTips';
import VideoTutorial from '../../../components/equipment/terraine/VideoTutorial';
import TerrainPackingList from '../../../components/equipment/terraine/TerrainePackingList';
import EquipmentComparison from '../../../components/equipment/EquipmentComparison';
import TerrainTrailMap from '../../../components/equipment/terraine/TerraineTrailMap';
import GearMaintenanceTips from '../../../components/equipment/terraine/GearMaintenanceTips';
import TestimonialSlider from '../../../components/equipment/terraine/TestimonialSlider';
import ConservationFeature from '../../../components/equipment/terraine/ConservationFeature';
import TerrainSafetyTips from '../../../components/equipment/terraine/TerraineSafetyTips';
import TerrainEquipmentGuide from '../../../components/equipment/terraine/TerraineEquipmentsGuide';

// Data Imports
import terrainTypes from '../../data/equipments/terraine/terraine';
import mountainFeaturedGear from '../../data/equipments/terraine/mountain/mountainFeaturedGear';
import mountainChallenges from '../../data/equipments/terraine/mountain/mountainChallenges';
import mountainPackingList from '../../data/equipments/terraine/mountain/mountainPackingList';
import mountainGearTips from '../../data/equipments/terraine/mountain/mountainGearTips';
import mountainBootComparison from '../../data/equipments/terraine/mountain/mountainBootComparison';
import mountainTrails from '../../data/equipments/terraine/mountain/mountainTrails';
import mountainTestimonials from '../../data/equipments/terraine/mountain/mountainTestimonials';
import mountainMaintenanceTips from '../../data/equipments/terraine/mountain/mountainMaintenanceTips';
import mountainConservation from '../../data/equipments/terraine/mountain/mountainConservation';
import mountainSafetyTips from '../../data/equipments/terraine/mountain/mountainSafetyTips';
import mountainEquipmentGuide from '../../data/equipments/terraine/mountain/mountainEquipmentGuide';

import videoThumbnail from '../../../public/images/img6.jpg';
import expert from '../../../public/images/guy1.jpg';

export default function TerrainEquipment() {
  // Default to mountain terrain initially
  const [activeTerrain, setActiveTerrain] = useState<string>('mountain');

  // Get the active terrain data (currently hardcoded to mountain)
  const currentTerrain: TerrainType =
    terrainTypes.find((terrain) => terrain.id === activeTerrain) ||
    terrainTypes[0];

  // Handle terrain change
  const handleTerrainChange = (terrainId: string) => {
    setActiveTerrain(terrainId);
    // In a real app, this would trigger loading the appropriate terrain data
    console.log(`Changed to ${terrainId}`);
  };

  // In a real application, you would likely fetch data based on the selected terrain
  // For now, we're using mountain data for demonstration
  const videoTutorialData = {
    title: `How to Navigate ${currentTerrain.name} Terrain Safely`,
    description: `Our terrain expert demonstrates essential navigation and safety techniques for ${currentTerrain.name.toLowerCase()} hiking.`,
    videoId: 'mountain-navigation-101',
    thumbnailUrl: videoThumbnail,
    duration: '9:45',
    expert: {
      name: 'Michael Johnson',
      title: `${currentTerrain.name} Hiking Expert`,
      avatar: expert,
    },
  };

  return (
    <>
      <SocialMediaSidebar />
      {/* Hero Section with Background Image */}
      <div className='relative h-screen' id='hero'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src={currentTerrain.heroImage}
            alt={currentTerrain.heroAlt}
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
              { id: 1, label: 'Terrain', active: true },
              { id: 2, label: 'Challenges', active: false },
              { id: 3, label: 'Featured', active: false },
              { id: 4, label: 'Tips', active: false },
              { id: 5, label: 'Packing', active: false },
              { id: 6, label: 'Trails', active: false },
            ]}
          />

          {/* Hero Section */}
          <HeroSection
            subtitle={currentTerrain.subtitle}
            title={currentTerrain.title}
            extraContent={
              <div className='mt-8 bg-black bg-opacity-50 p-6 rounded-lg max-w-2xl'>
                <p className='text-white text-lg mb-4'>
                  {currentTerrain.description}
                </p>
                <div className='flex space-x-4'>
                  <button className='bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300'>
                    Find {currentTerrain.name} Gear
                  </button>
                  <Link
                    href={`/equipment/terrain/${currentTerrain.id}/guide`}
                    className='bg-transparent hover:bg-white hover:bg-opacity-20 text-white border border-white font-medium py-3 px-6 rounded-md transition duration-300'
                  >
                    {currentTerrain.name} Safety Guide
                  </Link>
                </div>
              </div>
            }
          />
        </div>
      </div>

      {/* Terrain Selector */}
      <div className='bg-gray-900 py-6 top-0 z-20 shadow-sm'>
        <div className='container mx-auto'>
          <TerrainSelector
            terrainTypes={terrainTypes}
            onTerrainChange={handleTerrainChange}
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className='bg-gray-900 text-white'>
        <div className='container mx-auto px-4 space-y-16 md:space-y-24 py-12 md:py-20'>
          {/* Section 1: Terrain Challenges */}
          <section id='section-01' className='pt-8'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-green-500 mr-4'></div>
                <span className='text-green-500 tracking-widest uppercase text-sm font-medium'>
                  {currentTerrain.name.toUpperCase()} CHALLENGES
                </span>
                <div className='h-px w-16 bg-green-500 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Prepare for These Terrain Challenges
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                {currentTerrain.name} terrain presents unique challenges that
                require specialized gear. Understand what you&apos;ll face and
                how to prepare.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {mountainChallenges.map((challenge, index) => (
                <ChallengeCard
                  key={index}
                  title={challenge.title}
                  icon={challenge.icon}
                  description={challenge.description}
                  essentialGear={challenge.essentialGear}
                  difficultyLevel={challenge.difficultyLevel}
                />
              ))}
            </div>
          </section>

          {/* Section 2: Featured Equipment */}
          <section id='section-02' className='pt-12 mt-4'>
            <FeaturedGearGrid
              title={`Essential ${currentTerrain.name} Hiking Gear`}
              subtitle={`${currentTerrain.name} Terrain Specialists`}
              items={mountainFeaturedGear}
              showSeasonalTags={true}
            />

            <div className='mt-10 text-center'>
              <Link
                href={`/equipment/terrain/${currentTerrain.id}/all`}
                className='inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition duration-300'
              >
                <span className='mr-2'>
                  Browse All {currentTerrain.name} Gear
                </span>
                <ArrowRight className='h-5 w-5' />
              </Link>
            </div>
          </section>

          {/* Section 3: Terrain Gear Tips */}
          <section
            id='section-03'
            className='pt-12 mt-4 bg-gray-800 p-10 rounded-xl'
          >
            <div className='mb-12'>
              <div className='flex items-center mb-4'>
                <div className='h-px w-16 bg-green-500 mr-4'></div>
                <span className='text-green-500 tracking-widest uppercase text-sm font-medium'>
                  {currentTerrain.name.toUpperCase()} TECHNIQUES
                </span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Essential Gear Usage Tips
              </h2>
              <p className='text-gray-400 max-w-3xl'>
                Master these techniques to navigate{' '}
                {currentTerrain.name.toLowerCase()} terrain safely and
                efficiently. The right approach makes all the difference.
              </p>
            </div>

            <TerrainGearTips tips={mountainGearTips} />

            <div className='mt-12 p-6 bg-gray-700 rounded-lg'>
              <h3 className='text-xl font-bold mb-4 text-white'>
                Try Our Interactive Gear Selector
              </h3>
              <p className='text-gray-300 mb-6'>
                Select your terrain type, difficulty level, and trip duration to
                get personalized gear recommendations.
              </p>
              <Link
                href={`/equipment/terrain/${currentTerrain.id}/gear-selector`}
                className='inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300'
              >
                <span className='mr-2'>
                  Find Your {currentTerrain.name} Gear
                </span>
                <ArrowRight className='h-5 w-5' />
              </Link>
            </div>
          </section>

          {/* Section 4: Video Tutorial */}
          <section id='section-04' className='pt-12 mt-4'>
            <VideoTutorial
              title={videoTutorialData.title}
              description={videoTutorialData.description}
              videoId={videoTutorialData.videoId}
              thumbnailUrl={videoTutorialData.thumbnailUrl}
              duration={videoTutorialData.duration}
              expert={videoTutorialData.expert}
            />
          </section>

          {/* Section 5: Packing List */}
          <section id='section-05' className='pt-12 mt-4'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-green-500 mr-4'></div>
                <span className='text-green-500 tracking-widest uppercase text-sm font-medium'>
                  BE PREPARED
                </span>
                <div className='h-px w-16 bg-green-500 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                {currentTerrain.name} Hiking Checklist
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Don&apos;t forget any critical gear with our comprehensive
                {currentTerrain.name.toLowerCase()} packing list, developed by
                experienced hikers.
              </p>
            </div>

            <TerrainPackingList
              essentialItems={mountainPackingList.essential}
              optionalItems={mountainPackingList.optional}
              terrainName={currentTerrain.name}
              downloadUrl={mountainPackingList.downloadUrl}
            />
          </section>

          {/* Section 6: Boot Comparison */}
          <section id='section-06' className='pt-12 mt-8'>
            <div className='mb-8'>
              <div className='flex items-center mb-4'>
                <div className='h-px w-16 bg-green-500 mr-4'></div>
                <span className='text-green-500 tracking-widest uppercase text-sm font-medium'>
                  Compare Options
                </span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                {currentTerrain.name} Boot Comparison
              </h2>
              <p className='text-gray-400 max-w-3xl'>
                Find the perfect boots for {currentTerrain.name.toLowerCase()}{' '}
                hiking with our side-by-side comparison of top-rated options.
              </p>
            </div>

            <EquipmentComparison
              category={`${currentTerrain.name} Boots`}
              items={mountainBootComparison}
              comparisonFields={[
                'grip',
                'support',
                'features',
                'bestFor',
                'waterproof',
                'durability',
              ]}
            />
          </section>

          {/* Section 7: Terrain Trail Recommendations */}
          <section
            id='section-07'
            className='pt-12 mt-8 bg-gray-800 p-10 rounded-xl'
          >
            <div className='mb-8'>
              <div className='flex items-center mb-4'>
                <div className='h-px w-16 bg-green-500 mr-4'></div>
                <span className='text-green-500 tracking-widest uppercase text-sm font-medium'>
                  {currentTerrain.name.toUpperCase()} DESTINATIONS
                </span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Top {currentTerrain.name} Trails
              </h2>
              <p className='text-gray-400 max-w-3xl'>
                Discover spectacular {currentTerrain.name.toLowerCase()} hiking
                destinations that showcase the terrain&apos;s beauty while being
                suitable for your skill level.
              </p>
            </div>

            <div className='flex flex-col md:flex-row gap-8'>
              <div className='md:w-1/2'>
                <TerrainTrailMap
                  mapImage={mountainTrails.mapImage}
                  mapAlt={mountainTrails.mapAlt}
                  regionName={mountainTrails.regionName}
                />
              </div>
              <div className='md:w-1/2 space-y-6'>
                {mountainTrails.trails.slice(0, 2).map((trail) => (
                  <div key={trail.id} className='bg-gray-700 p-6 rounded-lg'>
                    <h3 className='text-xl font-bold text-white'>
                      {trail.name}
                    </h3>
                    <p className='text-sm text-green-400 mb-2'>
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
                    <Link
                      href={trail.detailUrl}
                      className='text-green-400 hover:text-green-300 text-sm inline-flex items-center'
                    >
                      View Trail Details <ArrowRight className='ml-1 h-4 w-4' />
                    </Link>
                  </div>
                ))}

                <div className='mt-6'>
                  <Link
                    href={mountainTrails.allTrailsUrl}
                    className='text-center w-full inline-block bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-md transition duration-300'
                  >
                    Explore All {currentTerrain.name} Trails
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Gear Maintenance Tips */}
          <section id='section-08' className='pt-12 mt-8'>
            <div className='mb-10'>
              <div className='flex items-center mb-4'>
                <div className='h-px w-16 bg-green-500 mr-4'></div>
                <span className='text-green-500 tracking-widest uppercase text-sm font-medium'>
                  GEAR CARE
                </span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                {currentTerrain.name} Gear Maintenance
              </h2>
              <p className='text-gray-400 max-w-3xl'>
                Extend the life of your gear with proper care and maintenance.
                These tips will help keep your equipment in top condition trip
                after trip.
              </p>
            </div>

            <GearMaintenanceTips tips={mountainMaintenanceTips} />
          </section>

          {/* Section 9: Customer Testimonials */}
          <section id='section-09' className='pt-12 mt-8'>
            <div className='mb-8'>
              <div className='flex items-center mb-4'>
                <div className='h-px w-16 bg-green-500 mr-4'></div>
                <span className='text-green-500 tracking-widest uppercase text-sm font-medium'>
                  COMMUNITY VOICES
                </span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                What {currentTerrain.name} Hikers Are Saying
              </h2>
            </div>

            <TestimonialSlider testimonials={mountainTestimonials} />
          </section>

          {/* Section 10: Conservation Feature */}
          <section
            id='section-10'
            className='pt-12 mt-8 bg-gradient-to-br from-green-900 to-blue-900 p-10 rounded-xl'
          >
            <ConservationFeature
              title={mountainConservation.title}
              description={mountainConservation.description}
              stats={mountainConservation.stats}
              initiatives={mountainConservation.initiatives}
              callToAction={mountainConservation.callToAction}
            />
          </section>

          {/* Section 11: Safety Tips */}
          <section id='section-11' className='pt-12 mt-8'>
            <TerrainSafetyTips
              title={mountainSafetyTips.title}
              description={mountainSafetyTips.description}
              tips={mountainSafetyTips.tips}
              linkText={mountainSafetyTips.linkText}
              linkUrl={mountainSafetyTips.linkUrl}
            />
          </section>

          {/* Section 12: Terrain Equipment Guide CTA */}
          <section className='pt-12 mt-8 mb-16'>
            <TerrainEquipmentGuide
              title={mountainEquipmentGuide.title}
              description={mountainEquipmentGuide.description}
              coverImage={mountainEquipmentGuide.coverImage}
              downloadUrl={mountainEquipmentGuide.downloadUrl}
              features={mountainEquipmentGuide.features}
            />
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
