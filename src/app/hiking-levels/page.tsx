'use client';
// app/hiking-levels/page.tsx
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from '../../components/ui/HeroSection';

import SocialMediaSidebar from '../../components/ui/SocialMediaSidebar';
import ProgressIndicator from '../../components/ui/ProgressIndicator';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Import images (adjust paths as needed for your project)
import heroImage from '../../public/images/img3.jpg'; // Mountain backdrop for hero
import beginnerImage from '../../public/images/img5.jpg'; // Easy hiking trail
import intermediateImage from '../../public/images/img4.jpg'; // Moderate trail
import advancedImage from '../../public/images/img6.jpg'; // Challenging mountain trail
import expertImage from '../../public/images/backpack01.jpg'; // Technical mountaineering

// Mock data for hiking levels
const hikingLevels = [
  {
    id: 1,
    level: 'Beginner',
    description: 'Perfect for first-time hikers and families with children.',
    terrain: 'Well-maintained trails with minimal elevation gain',
    distance: '1-3 miles',
    duration: '1-2 hours',
    equipment: 'Basic hiking shoes, water bottle, light backpack',
    examples: ['Local nature trails', 'State park pathways', 'Beach walks'],
    tips: [
      'Stay on marked trails',
      'Start early in the day',
      'Check weather conditions',
      'Carry more water than you think you need',
    ],
  },
  {
    id: 2,
    level: 'Intermediate',
    description: 'For hikers with some experience looking for more challenge.',
    terrain: 'Moderate elevation gain with some uneven surfaces',
    distance: '3-7 miles',
    duration: '2-5 hours',
    equipment: 'Proper hiking boots, trekking poles, day pack with essentials',
    examples: [
      'Rolling hill trails',
      'Moderate mountain paths',
      'Woodland routes with elevation',
    ],
    tips: [
      'Layer your clothing',
      'Pack a basic first aid kit',
      'Tell someone where you are going',
      'Learn basic map reading skills',
    ],
  },
  {
    id: 3,
    level: 'Advanced',
    description: 'Challenging hikes requiring physical fitness and experience.',
    terrain:
      'Significant elevation gain, potentially difficult terrain including rock scrambles',
    distance: '7-12 miles',
    duration: '5-8 hours',
    equipment:
      'Technical hiking boots, navigation tools, comprehensive day pack',
    examples: [
      'Summit hikes',
      'Remote wilderness trails',
      'High-altitude routes',
    ],
    tips: [
      'Research your route thoroughly',
      'Check for permits if required',
      'Carry emergency shelter',
      'Know basic wilderness first aid',
    ],
  },
  {
    id: 4,
    level: 'Expert',
    description:
      'Technical routes demanding extensive experience and specialized skills.',
    terrain:
      'Exposed ridges, off-trail navigation, technical scrambling or climbing sections',
    distance: '10+ miles',
    duration: '8+ hours or multi-day',
    equipment:
      'Technical gear, navigation expertise, overnight equipment even for day hikes',
    examples: [
      'Alpine traverses',
      'Technical peak climbs',
      'Multi-day backcountry routes',
    ],
    tips: [
      'Develop advanced navigation skills',
      'Learn rope skills if needed',
      'Be prepared for emergencies',
      'Consider wilderness training courses',
    ],
  },
];

// Component for displaying a hiking level card
const HikingLevelCard = ({
  level,
}: {
  level: (typeof hikingLevels)[0];
  index: number;
}) => {
  // Determine which image to use based on level
  const getLevelImage = () => {
    switch (level.level) {
      case 'Beginner':
        return beginnerImage;
      case 'Intermediate':
        return intermediateImage;
      case 'Advanced':
        return advancedImage;
      case 'Expert':
        return expertImage;
      default:
        return beginnerImage;
    }
  };

  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-xl'>
      <div className='relative h-60'>
        <Image
          src={getLevelImage()}
          alt={`${level.level} hiking level`}
          fill
          sizes='(max-width: 768px) 100vw, 50vw'
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
          <h3 className='text-4xl font-bold text-white'>{level.level}</h3>
        </div>
      </div>

      <div className='p-6 space-y-4'>
        <p className='text-gray-300'>{level.description}</p>

        <div>
          <h4 className='text-yellow-400 font-semibold mb-2'>
            Typical Characteristics:
          </h4>
          <ul className='space-y-2'>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Terrain:</span> {level.terrain}
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Distance:</span> {level.distance}
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Duration:</span> {level.duration}
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Equipment:</span>{' '}
                {level.equipment}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-yellow-400 font-semibold mb-2'>Examples:</h4>
          <ul className='list-disc list-inside text-gray-300 pl-2 space-y-1'>
            {level.examples.map((example, i) => (
              <li key={i} className='flex items-start'>
                <span className='text-yellow-400 mr-2'>•</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='text-yellow-400 font-semibold mb-2'>Pro Tips:</h4>
          <ul className='list-disc list-inside text-gray-300 pl-2 space-y-1'>
            {level.tips.map((tip, i) => (
              <li key={i} className='flex items-start'>
                <span className='text-yellow-400 mr-2'>•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='pt-4'>
          <Link
            href={`/trails/${level.level.toLowerCase()}`}
            className='inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 group'
          >
            <span className='mr-2'>Find {level.level} Trails</span>
            <ArrowRight className='h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200' />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Skill Level Difficulty Component
const SkillLevelMeter = ({ level }: { level: string }) => {
  // Determine the number of filled circles based on level
  const getLevelValue = () => {
    switch (level) {
      case 'Beginner':
        return 1;
      case 'Intermediate':
        return 2;
      case 'Advanced':
        return 3;
      case 'Expert':
        return 4;
      default:
        return 0;
    }
  };

  const value = getLevelValue();

  return (
    <div className='flex items-center space-x-1'>
      {[1, 2, 3, 4].map((n) => (
        <div
          key={n}
          className={`rounded-full h-3 w-3 ${
            n <= value ? 'bg-yellow-400' : 'bg-gray-600'
          }`}
        />
      ))}
    </div>
  );
};

// Self-Assessment Component
const SelfAssessmentSection = () => {
  return (
    <div className='bg-gray-800 rounded-lg p-8 shadow-lg'>
      <h3 className='text-2xl font-bold mb-6'>Assess Your Hiking Level</h3>

      <p className='text-gray-300 mb-6'>
        Not sure which hiking level is right for you? Answer these questions to
        get a better idea:
      </p>

      <div className='space-y-6'>
        <div>
          <h4 className='text-xl font-semibold text-yellow-400 mb-3'>
            Physical Fitness
          </h4>
          <ul className='space-y-3'>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Beginner:</span> I can walk for 30
                minutes on flat ground without getting tired.
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Intermediate:</span> I exercise
                regularly and can handle 1-2 hours of moderate activity.
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Advanced:</span> I&apos;m very fit
                and regularly engage in cardio activities for 2+ hours.
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Expert:</span> I train
                specifically for demanding physical activities and have
                excellent endurance.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-xl font-semibold text-yellow-400 mb-3'>
            Experience Level
          </h4>
          <ul className='space-y-3'>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Beginner:</span> I&apos;ve done
                little to no hiking before.
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Intermediate:</span> I hike
                occasionally and am comfortable on most marked trails.
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Advanced:</span> I hike regularly
                throughout the year in various conditions.
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Expert:</span> I have extensive
                hiking experience including challenging terrain and adverse
                conditions.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-xl font-semibold text-yellow-400 mb-3'>
            Technical Skills
          </h4>
          <ul className='space-y-3'>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Beginner:</span> I have no
                technical outdoor skills.
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Intermediate:</span> I can use a
                map and compass basics and understand weather signs.
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Advanced:</span> I&apos;m
                competent with navigation tools and have basic wilderness first
                aid knowledge.
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-yellow-400 mr-2'>•</span>
              <span>
                <span className='font-medium'>Expert:</span> I have advanced
                navigation skills, wilderness first aid certification, and
                possibly technical climbing skills.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className='mt-8 p-4 bg-gray-700 rounded-md'>
        <p className='text-gray-200 italic'>
          Always err on the side of caution when selecting trails. It&apos;s
          better to choose a trail below your ability level and enjoy it than
          struggle with one beyond your current capabilities.
        </p>
      </div>
    </div>
  );
};

// Level Progression Tips Component
const LevelProgressionTips = () => {
  return (
    <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg'>
      <div className='text-center mb-8'>
        <h3 className='text-2xl font-bold'>How to Progress Between Levels</h3>
        <div className='h-1 w-20 bg-yellow-400 mx-auto mt-4'></div>
      </div>

      <div className='space-y-8'>
        <div>
          <h4 className='flex items-center text-xl font-semibold text-yellow-400 mb-4'>
            <span className='bg-yellow-400 text-gray-900 h-8 w-8 rounded-full flex items-center justify-center mr-3 font-bold'>
              1
            </span>
            Build Endurance Gradually
          </h4>
          <p className='text-gray-300 ml-11'>
            Increase your hiking distance and elevation gain by no more than
            10-20% each week. This allows your body to adapt without risking
            injury or burnout.
          </p>
        </div>

        <div>
          <h4 className='flex items-center text-xl font-semibold text-yellow-400 mb-4'>
            <span className='bg-yellow-400 text-gray-900 h-8 w-8 rounded-full flex items-center justify-center mr-3 font-bold'>
              2
            </span>
            Develop Technical Skills
          </h4>
          <p className='text-gray-300 ml-11'>
            Take courses or join guided hikes to learn navigation, first aid,
            and proper use of equipment. Many outdoor clubs offer workshops
            specifically designed for hikers looking to advance.
          </p>
        </div>

        <div>
          <h4 className='flex items-center text-xl font-semibold text-yellow-400 mb-4'>
            <span className='bg-yellow-400 text-gray-900 h-8 w-8 rounded-full flex items-center justify-center mr-3 font-bold'>
              3
            </span>
            Invest in Proper Equipment
          </h4>
          <p className='text-gray-300 ml-11'>
            As you progress, invest in quality gear appropriate for more
            challenging conditions. Good boots, weather-appropriate clothing,
            and navigation tools become increasingly important.
          </p>
        </div>

        <div>
          <h4 className='flex items-center text-xl font-semibold text-yellow-400 mb-4'>
            <span className='bg-yellow-400 text-gray-900 h-8 w-8 rounded-full flex items-center justify-center mr-3 font-bold'>
              4
            </span>
            Hike with More Experienced People
          </h4>
          <p className='text-gray-300 ml-11'>
            Join hiking groups or find mentors with more experience. They can
            provide valuable advice, safety tips, and introduce you to new
            trails appropriate for your developing skills.
          </p>
        </div>

        <div>
          <h4 className='flex items-center text-xl font-semibold text-yellow-400 mb-4'>
            <span className='bg-yellow-400 text-gray-900 h-8 w-8 rounded-full flex items-center justify-center mr-3 font-bold'>
              5
            </span>
            Practice in Various Conditions
          </h4>
          <p className='text-gray-300 ml-11'>
            Gradually expose yourself to different weather, seasons, and terrain
            types. Start with mild challenges before attempting more extreme
            conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function HikingLevels() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className='relative h-screen' id='hero'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src={heroImage}
            alt='Hiking levels background'
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
              { id: 1, label: 'Intro', active: true },
              { id: 2, label: 'Levels', active: false },
              { id: 3, label: 'Assessment', active: false },
              { id: 4, label: 'Progression', active: false },
            ]}
          />

          {/* Hero Section */}
          <HeroSection
            subtitle='FIND YOUR PATH'
            title='Understanding Hiking Difficulty Levels'
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
                  HIKING DIFFICULTY
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Understanding Trail Difficulty Ratings
              </h2>
              <p className='text-gray-400'>
                Hiking trails vary greatly in difficulty, from simple nature
                walks to challenging mountain expeditions. Understanding these
                difficulty levels is crucial for planning safe and enjoyable
                adventures that match your abilities and experience.
              </p>
            </div>

            <div className='prose prose-lg prose-invert max-w-none'>
              <p>
                Trail difficulty ratings help hikers choose appropriate routes
                based on their fitness, experience, and comfort level. While
                rating systems can vary slightly between different parks and
                countries, most follow similar principles that consider factors
                like:
              </p>

              <ul className='space-y-2 mt-4'>
                <li className='flex items-start'>
                  <span className='text-yellow-400 mr-2'>•</span>
                  <span>
                    <span className='font-medium'>Elevation gain:</span> How
                    much climbing is involved
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-yellow-400 mr-2'>•</span>
                  <span>
                    <span className='font-medium'>Trail distance:</span> Total
                    length of the hike
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-yellow-400 mr-2'>•</span>
                  <span>
                    <span className='font-medium'>Trail conditions:</span>{' '}
                    Surface type, obstacles, and maintenance level
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-yellow-400 mr-2'>•</span>
                  <span>
                    <span className='font-medium'>Technical challenges:</span>{' '}
                    Scrambling, river crossings, exposure
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-yellow-400 mr-2'>•</span>
                  <span>
                    <span className='font-medium'>Navigation difficulty:</span>{' '}
                    How well-marked and easy to follow
                  </span>
                </li>
              </ul>

              <p className='mt-6'>
                Below, we break down four standard hiking difficulty levels to
                help you find trails that match your abilities while providing
                the right amount of challenge for growth.
              </p>
            </div>
          </section>

          {/* Section 2: Hiking Levels */}
          <section id='section-02'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  DIFFICULTY LEVELS
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                The Four Hiking Difficulty Levels
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                From gentle nature walks to demanding mountain expeditions, find
                the hiking level that matches your experience and fitness.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              {hikingLevels.map((level, index) => (
                <HikingLevelCard key={level.id} level={level} index={index} />
              ))}
            </div>
          </section>

          {/* Section 3: Difficulty Comparison */}
          <section id='section-03' className='max-w-5xl mx-auto'>
            <div className='mb-12'>
              <div className='flex items-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  AT A GLANCE
                </span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Comparative Difficulty
              </h2>
              <p className='text-gray-400 max-w-3xl'>
                A side-by-side comparison of key factors across different hiking
                levels.
              </p>
            </div>

            <div className='overflow-x-auto'>
              <table className='w-full border-collapse bg-gray-800 rounded-lg overflow-hidden'>
                <thead>
                  <tr className='bg-gray-700'>
                    <th className='p-4 text-left'>Level</th>
                    <th className='p-4 text-left'>Difficulty</th>
                    <th className='p-4 text-left'>Terrain</th>
                    <th className='p-4 text-left'>Typical Distance</th>
                    <th className='p-4 text-left'>Required Skills</th>
                  </tr>
                </thead>
                <tbody>
                  {hikingLevels.map((level) => (
                    <tr key={level.id} className='border-t border-gray-700'>
                      <td className='p-4 font-medium'>{level.level}</td>
                      <td className='p-4'>
                        <SkillLevelMeter level={level.level} />
                      </td>
                      <td className='p-4'>{level.terrain}</td>
                      <td className='p-4'>{level.distance}</td>
                      <td className='p-4'>
                        {level.level === 'Beginner' &&
                          'Basic fitness, no technical skills required'}
                        {level.level === 'Intermediate' &&
                          'Moderate fitness, basic navigation'}
                        {level.level === 'Advanced' &&
                          'Good fitness, navigation skills, weather awareness'}
                        {level.level === 'Expert' &&
                          'Excellent fitness, advanced navigation, technical skills'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Self-Assessment */}
          <section id='section-04'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  KNOW YOURSELF
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Self-Assessment Guide
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Evaluate your current hiking abilities honestly to find suitable
                trails and set appropriate goals.
              </p>
            </div>

            <SelfAssessmentSection />
          </section>

          {/* Section 5: Level Progression */}
          <section id='section-05'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  LEVEL UP
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Progressing to Higher Difficulty Levels
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Ready to challenge yourself? Learn how to safely advance from
                one hiking level to the next.
              </p>
            </div>

            <LevelProgressionTips />
          </section>

          {/* Section 6: Trail Finder CTA */}
          <section id='section-06' className='max-w-4xl mx-auto'>
            <div className='bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 md:p-12 shadow-lg text-center'>
              <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                Find Trails For Your Level
              </h3>
              <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
                Ready to hit the trail? Use our trail finder to discover hiking
                routes that match your experience level, preferred location, and
                trail features.
              </p>
              <Link
                href='/trails/finder'
                className='inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors duration-200'
              >
                Search Trails by Difficulty
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
