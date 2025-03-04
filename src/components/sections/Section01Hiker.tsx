import ContentCard from '../ui/ContentCard';
import img2 from '../../public/images/img2.jpg';

export default function Section01Hiker() {
  return (
    <section id='section-01' className='relative'>
      {/* Large section number that overflows to the hero section */}
      <div className='absolute -top-48 md:-top-64 left-4 md:left-24 text-gray-700 text-opacity-20 select-none pointer-events-none z-10'>
        <span className='text-[160px] md:text-[280px] font-bold'>01</span>
      </div>

      <div className='container mx-auto'>
        <ContentCard
          number=''
          subtitle='GET STARTED'
          title='What level of hiker are you?'
          description='Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?'
          buttonText='read more'
          buttonUrl='/hiking-levels'
          imageSrc={img2}
          imageAlt='Hiker standing on mountain'
          imagePosition='right'
        />
      </div>
    </section>
  );
}
