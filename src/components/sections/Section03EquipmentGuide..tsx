// components/sections/Section03EquipmentGuide.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, FileText, Star } from 'lucide-react';
import hikingEquipments from '../../public/images/hiking-equipments.jpg';

export default function Section03EquipmentGuide() {
  return (
    <div>
      <div className='relative rounded-lg overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <Image
            src={hikingEquipments}
            alt='Hiking equipment laid out'
            fill
            className='object-cover'
            style={{ filter: 'brightness(0.4)' }}
          />
        </div>

        {/* Content */}
        <div className='relative z-10 p-8 md:p-16 text-center'>
          <div className='max-w-3xl mx-auto'>
            <div className='inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-medium text-sm mb-6'>
              FREE RESOURCE
            </div>

            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Complete Hiking Equipment Guide
            </h2>

            <p className='text-gray-200 mb-8 text-lg'>
              Download our comprehensive guide to building your perfect hiking
              kit. From essential gear to luxury items, we cover everything you
              need for a safe and enjoyable adventure.
            </p>

            <div className='flex flex-col sm:flex-row justify-center gap-4 mb-8'>
              <div className='bg-gray-800 bg-opacity-80 p-4 rounded-lg flex items-center'>
                <FileText className='h-6 w-6 text-yellow-400 mr-3' />
                <div className='text-left'>
                  <span className='block text-white font-medium'>
                    48 Pages of Content
                  </span>
                  <span className='text-gray-300 text-sm'>
                    Detailed guides & illustrations
                  </span>
                </div>
              </div>

              <div className='bg-gray-800 bg-opacity-80 p-4 rounded-lg flex items-center'>
                <Star className='h-6 w-6 text-yellow-400 mr-3' />
                <div className='text-left'>
                  <span className='block text-white font-medium'>
                    Expert Recommendations
                  </span>
                  <span className='text-gray-300 text-sm'>
                    From professional trail guides
                  </span>
                </div>
              </div>

              <div className='bg-gray-800 bg-opacity-80 p-4 rounded-lg flex items-center'>
                <Download className='h-6 w-6 text-yellow-400 mr-3' />
                <div className='text-left'>
                  <span className='block text-white font-medium'>
                    Instant Access
                  </span>
                  <span className='text-gray-300 text-sm'>
                    PDF download - 8.5 MB
                  </span>
                </div>
              </div>
            </div>

            <Link
              href='/equipment/guide-download'
              className='inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-md transition-colors duration-200'
            >
              <span className='mr-2'>Get Your Free Guide</span>
              <ArrowRight className='h-5 w-5' />
            </Link>
          </div>
        </div>
      </div>

      {/* Guide Preview */}
      <div className='mt-16'>
        <div className='text-center mb-12'>
          <h3 className='text-2xl font-bold mb-4'>
            What&apos;s Inside the Guide
          </h3>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Our comprehensive equipment guide covers everything you need to know
            before hitting the trails
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Topic 1 */}
          <div className='bg-gray-800 rounded-lg p-6'>
            <div className='text-yellow-400 font-bold text-xl mb-4'>01</div>
            <h4 className='text-xl font-bold mb-3'>Essential Gear Checklist</h4>
            <p className='text-gray-300 mb-3'>
              Complete packing lists organized by trip duration, from day hikes
              to week-long expeditions.
            </p>
            <ul className='space-y-2 text-gray-400 text-sm mb-4'>
              <li className='flex items-start'>
                <span className='text-yellow-400 mr-2'>•</span>
                Day hike essentials
              </li>
              <li className='flex items-start'>
                <span className='text-yellow-400 mr-2'>•</span>
                Weekend backpacking gear
              </li>
              <li className='flex items-start'>
                <span className='text-yellow-400 mr-2'>•</span>
                Extended trip equipment
              </li>
            </ul>
          </div>

          {/* Topic 2 */}
          <div className='bg-gray-800 rounded-lg p-6'>
            <div className='text-yellow-400 font-bold text-xl mb-4'>02</div>
            <h4 className='text-xl font-bold mb-3'>Budget Recommendations</h4>
            <p className='text-gray-300 mb-3'>
              Get the best gear for your budget with our tiered recommendations
              for every price point.
            </p>
            <ul className='space-y-2 text-gray-400 text-sm mb-4'>
              <li className='flex items-start'>
                <span className='text-yellow-400 mr-2'>•</span>
                Entry-level options
              </li>
              <li className='flex items-start'>
                <span className='text-yellow-400 mr-2'>•</span>
                Mid-range quality gear
              </li>
              <li className='flex items-start'>
                <span className='text-yellow-400 mr-2'>•</span>
                Premium performance equipment
              </li>
            </ul>
          </div>

          {/* Topic 3 */}
          <div className='bg-gray-800 rounded-lg p-6'>
            <div className='text-yellow-400 font-bold text-xl mb-4'>03</div>
            <h4 className='text-xl font-bold mb-3'>Care & Maintenance</h4>
            <p className='text-gray-300 mb-3'>
              Extend the life of your gear with proper care techniques and
              maintenance schedules.
            </p>
            <ul className='space-y-2 text-gray-400 text-sm mb-4'>
              <li className='flex items-start'>
                <span className='text-yellow-400 mr-2'>•</span>
                Cleaning procedures
              </li>
              <li className='flex items-start'>
                <span className='text-yellow-400 mr-2'>•</span>
                Storage best practices
              </li>
              <li className='flex items-start'>
                <span className='text-yellow-400 mr-2'>•</span>
                Repair techniques
              </li>
            </ul>
          </div>
        </div>

        <div className='text-center mt-12'>
          <Link
            href='/equipment/guide-preview'
            className='inline-flex items-center text-white hover:text-yellow-400 transition-colors duration-200 group'
          >
            <span className='mr-2'>Preview Guide Contents</span>
            <ArrowRight className='h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200' />
          </Link>
        </div>
      </div>
    </div>
  );
}
