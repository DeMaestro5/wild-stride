import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/ui/HeroSection';
import Section01Hiker from '../components/sections/Section01Hiker';
import Section02Gear from '../components/sections/Section02Gear';
import Section03Map from '../components/sections/Section03Map';
import SocialMediaSidebar from '../components/ui/SocialMediaSidebar';
import ProgressIndicator from '../components/ui/ProgressIndicator';
import Image from 'next/image';
import img1 from '../public/images/img1.jpg';

export default function Home() {
  return (
    <main className='relative min-h-screen bg-gray-900'>
      {/* Hero Section with Background Image */}
      <div className='relative h-screen '>
        {/* Background Image - Only for hero section */}
        <div className='absolute inset-0 z-0 '>
          <Image
            src={img1}
            alt='Mountain background'
            fill
            priority
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
              { id: 2, label: '01', active: false },
              { id: 3, label: '02', active: false },
              { id: 4, label: '03', active: false },
            ]}
          />

          {/* Hero Section */}
          <HeroSection
            subtitle='A HIKING GUIDE'
            title='Be Prepared For The Mountains And Beyond!'
          />
        </div>
      </div>

      {/* Content Sections - On gray background */}
      <div className='bg-gray-900 text-white'>
        <div className='container mx-auto px-4 space-y-32 py-24'>
          <Section01Hiker />
          <Section02Gear />
          <Section03Map />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
