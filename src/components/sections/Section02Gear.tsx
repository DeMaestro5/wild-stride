import ContentCard from '../ui/ContentCard';
import img3 from '../../public/images/img3.jpg';

export default function Section02Gear() {
  return (
    <section id='section-02' className='pt-2'>
      <ContentCard
        number='02'
        subtitle='HIKING ESSENTIALS'
        title='Picking the right Hiking Gear!'
        description="The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet."
        buttonText='read more'
        buttonUrl='/hiking-gear'
        imageSrc={img3}
        imageAlt='Hiker with backpack on mountain trail'
        imagePosition='left'
      />
    </section>
  );
}
