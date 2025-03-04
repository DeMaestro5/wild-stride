import ContentCard from '../ui/ContentCard';
import img4 from '../../public/images/img4.jpg';

export default function Section03Map() {
  return (
    <section id='section-03' className='pt-0 md:pt-12'>
      <ContentCard
        number='03'
        subtitle='WHERE YOU GO IS THE KEY'
        title='Understand Your Map & Timing'
        description="To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction."
        buttonText='read more'
        buttonUrl='/mapping-guide'
        imageSrc={img4}
        imageAlt='Hiker hand holding a map in mountains'
        imagePosition='right'
      />
    </section>
  );
}
