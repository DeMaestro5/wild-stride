// components/equipment/terrain/TerrainEquipmentGuide.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import {
  Download,
  Layers,
  Calendar,
  Wrench,
  DollarSign,
  Feather,
  RefreshCw,
  Users,
  CheckSquare,
} from 'lucide-react';
import { GuideFeature } from '../../../types/terraineTypes';

type TerrainEquipmentGuideProps = {
  title: string;
  description: string;
  coverImage: string | StaticImageData;
  downloadUrl: string;
  features: GuideFeature[];
};

const TerrainEquipmentGuide: React.FC<TerrainEquipmentGuideProps> = ({
  title,
  description,
  coverImage,
  downloadUrl,
  features,
}) => {
  // Get icon component based on icon name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'layers':
        return <Layers className='h-5 w-5' />;
      case 'calendar':
        return <Calendar className='h-5 w-5' />;
      case 'tool':
        return <Wrench className='h-5 w-5' />;
      case 'dollar-sign':
        return <DollarSign className='h-5 w-5' />;
      case 'feather':
        return <Feather className='h-5 w-5' />;
      case 'refresh-cw':
        return <RefreshCw className='h-5 w-5' />;
      case 'users':
        return <Users className='h-5 w-5' />;
      case 'check-square':
        return <CheckSquare className='h-5 w-5' />;
      default:
        return <Layers className='h-5 w-5' />;
    }
  };

  return (
    <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl'>
      <div className='p-8 md:p-12'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          {/* Guide Cover Image */}
          <div className='md:w-1/3'>
            <div className='relative h-80 w-full rounded-lg overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500'>
              <Image
                src={coverImage}
                alt={title}
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Guide Content */}
          <div className='md:w-2/3'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              {title}
            </h2>
            <p className='text-gray-300 mb-6'>{description}</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
              {features.slice(0, 6).map((feature, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <div className='text-green-500 mt-1'>
                    {getIcon(feature.icon)}
                  </div>
                  <div>
                    <h4 className='text-white font-medium'>{feature.title}</h4>
                    <p className='text-gray-400 text-sm'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={downloadUrl}
              className='inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition duration-300'
            >
              <Download className='mr-2 h-5 w-5' />
              <span>Download Free Guide</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerrainEquipmentGuide;
