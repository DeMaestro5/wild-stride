'use client';
// app/about-us/page.tsx
import Header from '../../components/layout/Header';
// import Footer from '../../components/layout/Footer';
import HeroSection from '../../components/ui/HeroSection';
import ContentCard from '../../components/ui/ContentCard';
import SocialMediaSidebar from '../../components/ui/SocialMediaSidebar';
import ProgressIndicator from '../../components/ui/ProgressIndicator';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import heroImage from '../../public/images/img6.jpg';
import valuesImage from '../../public/images/img5.jpg';
import historyImage from '../../public/images/img7.jpg';
import reviewer from '../../public/images/reviewer.jpg';
import woman1 from '../../public/images/woman1.jpg';
import woman2 from '../../public/images/woman2.jpg';
import guy1 from '../../public/images/guy1.jpg';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Founder & Lead Guide',
    bio: 'With over 15 years of mountaineering experience across five continents, Alex founded Wild Stride to share his passion for the outdoors and help others discover the transformative power of nature.',
    image: reviewer,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Head of Trail Development',
    bio: 'Sarah has mapped over 500 miles of trails and specializes in finding the perfect routes for hikers of all experience levels. Her background in environmental science ensures our trails are both exciting and sustainable.',
    image: woman1,
  },
  {
    id: 3,
    name: 'Miguel Cortez',
    role: 'Gear Specialist',
    bio: 'Miguel tests every piece of equipment in real-world conditions before it earns his recommendation. His attention to detail and practical knowledge make him our go-to expert for all equipment-related questions.',
    image: guy1,
  },
  {
    id: 4,
    name: 'Emma Williams',
    role: 'Community Manager',
    bio: 'Emma builds and nurtures our hiking community through events, social media, and our ambassador program. Her background in outdoor education helps bring people together through shared adventures.',
    image: woman2,
  },
];

// Our values data
const ourValues = [
  {
    id: 1,
    title: 'Environmental Stewardship',
    description:
      'We believe in leaving no trace and actively working to preserve the natural environments we enjoy.',
    icon: '🌱',
  },
  {
    id: 2,
    title: 'Accessibility',
    description:
      'We strive to make the outdoors accessible to people of all backgrounds, abilities, and experience levels.',
    icon: '🤝',
  },
  {
    id: 3,
    title: 'Education',
    description:
      'We are committed to sharing knowledge that empowers hikers to explore safely and responsibly.',
    icon: '📚',
  },
  {
    id: 4,
    title: 'Community',
    description:
      'We foster a supportive community where outdoor enthusiasts can connect, share, and grow together.',
    icon: '👥',
  },
  {
    id: 5,
    title: 'Excellence',
    description:
      'We maintain the highest standards in our guides, content, and recommended equipment.',
    icon: '⭐',
  },
  {
    id: 6,
    title: 'Adventure',
    description:
      'We embrace the spirit of adventure and encourage others to push their boundaries safely.',
    icon: '🧗',
  },
];

export default function AboutUs() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className='relative h-screen' id='hero'>
        {/* Background Image - Only for hero section */}
        <div className='absolute inset-0 z-0'>
          <Image
            src={heroImage}
            alt='Mountain landscape with hikers'
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
              { id: 1, label: 'Our Story', active: true },
              { id: 2, label: 'Mission', active: false },
              { id: 3, label: 'Team', active: false },
              { id: 4, label: 'Values', active: false },
              { id: 5, label: 'Join Us', active: false },
            ]}
          />

          {/* Hero Section */}
          <HeroSection
            subtitle='OUR JOURNEY'
            title='Guiding Explorers Through The Mountains'
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className='bg-gray-900 text-white'>
        <div className='container mx-auto px-4 space-y-12 md:space-y-20 py-2 md:py-16'>
          {/* Section 1: Our Story */}
          <section id='section-01' className='pt-8'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  01
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>Our Story</h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Founded in 2015, Wild Stride began with a simple mission: to
                help people connect with nature and experience the
                transformative power of the mountains. What started as a small
                blog has grown into a comprehensive resource for hikers of all
                levels.
              </p>
            </div>

            <ContentCard
              number='01'
              subtitle='OUR BEGINNINGS'
              title='From Passion to Purpose'
              description="Wild Stride was born from a deep love for the outdoors and a desire to share that passion with others. Our founder, Alex Johnson, started by documenting his own hiking adventures, providing tips and trail recommendations based on personal experience. As the community grew, so did our vision. Today, we're proud to offer expert guidance, gear recommendations, and a platform for outdoor enthusiasts to connect."
              buttonText='Learn More About Our History'
              buttonUrl='/about-us/history'
              imageSrc={historyImage.src}
              imageAlt='Founder on a mountain summit at sunrise'
              imagePosition='right'
            />
          </section>

          {/* Section 2: Our Mission */}
          <section id='section-02' className='pt-8'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  02
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Our Mission
              </h2>
            </div>

            {/* Mission Statement Card */}
            <div className='bg-gray-800 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto'>
              <div className='text-yellow-400 text-5xl mb-6'>🏔️</div>
              <h3 className='text-2xl md:text-3xl font-bold mb-6'>
                &ldquo;To inspire, equip, and guide people on their journey to
                explore the natural world, fostering a community of responsible
                outdoor enthusiasts.&rdquo;
              </h3>
              <p className='text-gray-400'>
                We believe that time spent in nature is never wasted. Through
                quality resources, expert guidance, and authentic community, we
                aim to make the outdoors more accessible to everyone, regardless
                of experience level.
              </p>
            </div>
          </section>

          {/* Section 3: Meet Our Team */}
          <section id='section-03' className='pt-8'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  03
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Meet Our Team
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                The passionate individuals behind Wild Stride bring decades of
                combined outdoor experience and expertise. Each team member
                contributes unique skills while sharing a common love for the
                mountains.
              </p>
            </div>

            {/* Team Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className='bg-gray-800 rounded-lg overflow-hidden flex flex-col'
                >
                  <div className='relative h-64'>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes='(max-width: 768px) 100vw, 50vw'
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold mb-1'>{member.name}</h3>
                    <p className='text-yellow-400 mb-4'>{member.role}</p>
                    <p className='text-gray-400'>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-8 text-center'>
              <Link
                href='/about-us/team'
                className='inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 group'
              >
                <span className='mr-2'>Meet Our Full Team</span>
                <ArrowRight className='h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200' />
              </Link>
            </div>
          </section>

          {/* Section 4: Our Values */}
          <section id='section-04' className='pt-8'>
            <ContentCard
              number='04'
              subtitle='OUR VALUES'
              title='What We Stand For'
              description='At Wild Stride, our values guide everything we do. From the content we create to the gear we recommend, these principles keep us aligned with our mission and help us serve our community better.'
              buttonText='Learn How We Live Our Values'
              buttonUrl='/about-us/values'
              imageSrc={valuesImage.src}
              imageAlt='Hikers enjoying a sunset view from a mountain summit'
              imagePosition='left'
            />

            {/* Values Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
              {ourValues.map((value) => (
                <div
                  key={value.id}
                  className='bg-gray-800 rounded-lg p-6 flex flex-col'
                >
                  <div className='text-4xl mb-4'>{value.icon}</div>
                  <h3 className='text-xl font-bold mb-3'>{value.title}</h3>
                  <p className='text-gray-400 flex-grow'>{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Join Our Community CTA */}
          <section id='section-05' className='pt-8'>
            <div className='bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg p-8 md:p-12'>
              <div className='max-w-4xl mx-auto'>
                <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900'>
                  Join Our Community
                </h2>
                <p className='text-gray-900 mb-8 text-lg'>
                  Connect with fellow outdoor enthusiasts, access exclusive
                  content, and be the first to know about new trails, gear
                  reviews, and upcoming events. Our growing community of hikers
                  is waiting to welcome you.
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Link
                    href='/community/join'
                    className='inline-block bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition-colors duration-200 text-center'
                  >
                    Become A Member
                  </Link>
                  <Link
                    href='/newsletter'
                    className='inline-block bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-3 px-6 rounded-lg transition-colors duration-200 text-center'
                  >
                    Subscribe To Our Newsletter
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}
