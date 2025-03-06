'use client';
// app/mapping-guide/page.tsx

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from '../../components/ui/HeroSection';
import SocialMediaSidebar from '../../components/ui/SocialMediaSidebar';
import ProgressIndicator from '../../components/ui/ProgressIndicator';
import Image from 'next/image';
import Link from 'next/link';

// Import custom components for mapping guide
import MapTypesCard from '../../components/mapping-guide/mapTypeCard';
import NavigationToolCard from '../../components/mapping-guide/navigationToolCard';
import TerrainFeatureCard from '../../components/mapping-guide/TerrainFeatureCard';
import NavigationTechniquesCard from '../../components/mapping-guide/navigationTechniquesCard';
import MapNotationSection from '../../components/mapping-guide/section/mapNotationSection';
import EmergencyNavigationSection from '../../components/mapping-guide/section/emergencyNavigationSection';
import MapChecklistSection from '../../components/mapping-guide/section/mapCheckListSection';

// Import data
import mapTypes from '../data/mapping-guide/mapType';
import navigationTools from '../data/mapping-guide/navigationTools';
import terrainFeatures from '../data/mapping-guide/terraineFeature';
import navigationTechniques from '../data/mapping-guide/navigationTechnique';
import mapNotations from '../data/mapping-guide/mapNotations';
import emergencyTips from '../data/mapping-guide/emergencyTips';

// Import hero image
import heroImage from '../../public/images/heroImage.jpg';

export default function MappingGuide() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className='relative h-screen' id='hero'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src={heroImage}
            alt='Topographic map with compass and navigation tools'
            fill
            priority
            sizes='100vw'
            quality={100}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.6)',
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
              { id: 1, label: 'Map Types', active: true },
              { id: 2, label: 'Tools', active: false },
              { id: 3, label: 'Navigation', active: false },
              { id: 4, label: 'Terrain', active: false },
              { id: 5, label: 'Emergency', active: false },
            ]}
          />

          {/* Hero Section */}
          <HeroSection
            subtitle='NAVIGATE WITH CONFIDENCE'
            title='Complete Mapping & Navigation Guide'
          />
        </div>
      </div>

      {/* Content Sections - On themed background */}
      <div className='bg-slate-900 text-white'>
        <div className='container mx-auto px-4 space-y-16 md:space-y-24 py-16'>
          {/* Section 1: Introduction */}
          <section id='section-01' className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-emerald-500 mr-4'></div>
                <span className='text-emerald-500 tracking-widest uppercase text-sm font-medium'>
                  MAPPING & NAVIGATION
                </span>
                <div className='h-px w-16 bg-emerald-500 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Master The Art Of Wilderness Navigation
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Understanding mapping and navigation skills ensures you stay on
                course, make informed decisions, and travel safely through any
                terrain.
              </p>
            </div>

            <div className='prose prose-lg prose-invert max-w-none'>
              <p>
                Whether you are exploring a well-marked trail or venturing into
                remote backcountry, navigation skills are fundamental to outdoor
                adventure. The ability to read maps, use a compass, and
                understand terrain can mean the difference between an enjoyable
                journey and a dangerous situation.
              </p>

              <p>
                This comprehensive guide covers essential navigation topics to
                help you:
              </p>

              <ul>
                <li>Understand different map types and their specific uses</li>
                <li>Master essential navigation tools and technologies</li>
                <li>Interpret terrain features on maps and in the field</li>
                <li>
                  Learn proven navigation techniques for various conditions
                </li>
                <li>
                  Develop emergency navigation skills when technology fails
                </li>
              </ul>

              <p>
                Remember that navigation is both a science and an art. While
                modern technology provides powerful tools, developing
                traditional skills creates a foundation that works in all
                conditions. Practice regularly on familiar terrain before
                testing your navigation abilities in challenging environments.
              </p>
            </div>
          </section>

          {/* Section 2: Map Types */}
          <section id='section-02'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-emerald-500 mr-4'></div>
                <span className='text-emerald-500 tracking-widest uppercase text-sm font-medium'>
                  MAP VARIETIES
                </span>
                <div className='h-px w-16 bg-emerald-500 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Types of Maps For Outdoor Adventures
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Different adventures require different maps. Learn which map
                types are best suited for your specific outdoor activities.
              </p>
            </div>

            <div className='space-y-10'>
              {mapTypes.map((mapType, index) => (
                <MapTypesCard
                  key={mapType.id}
                  title={mapType.title}
                  description={mapType.description}
                  image={mapType.image}
                  keyFeatures={mapType.keyFeatures}
                  bestUses={mapType.bestUses}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Section 3: Navigation Tools */}
          <section id='section-03'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-emerald-500 mr-4'></div>
                <span className='text-emerald-500 tracking-widest uppercase text-sm font-medium'>
                  ESSENTIAL EQUIPMENT
                </span>
                <div className='h-px w-16 bg-emerald-500 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Navigation Tools & Technologies
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                From traditional compasses to modern GPS devices, these tools
                will help you navigate confidently in the wilderness.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {navigationTools.map((tool) => (
                <NavigationToolCard
                  key={tool.name}
                  name={tool.name}
                  image={tool.image}
                  description={tool.description}
                  advantages={tool.advantages}
                  limitations={tool.limitations}
                  icon={tool.icon}
                />
              ))}
            </div>
          </section>

          {/* Section 4: Navigation Techniques */}
          <section id='section-04'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-emerald-500 mr-4'></div>
                <span className='text-emerald-500 tracking-widest uppercase text-sm font-medium'>
                  PRACTICAL SKILLS
                </span>
                <div className='h-px w-16 bg-emerald-500 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Essential Navigation Techniques
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Master these fundamental methods to find your way in various
                conditions and environments.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              {navigationTechniques.map((technique) => (
                <NavigationTechniquesCard
                  key={technique.name}
                  name={technique.name}
                  description={technique.description}
                  icon={technique.icon}
                  steps={technique.steps}
                  difficulty={technique.difficulty}
                />
              ))}
            </div>
          </section>

          {/* Section 5: Map Notation Guide */}
          <section id='section-05'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-emerald-500 mr-4'></div>
                <span className='text-emerald-500 tracking-widest uppercase text-sm font-medium'>
                  MAP READING
                </span>
                <div className='h-px w-16 bg-emerald-500 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Understanding Map Symbols & Notation
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Learn to interpret common map symbols, contour lines, and other
                notations to extract valuable information from any map.
              </p>
            </div>

            <MapNotationSection notations={mapNotations} />
          </section>

          {/* Section 6: Terrain Features */}
          <section id='section-06'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-emerald-500 mr-4'></div>
                <span className='text-emerald-500 tracking-widest uppercase text-sm font-medium'>
                  LAND FEATURES
                </span>
                <div className='h-px w-16 bg-emerald-500 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Identifying Key Terrain Features
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Learn to recognize and use natural landscape features for more
                accurate navigation and route planning.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-6'>
              {terrainFeatures.map((feature) => (
                <TerrainFeatureCard
                  key={feature.name}
                  name={feature.name}
                  image={feature.image}
                  mapRepresentation={feature.mapRepresentation}
                  navigationUse={feature.navigationUse}
                />
              ))}
            </div>
          </section>

          {/* Section 7: Map & Navigation Checklist */}
          <section id='section-07'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-emerald-500 mr-4'></div>
                <span className='text-emerald-500 tracking-widest uppercase text-sm font-medium'>
                  BE PREPARED
                </span>
                <div className='h-px w-16 bg-emerald-500 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Navigation Preparation Checklist
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Use this interactive checklist to ensure you have all the
                navigation tools and preparations needed before your journey.
              </p>
            </div>

            <MapChecklistSection />
          </section>

          {/* Section 8: Emergency Navigation */}
          <section id='section-08'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-emerald-500 mr-4'></div>
                <span className='text-emerald-500 tracking-widest uppercase text-sm font-medium'>
                  WHEN THINGS GO WRONG
                </span>
                <div className='h-px w-16 bg-emerald-500 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Emergency Navigation Techniques
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                When modern tools fail or get lost, these traditional methods
                can help you find your way back to safety.
              </p>
            </div>

            <EmergencyNavigationSection tips={emergencyTips} />
          </section>

          {/* Section 9: Maps & Navigation Shop CTA */}
          <section id='section-09' className='max-w-4xl mx-auto'>
            <div className='bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-8 md:p-12 shadow-lg text-center'>
              <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                Find Your Way With Quality Navigation Tools
              </h3>
              <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
                Visit our navigation shop for carefully selected maps,
                compasses, GPS devices, and other navigation tools trusted by
                experienced outdoors people.
              </p>
              <Link
                href='/shop/navigation-tools'
                className='inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors duration-200'
              >
                Shop Navigation Tools
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
