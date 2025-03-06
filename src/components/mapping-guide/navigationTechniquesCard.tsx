// components/mapping-guide/navigationTechniquesCard.tsx
import { FC } from 'react';

interface Step {
  title: string;
  description: string;
}

interface NavigationTechniquesCardProps {
  name: string;
  description: string;
  icon: string;
  steps: Step[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | string; // Allow string type to accommodate any string values
}

const NavigationTechniquesCard: FC<NavigationTechniquesCardProps> = ({
  name,
  description,
  icon,
  steps,
  difficulty,
}) => {
  // Define color mapping with proper type annotation
  const difficultyColorMap: Record<string, string> = {
    Beginner: 'bg-green-500',
    Intermediate: 'bg-yellow-500',
    Advanced: 'bg-red-500',
  };

  // Get the color based on the difficulty or use a fallback
  const difficultyColor = difficultyColorMap[difficulty] || 'bg-blue-500';

  return (
    <div className='bg-slate-800 rounded-xl overflow-hidden shadow-xl border border-slate-700'>
      {/* Header */}
      <div className='bg-slate-700 p-5 flex justify-between items-center'>
        <div className='flex items-center'>
          <span className='text-2xl mr-3'>
            {/* This would be an actual icon component in practice */}
            {icon === 'compass' && '🧭'}
            {icon === 'sun' && '☀️'}
            {icon === 'map' && '🗺️'}
            {icon === 'stars' && '✨'}
            {icon === 'terrain' && '⛰️'}
            {/* Add fallback */}
            {!['compass', 'sun', 'map', 'stars', 'terrain'].includes(icon) &&
              '🧠'}
          </span>
          <h3 className='text-xl font-bold'>{name}</h3>
        </div>
        <span
          className={`${difficultyColor} text-slate-900 text-xs font-bold px-3 py-1 rounded-full`}
        >
          {difficulty}
        </span>
      </div>

      {/* Content */}
      <div className='p-6'>
        <p className='text-gray-300 mb-6'>{description}</p>

        {/* Steps */}
        <h4 className='text-emerald-500 font-semibold text-lg mb-4'>
          How It Works
        </h4>
        <ol className='space-y-5 relative border-l border-slate-600 pl-6 ml-3'>
          {steps.map((step, idx) => (
            <li key={idx} className='relative'>
              {/* Step number circle */}
              <div className='absolute -left-9 flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full text-slate-900 font-bold text-sm'>
                {idx + 1}
              </div>
              <div>
                <h5 className='font-semibold text-white mb-1'>{step.title}</h5>
                <p className='text-gray-400 text-sm'>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default NavigationTechniquesCard;
