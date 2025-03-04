'use client';
// app/blog/page.tsx

import Header from '../../components/layout/Header';
// import Footer from '../../components/layout/Footer';
import HeroSection from '../../components/ui/HeroSection';
import ContentCard from '../../components/ui/ContentCard';
import SocialMediaSidebar from '../../components/ui/SocialMediaSidebar';
import ProgressIndicator from '../../components/ui/ProgressIndicator';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag, User } from 'lucide-react';

// Import images - update paths as needed
import heroImage from '../../public/images/blogpost.jpg'; // Replace with your blog hero image
import featuredPost1 from '../../public/images/img4.jpg'; // Using existing images
import featuredPost2 from '../../public/images/img5.jpg';
import featuredPost3 from '../../public/images/img6.jpg';
import postAuthor from '../../public/images/postAuthor.jpg';
import postAuthor01 from '../../public/images/postAuthor2.jpg';
import postAuthor02 from '../../public/images/postAuthor3.jpg';
import weather from '../../public/images/weather.jpg';
import mountain from '../../public/images/mountain.jpg';
import dog from '../../public/images/dog.jpg';
import backpacking from '../../public/images/backpacking.jpg';
import hacking2 from '../../public/images/img6.jpg';

// TypeScript interfaces
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorImage?: string | StaticImageData;
  date: string;
  readTime: string;
  category: string;
  image: string | StaticImageData;
  url: string;
  featured?: boolean;
}

interface Category {
  name: string;
  count: number;
}

// Blog post data
const featuredPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Essential Gear for Winter Hiking',
    excerpt:
      'Discover the must-have equipment that will keep you safe and comfortable on cold-weather adventures.',
    author: 'Alex Johnson',
    authorImage: postAuthor02,
    date: 'February 15, 2023',
    readTime: '8 min read',
    category: 'Gear',
    image: featuredPost1.src,
    url: '/blog/essential-gear-winter-hiking',
    featured: true,
  },
  {
    id: 2,
    title: 'Top 5 Hidden Trails in the Pacific Northwest',
    excerpt:
      'Escape the crowds and discover these lesser-known but breathtaking hiking trails in Washington and Oregon.',
    author: 'Sarah Chen',
    authorImage: postAuthor,
    date: 'January 28, 2023',
    readTime: '6 min read',
    category: 'Trails',
    image: featuredPost2.src,
    url: '/blog/hidden-trails-pacific-northwest',
  },
  {
    id: 3,
    title: 'How to Prepare for Your First Multi-Day Hike',
    excerpt:
      'From packing to conditioning, here is everything you need to know before embarking on your first overnight hiking adventure.',
    author: 'Miguel Cortez',
    authorImage: postAuthor01,
    date: 'January 12, 2023',
    readTime: '10 min read',
    category: 'Tips',
    image: featuredPost3.src,
    url: '/blog/prepare-first-multi-day-hike',
  },
];

// Recent posts data
const recentPosts: BlogPost[] = [
  {
    id: 4,
    title: 'Leave No Trace: Ethical Hiking Practices',
    excerpt:
      'Learn how to minimize your impact on natural environments while enjoying the great outdoors.',
    author: 'Emma Williams',
    date: 'February 10, 2023',
    readTime: '7 min read',
    category: 'Conservation',
    image: hacking2,
    url: '/blog/leave-no-trace',
  },
  {
    id: 5,
    title: 'Hiking with Dogs: A Complete Guide',
    excerpt:
      'Everything you need to know about bringing your four-legged friend on your hiking adventures.',
    author: 'Alex Johnson',
    date: 'February 5, 2023',
    readTime: '9 min read',
    category: 'Companions',
    image: dog,
    url: '/blog/hiking-with-dogs',
  },
  {
    id: 6,
    title: 'Photography Tips for Mountain Landscapes',
    excerpt:
      'Capture breathtaking mountain vistas with these proven photography techniques and gear recommendations.',
    author: 'Sarah Chen',
    date: 'January 30, 2023',
    readTime: '8 min read',
    category: 'Photography',
    image: mountain,
    url: '/blog/mountain-photography-tips',
  },
  {
    id: 7,
    title: 'Understanding Weather Patterns for Safer Hiking',
    excerpt:
      'Learn to read the signs and prepare for changing weather conditions on your outdoor adventures.',
    author: 'Miguel Cortez',
    date: 'January 22, 2023',
    readTime: '7 min read',
    category: 'Safety',
    image: weather,
    url: '/blog/understanding-weather-patterns',
  },
  {
    id: 8,
    title: 'Ultralight Backpacking: Is It Worth It?',
    excerpt:
      'The pros and cons of going ultralight, plus recommendations for reducing pack weight without sacrificing comfort.',
    author: 'Emma Williams',
    date: 'January 15, 2023',
    readTime: '6 min read',
    category: 'Gear',
    image: backpacking,
    url: '/blog/ultralight-backpacking',
  },
];

// Blog categories
const categories: Category[] = [
  { name: 'Gear', count: 24 },
  { name: 'Trails', count: 18 },
  { name: 'Tips', count: 15 },
  { name: 'Conservation', count: 9 },
  { name: 'Safety', count: 12 },
  { name: 'Photography', count: 7 },
  { name: 'Companions', count: 5 },
  { name: 'Camping', count: 10 },
];

// Blog post card component
interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105'>
      <div className='relative h-64'>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{
            objectFit: 'cover',
          }}
        />
        <div className='absolute top-4 left-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold'>
          {post.category}
        </div>
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-bold mb-3'>
          <Link
            href={post.url}
            className='text-white hover:text-yellow-400 transition-colors duration-200'
          >
            {post.title}
          </Link>
        </h3>
        <p className='text-gray-400 mb-4 line-clamp-2'>{post.excerpt}</p>
        <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
          <div className='flex items-center'>
            <Calendar className='h-4 w-4 mr-1' />
            <span>{post.date}</span>
          </div>
          <div className='flex items-center'>
            <Clock className='h-4 w-4 mr-1' />
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='relative w-8 h-8 rounded-full overflow-hidden mr-2'>
              {post.authorImage ? (
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <User className='h-8 w-8 p-1 bg-gray-700 text-gray-300' />
              )}
            </div>
            <span className='text-gray-400 text-sm'>{post.author}</span>
          </div>
          <Link
            href={post.url}
            className='text-yellow-400 hover:text-yellow-300 transition-colors duration-200 flex items-center'
          >
            <span className='mr-1 text-sm'>Read More</span>
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Blog() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className='relative h-screen' id='hero'>
        {/* Background Image - Only for hero section */}
        <div className='absolute inset-0 z-0'>
          <Image
            src={heroImage}
            alt='Mountain hiking blog background'
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
              { id: 1, label: 'Featured', active: true },
              { id: 2, label: 'Recent', active: false },
              { id: 3, label: 'Categories', active: false },
              { id: 4, label: 'Subscribe', active: false },
            ]}
          />

          {/* Hero Section */}
          <HeroSection
            subtitle='TRAIL INSIGHTS'
            title='Hiking Stories & Expert Advice'
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className='bg-gray-900 text-white'>
        <div className='container mx-auto px-4 space-y-12 md:space-y-20 py-2 md:py-16'>
          {/* Section 1: Featured Posts */}
          <section id='section-01' className='pt-8'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <div className='h-px w-16 bg-yellow-400 mr-4'></div>
                <span className='text-yellow-400 tracking-widest uppercase text-sm font-medium'>
                  01
                </span>
                <div className='h-px w-16 bg-yellow-400 ml-4'></div>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Featured Articles
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Dive into our most popular and informative hiking articles,
                curated to inspire your next adventure and enhance your outdoor
                experience.
              </p>
            </div>

            {/* Featured Post */}
            <div className='mb-12'>
              <ContentCard
                number='01'
                subtitle={featuredPosts[0].category.toUpperCase()}
                title={featuredPosts[0].title}
                description={featuredPosts[0].excerpt}
                buttonText='Read Full Article'
                buttonUrl={featuredPosts[0].url}
                imageSrc={featuredPosts[0].image}
                imageAlt={featuredPosts[0].title}
                imagePosition='right'
              />
              <div className='flex items-center justify-between max-w-2xl mt-4'>
                <div className='flex items-center'>
                  <div className='relative w-10 h-10 rounded-full overflow-hidden mr-3'>
                    {featuredPosts[0].authorImage ? (
                      <Image
                        src={featuredPosts[0].authorImage}
                        alt={featuredPosts[0].author}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    ) : (
                      <User className='h-10 w-10 p-2 bg-gray-700 text-gray-300' />
                    )}
                  </div>
                  <span className='text-gray-400'>
                    {featuredPosts[0].author}
                  </span>
                </div>
                <div className='flex items-center text-gray-400 space-x-4'>
                  <div className='flex items-center'>
                    <Calendar className='h-4 w-4 mr-1' />
                    <span>{featuredPosts[0].date}</span>
                  </div>
                  <div className='flex items-center'>
                    <Clock className='h-4 w-4 mr-1' />
                    <span>{featuredPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Featured Posts */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {featuredPosts.slice(1).map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </section>

          {/* Section 2: Recent Posts */}
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
                Recent Articles
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Stay up-to-date with our latest hiking insights, trail
                recommendations, and outdoor tips.
              </p>
            </div>

            {/* Recent Posts Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {recentPosts.slice(0, 3).map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
              {recentPosts.slice(3).map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            <div className='mt-12 text-center'>
              <Link
                href='/blog/archive'
                className='inline-flex items-center bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 py-3 px-6 rounded-lg transition-colors duration-200 group'
              >
                <span className='mr-2'>View All Articles</span>
                <ArrowRight className='h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200' />
              </Link>
            </div>
          </section>

          {/* Section 3: Categories and Search */}
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
                Explore By Category
              </h2>
              <p className='text-gray-400 max-w-3xl mx-auto'>
                Find articles that match your specific interests and needs.
              </p>
            </div>

            {/* Categories Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/blog/category/${category.name.toLowerCase()}`}
                  className='bg-gray-800 rounded-lg p-6 text-center transition-colors duration-200 hover:bg-gray-700'
                >
                  <div className='flex items-center justify-center mb-2'>
                    <Tag className='h-6 w-6 text-yellow-400' />
                  </div>
                  <h3 className='text-lg font-semibold mb-1'>
                    {category.name}
                  </h3>
                  <p className='text-gray-400 text-sm'>
                    {category.count} articles
                  </p>
                </Link>
              ))}
            </div>

            {/* Search Bar */}
            <div className='mt-12 max-w-xl mx-auto'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search articles...'
                  className='w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-3 px-4 pr-12 text-white focus:outline-none focus:border-yellow-400 transition-colors duration-200'
                />
                <button className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors duration-200'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* Section 4: Newsletter Subscription */}
          <section id='section-04' className='pt-8'>
            <div className='bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg p-8 md:p-12'>
              <div className='max-w-4xl mx-auto'>
                <div className='flex flex-col md:flex-row md:items-center'>
                  <div className='md:w-2/3 mb-8 md:mb-0 md:pr-8'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
                      Subscribe to Our Newsletter
                    </h2>
                    <p className='text-gray-900 mb-0 text-lg'>
                      Get our latest articles, trail reviews, and outdoor tips
                      delivered straight to your inbox. Join thousands of hiking
                      enthusiasts who never miss our weekly updates.
                    </p>
                  </div>
                  <div className='md:w-1/3'>
                    <form className='space-y-4'>
                      <input
                        type='email'
                        placeholder='Your email address'
                        className='w-full bg-white border-0 rounded-lg py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-shadow duration-200'
                        required
                      />
                      <button
                        type='submit'
                        className='w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition-colors duration-200'
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className='text-sm text-gray-800 mt-2'>
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>
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
