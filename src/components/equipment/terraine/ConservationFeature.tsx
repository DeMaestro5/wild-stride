// components/equipment/terrain/ConservationFeature.tsx
import React from 'react';
import Link from 'next/link';
import { Leaf, Recycle, Route, FlowerIcon, Footprints } from 'lucide-react';
import { ConservationFeatureData } from '../../../types/terraineTypes';

type ConservationFeatureProps = ConservationFeatureData;

const ConservationFeature: React.FC<ConservationFeatureProps> = ({
  title,
  description,
  stats,
  initiatives,
  callToAction,
}) => {
  // Get icon component based on icon name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'path':
        return <Route className='h-5 w-5' />;
      case 'flower':
        return <FlowerIcon className='h-5 w-5' />;
      case 'recycle':
        return <Recycle className='h-5 w-5' />;
      case 'footprint':
        return <Footprints className='h-5 w-5' />;
      default:
        return <Leaf className='h-5 w-5' />;
    }
  };

  return (
    <div className='text-white'>
      <div className='mb-8 text-center'>
        <div className='inline-block p-3 rounded-full bg-green-800 mb-4'>
          <Leaf className='h-6 w-6 text-green-300' />
        </div>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>{title}</h2>
        <p className='text-gray-300 max-w-3xl mx-auto'>{description}</p>
      </div>

      {/* Conservation Stats */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} bg-opacity-20 p-6 rounded-lg text-center`}
          >
            <div
              className={`text-3xl font-bold mb-2 ${stat.color.replace(
                'bg-',
                'text-'
              )}`}
            >
              {stat.value}
            </div>
            <p className='text-gray-300 text-sm'>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Conservation Initiatives */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'>
        {initiatives.map((initiative, index) => (
          <div
            key={index}
            className='bg-gray-800 bg-opacity-50 p-6 rounded-lg flex'
          >
            <div className='mr-4 p-2 bg-green-800 rounded-lg self-start'>
              {getIcon(initiative.icon)}
            </div>
            <div>
              <h3 className='text-xl font-bold mb-2'>{initiative.title}</h3>
              <p className='text-gray-300 text-sm mb-4'>
                {initiative.description}
              </p>
              <Link
                href={initiative.actionUrl}
                className='text-green-400 text-sm hover:text-green-300 inline-flex items-center'
              >
                Learn more <span className='ml-1'>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className='bg-green-900 bg-opacity-30 p-8 rounded-lg text-center'>
        <h3 className='text-2xl font-bold mb-3'>{callToAction.title}</h3>
        <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
          {callToAction.description}
        </p>
        <Link
          href={callToAction.buttonUrl}
          className='inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300'
        >
          {callToAction.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default ConservationFeature;
