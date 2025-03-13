// components/equipment/terrain/TestimonialSlider.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Testimonial } from '../../../types/terraineTypes';

type TestimonialSliderProps = {
  testimonials: Testimonial[];
};

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div className='bg-gray-800 rounded-xl overflow-hidden shadow-lg'>
      <div className='flex flex-col md:flex-row'>
        {/* Navigation and Info */}
        <div className='md:w-1/3 bg-gray-900 p-6'>
          <div className='flex items-center mb-8'>
            <Quote className='h-8 w-8 text-green-500 mr-3' />
            <h3 className='text-xl font-bold text-white'>Customer Stories</h3>
          </div>

          <div className='mb-8 hidden md:block'>
            <p className='text-gray-400 text-sm mb-4'>
              Browse through experiences from fellow hikers who have tested our
              recommended gear in real-world conditions.
            </p>

            <div className='space-y-1 text-sm text-gray-400'>
              <p>
                <span className='font-medium text-white'>
                  Experience Level:
                </span>{' '}
                {currentTestimonial.hikingExperience}
              </p>
              <p>
                <span className='font-medium text-white'>Location:</span>{' '}
                {currentTestimonial.hikeLocation}
              </p>
              <p>
                <span className='font-medium text-white'>Date:</span>{' '}
                {currentTestimonial.date}
              </p>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className='flex items-center justify-between mt-auto'>
            <div className='flex space-x-1'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === activeIndex ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className='flex space-x-2'>
              <button
                onClick={goToPrevious}
                className='bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors'
                aria-label='Previous testimonial'
              >
                <ChevronLeft className='h-5 w-5 text-white' />
              </button>
              <button
                onClick={goToNext}
                className='bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors'
                aria-label='Next testimonial'
              >
                <ChevronRight className='h-5 w-5 text-white' />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className='md:w-2/3 p-8'>
          <div className='flex items-start mb-6'>
            <div className='relative h-14 w-14 rounded-full overflow-hidden mr-4'>
              <Image
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                fill
                sizes='56px'
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <h4 className='text-xl font-bold text-white'>
                {currentTestimonial.name}
              </h4>
              <p className='text-gray-400'>{currentTestimonial.location}</p>
              <div className='flex mt-1'>
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-4 w-4 ${
                      index < currentTestimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className='mb-6 md:hidden'>
            <div className='space-y-1 text-sm text-gray-400'>
              <p>
                <span className='font-medium text-white'>
                  Experience Level:
                </span>{' '}
                {currentTestimonial.hikingExperience}
              </p>
              <p>
                <span className='font-medium text-white'>Location:</span>{' '}
                {currentTestimonial.hikeLocation}
              </p>
              <p>
                <span className='font-medium text-white'>Date:</span>{' '}
                {currentTestimonial.date}
              </p>
            </div>
          </div>

          <blockquote className='text-gray-300 italic mb-6'>
            &ldquo;{currentTestimonial.text}&rdquo;
          </blockquote>

          {currentTestimonial.purchasedItems &&
            currentTestimonial.purchasedItems.length > 0 && (
              <div>
                <p className='text-sm text-white font-medium mb-2'>
                  Purchased Items:
                </p>
                <div className='flex flex-wrap gap-2'>
                  {currentTestimonial.purchasedItems.map((item, index) => (
                    <span
                      key={index}
                      className='bg-gray-700 text-green-400 text-xs px-3 py-1 rounded-full'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
