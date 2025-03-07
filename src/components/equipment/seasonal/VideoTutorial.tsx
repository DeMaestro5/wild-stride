// components/ui/VideoTutorial.tsx
'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Play, Pause, Volume2, VolumeX, Maximize, X } from 'lucide-react';

interface Expert {
  name: string;
  title: string;
  avatar: string | StaticImageData;
}

interface VideoTutorialProps {
  title: string;
  description: string;
  videoId: string;
  thumbnailUrl: string | StaticImageData;
  duration: string;
  expert: Expert;
}

const VideoTutorial: React.FC<VideoTutorialProps> = ({
  title,
  description,
  thumbnailUrl,
  duration,
  expert,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // This would normally interact with an actual video player
  // For this example, we'll just toggle the state
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className='bg-gray-800 rounded-xl overflow-hidden shadow-lg'>
      <div className='relative'>
        {/* Video Thumbnail/Player */}
        <div className='aspect-video relative overflow-hidden'>
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className={isPlaying ? 'opacity-0' : 'opacity-100'}
          />

          {/* Play button overlay (only shown when not playing) */}
          {!isPlaying && (
            <div
              className='absolute inset-0 flex items-center justify-center cursor-pointer'
              onClick={togglePlay}
            >
              <div className='w-20 h-20 rounded-full bg-yellow-500 bg-opacity-90 flex items-center justify-center'>
                <Play className='h-10 w-10 text-gray-900' fill='currentColor' />
              </div>
            </div>
          )}

          {/* Video duration badge */}
          <div className='absolute bottom-4 right-4 bg-black bg-opacity-70 px-2 py-1 rounded text-white text-sm'>
            {duration}
          </div>

          {/* Expert badge */}
          <div className='absolute top-4 left-4 bg-black bg-opacity-70 px-3 py-2 rounded-full flex items-center'>
            <div className='w-8 h-8 relative rounded-full overflow-hidden mr-2'>
              <Image
                src={expert.avatar}
                alt={expert.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <p className='text-white text-xs font-medium'>{expert.name}</p>
              <p className='text-gray-300 text-xs'>{expert.title}</p>
            </div>
          </div>

          {/* Video controls (shown on hover or when playing) */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ${
              isPlaying ? 'opacity-100' : ''
            }`}
          >
            <div className='flex items-center justify-between'>
              <button
                onClick={togglePlay}
                className='text-white hover:text-yellow-400 transition-colors'
              >
                {isPlaying ? (
                  <Pause className='h-5 w-5' />
                ) : (
                  <Play className='h-5 w-5' />
                )}
              </button>

              <div className='flex items-center space-x-3'>
                <button
                  onClick={toggleMute}
                  className='text-white hover:text-yellow-400 transition-colors'
                >
                  {isMuted ? (
                    <VolumeX className='h-5 w-5' />
                  ) : (
                    <Volume2 className='h-5 w-5' />
                  )}
                </button>

                <button
                  onClick={toggleFullScreen}
                  className='text-white hover:text-yellow-400 transition-colors'
                >
                  {isFullScreen ? (
                    <X className='h-5 w-5' />
                  ) : (
                    <Maximize className='h-5 w-5' />
                  )}
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className='w-full h-1 bg-gray-600 rounded-full mt-3'>
              <div
                className='h-full bg-yellow-500 rounded-full'
                style={{ width: isPlaying ? '35%' : '0%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-6'>
        <h3 className='text-xl font-bold text-white mb-2'>{title}</h3>
        <p className='text-gray-300'>{description}</p>
      </div>
    </div>
  );
};

export default VideoTutorial;
