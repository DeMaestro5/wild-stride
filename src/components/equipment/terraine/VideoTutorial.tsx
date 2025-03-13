// components/equipment/terrain/VideoTutorial.tsx
import React from 'react';
import Image from 'next/image';
import { Play, Clock } from 'lucide-react';
import { VideoTutorialData } from '../../../types/terraineTypes';

type VideoTutorialProps = VideoTutorialData;

const VideoTutorial: React.FC<VideoTutorialProps> = ({
  title,
  description,
  thumbnailUrl,
  duration,
  expert,
}) => {
  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg'>
      <div className='flex flex-col md:flex-row'>
        {/* Video Thumbnail */}
        <div className='md:w-2/3 relative'>
          <div className='relative h-[300px] md:h-full w-full group cursor-pointer'>
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              sizes='(max-width: 768px) 100vw, 66vw'
              style={{ objectFit: 'cover' }}
            />
            <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300'>
              <div className='h-16 w-16 rounded-full bg-green-600 flex items-center justify-center group-hover:bg-green-500 transition-colors'>
                <Play className='h-8 w-8 text-white ml-1' />
              </div>
            </div>
            <div className='absolute bottom-4 right-4 bg-black bg-opacity-70 px-3 py-1 rounded-md flex items-center'>
              <Clock className='h-4 w-4 text-white mr-1' />
              <span className='text-sm text-white'>{duration}</span>
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className='md:w-1/3 p-6 flex flex-col'>
          <h3 className='text-xl font-bold text-white mb-3'>{title}</h3>
          <p className='text-gray-400 text-sm mb-6 flex-grow'>{description}</p>

          <div className='mt-auto'>
            <div className='text-sm text-gray-400 mb-3'>Presented by:</div>
            <div className='flex items-center'>
              <div className='relative h-10 w-10 rounded-full overflow-hidden mr-3'>
                <Image
                  src={expert.avatar}
                  alt={expert.name}
                  fill
                  sizes='40px'
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <div className='font-medium text-white'>{expert.name}</div>
                <div className='text-xs text-gray-400'>{expert.title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorial;
