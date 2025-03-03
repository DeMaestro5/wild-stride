import ContentCard from '../ui/ContentCard';
import img2 from '../../public/images/img2.jpg';
export default function Section01Hiker() {
  return (
    <section id='section-01' className='pt-12'>
      <ContentCard
        number='01'
        subtitle='GET STARTED'
        title='What level of hiker are you?'
        description='Determining what level of hiker you are can help with planning and equipment needed when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?'
        buttonText='read more'
        buttonUrl='/hiking-levels'
        imageSrc={img2}
        imageAlt='Hiker standing on mountain'
        imagePosition='right'
      />
    </section>
  );
}
