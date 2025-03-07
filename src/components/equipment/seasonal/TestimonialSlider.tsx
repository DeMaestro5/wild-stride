// components/ui/TestimonialSlider.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';
import { Testimonial } from '../../../types/seasonTypes';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number; // in milliseconds
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  autoPlayInterval = 6000, // 6 seconds default
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlayInterval) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, testimonials.length]);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Generate stars based on rating
  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className='h-5 w-5 text-yellow-400 fill-current'
        />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf key='half' className='h-5 w-5 text-yellow-400 fill-current' />
      );
    }

    return stars;
  };

  return (
    <div className='relative bg-gray-800 rounded-xl overflow-hidden shadow-xl'>
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className='absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full transition-all duration-200'
        aria-label='Previous testimonial'
      >
        <ChevronLeft className='h-6 w-6' />
      </button>

      <button
        onClick={handleNext}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full transition-all duration-200'
        aria-label='Next testimonial'
      >
        <ChevronRight className='h-6 w-6' />
      </button>

      {/* Testimonial Content */}
      <div className='p-8 md:p-12'>
        <div className='relative'>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                index === activeIndex
                  ? 'opacity-100'
                  : 'opacity-0 absolute inset-0'
              }`}
            >
              <div className='flex flex-col items-center text-center'>
                {/* Quote mark */}
                <div className='text-gray-600 text-7xl font-serif leading-none mb-4'></div>

                {/* Testimonial quote */}
                <p className='text-gray-300 text-lg md:text-xl italic mb-8 max-w-3xl'>
                  {testimonial.quote}
                </p>

                {/* Rating stars */}
                <div className='flex mb-6'>
                  {renderRatingStars(testimonial.rating)}
                </div>

                {/* Customer info */}
                <div className='flex flex-col items-center'>
                  <div className='w-16 h-16 rounded-full overflow-hidden mb-4 relative'>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h4 className='text-white font-bold text-lg'>
                    {testimonial.name}
                  </h4>
                  <p className='text-gray-400'>{testimonial.location}</p>

                  {testimonial.productReference && (
                    <p className='text-yellow-400 mt-2 text-sm'>
                      Used: {testimonial.productReference}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className='flex justify-center pb-6'>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`mx-1 w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-yellow-400 w-6' : 'bg-gray-600'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
