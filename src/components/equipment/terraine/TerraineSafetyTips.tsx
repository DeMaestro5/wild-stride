// components/equipment/terrain/TerrainSafetyTips.tsx
import React from 'react';
import Link from 'next/link';
import {
  CloudLightning,
  Compass,
  Mountain,
  Users,
  Droplet,
  AlertTriangle,
  Download,
} from 'lucide-react';
import { TerrainSafetyTips as TerrainSafetyTipsType } from '../../../types/terraineTypes';

type TerrainSafetyTipsProps = TerrainSafetyTipsType;

const TerrainSafetyTips: React.FC<TerrainSafetyTipsProps> = ({
  title,
  description,
  tips,
  linkText,
  linkUrl,
}) => {
  // Get icon component based on icon name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'cloud-lightning':
        return <CloudLightning className='h-6 w-6' />;
      case 'compass':
        return <Compass className='h-6 w-6' />;
      case 'mountain':
        return <Mountain className='h-6 w-6' />;
      case 'users':
        return <Users className='h-6 w-6' />;
      case 'droplet':
        return <Droplet className='h-6 w-6' />;
      case 'alert-triangle':
        return <AlertTriangle className='h-6 w-6' />;
      default:
        return <AlertTriangle className='h-6 w-6' />;
    }
  };

  return (
    <div>
      <div className='text-center mb-12'>
        <div className='flex items-center justify-center mb-4'>
          <div className='h-px w-16 bg-green-500 mr-4'></div>
          <span className='text-green-500 tracking-widest uppercase text-sm font-medium'>
            STAY SAFE
          </span>
          <div className='h-px w-16 bg-green-500 ml-4'></div>
        </div>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>{title}</h2>
        <p className='text-gray-400 max-w-3xl mx-auto'>{description}</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {tips.map((tip, index) => (
          <div
            key={index}
            className='bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300'
          >
            <div className={`${tip.color} p-4 flex items-center`}>
              <div className='mr-3 text-white'>{getIcon(tip.icon)}</div>
              <h3 className='text-xl font-bold text-white'>{tip.title}</h3>
            </div>
            <div className='p-5'>
              <p className='text-gray-300'>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-10 text-center'>
        <Link
          href={linkUrl}
          className='inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-md transition duration-300'
        >
          <Download className='mr-2 h-5 w-5' />
          <span>{linkText}</span>
        </Link>
      </div>
    </div>
  );
};

export default TerrainSafetyTips;
