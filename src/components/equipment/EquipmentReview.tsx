// components/ui/EquipmentReview.tsx
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Star, ChevronDown, ChevronUp, User } from 'lucide-react';

// Define Equipment Review type
export interface EquipmentReviewProps {
  productName: string;
  productImage: string | StaticImageData;
  category: string;
  price: string;
  rating: number;
  reviewDate: string;
  reviewText: string;
  prosList: string[];
  consList: string[];
  verdict: string;
  reviewerName: string;
  reviewerImage: string | StaticImageData;
  reviewerTitle: string;
}

export default function EquipmentReview({
  productName,
  productImage,
  category,
  price,
  rating,
  reviewDate,
  reviewText,
  prosList,
  consList,
  verdict,
  reviewerName,
  reviewerImage,
  reviewerTitle,
}: EquipmentReviewProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg'>
      {/* Product Image and Header */}
      <div className='relative h-64 md:h-80'>
        <Image
          src={productImage}
          alt={productName}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
          className='object-cover'
        />

        {/* Overlay with product info */}
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-6'>
          <div className='mb-2'>
            <span className='text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded-full font-medium'>
              {category}
            </span>
            <span className='ml-2 text-xs bg-gray-700 text-white px-2 py-1 rounded-full font-medium'>
              Expert Review
            </span>
          </div>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-2'>
            {productName}
          </h2>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='flex text-yellow-400 mr-2'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(rating)
                        ? 'fill-current'
                        : 'stroke-current fill-none'
                    }`}
                  />
                ))}
              </div>
              <span className='text-white'>{rating}/5</span>
            </div>
            <span className='text-yellow-400 font-bold'>{price}</span>
          </div>
        </div>
      </div>

      {/* Review Content */}
      <div className='p-6'>
        <div className='flex justify-between items-center mb-4'>
          <span className='text-gray-400 text-sm'>
            Reviewed on {reviewDate}
          </span>

          {/* Reviewer Info */}
          <div className='flex items-center'>
            <div className='relative h-8 w-8 rounded-full overflow-hidden mr-2'>
              {reviewerImage ? (
                <Image
                  src={reviewerImage}
                  alt={reviewerName}
                  fill
                  sizes='32px'
                  className='object-cover'
                />
              ) : (
                <div className='h-full w-full flex items-center justify-center bg-gray-700'>
                  <User className='h-5 w-5 text-gray-400' />
                </div>
              )}
            </div>
            <div>
              <p className='text-white text-sm font-medium'>{reviewerName}</p>
              <p className='text-gray-400 text-xs'>{reviewerTitle}</p>
            </div>
          </div>
        </div>

        {/* Review Text - Expandable */}
        <div
          className={`relative ${expanded ? '' : 'max-h-32 overflow-hidden'}`}
        >
          <p className='text-gray-300 mb-4 leading-relaxed'>{reviewText}</p>

          {/* Gradient Overlay when collapsed */}
          {!expanded && (
            <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800 to-transparent'></div>
          )}
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className='text-yellow-400 hover:text-yellow-300 flex items-center text-sm font-medium mt-2 mb-6'
        >
          {expanded ? (
            <>
              <span>Read Less</span>
              <ChevronUp className='h-4 w-4 ml-1' />
            </>
          ) : (
            <>
              <span>Read More</span>
              <ChevronDown className='h-4 w-4 ml-1' />
            </>
          )}
        </button>

        {/* Pros and Cons */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
          {/* Pros */}
          <div>
            <h3 className='text-lg font-medium mb-3 text-green-400 flex items-center'>
              <span className='h-2 w-2 bg-green-400 rounded-full mr-2'></span>
              Pros
            </h3>
            <ul className='space-y-2'>
              {prosList.map((pro, index) => (
                <li
                  key={index}
                  className='text-gray-300 text-sm flex items-start'
                >
                  <span className='mr-2 text-green-400'>+</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div>
            <h3 className='text-lg font-medium mb-3 text-red-400 flex items-center'>
              <span className='h-2 w-2 bg-red-400 rounded-full mr-2'></span>
              Cons
            </h3>
            <ul className='space-y-2'>
              {consList.map((con, index) => (
                <li
                  key={index}
                  className='text-gray-300 text-sm flex items-start'
                >
                  <span className='mr-2 text-red-400'>-</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verdict */}
        <div className='border-t border-gray-700 pt-6'>
          <h3 className='text-lg font-medium mb-3 text-white'>Final Verdict</h3>
          <p className='text-gray-300'>{verdict}</p>
        </div>
      </div>
    </div>
  );
}
