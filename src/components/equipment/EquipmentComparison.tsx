// components/ui/EquipmentComparison.tsx
import { Star } from 'lucide-react';

// Define comparison item type
export interface ComparisonItem {
  id: number | string;
  name: string;
  price: string;
  rating: number;
  weightKg?: number; // Make weightKg optional with ?
  features: string[];
  bestFor: string;
  waterproof: boolean;
  durability: 'Low' | 'Medium' | 'High';
  // Add potential boot-specific properties
  temperature?: string;
  insulation?: string;
}

interface EquipmentComparisonProps {
  category: string;
  items: ComparisonItem[];
  // Add a parameter to specify which fields to display
  comparisonFields?: string[];
}

export default function EquipmentComparison({
  category,
  items,
  comparisonFields = [
    'rating',
    'weight',
    'bestFor',
    'waterproof',
    'durability',
    'features',
  ],
}: EquipmentComparisonProps) {
  // Helper function to check if a field should be shown
  const shouldShowField = (field: string) => comparisonFields.includes(field);

  return (
    <div className='w-full overflow-x-auto pb-4'>
      <table className='min-w-full divide-y divide-gray-700'>
        <thead>
          <tr>
            <th
              scope='col'
              className='px-4 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
            >
              {category}
            </th>
            {items.map((item) => (
              <th key={item.id} scope='col' className='px-4 py-5 text-center'>
                <div className='text-white font-bold text-base'>
                  {item.name}
                </div>
                <div className='text-yellow-400 mt-1'>{item.price}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-700'>
          {/* Rating Row */}
          {shouldShowField('rating') && (
            <tr className='bg-gray-800'>
              <td className='px-4 py-4 text-sm text-gray-300'>Rating</td>
              {items.map((item) => (
                <td key={`rating-${item.id}`} className='px-4 py-4 text-center'>
                  <div className='flex items-center justify-center'>
                    <div className='flex text-yellow-400'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(item.rating)
                              ? 'fill-current'
                              : 'stroke-current fill-none'
                          }`}
                        />
                      ))}
                    </div>
                    <span className='ml-2 text-sm text-gray-400'>
                      {item.rating}/5
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          )}

          {/* Weight Row */}
          {shouldShowField('weight') && (
            <tr>
              <td className='px-4 py-4 text-sm text-gray-300'>Weight</td>
              {items.map((item) => (
                <td
                  key={`weight-${item.id}`}
                  className='px-4 py-4 text-center text-white'
                >
                  {item.weightKg ? `${item.weightKg} kg` : 'N/A'}
                </td>
              ))}
            </tr>
          )}

          {/* Temperature Row (for boots) */}
          {shouldShowField('temperature') && (
            <tr className='bg-gray-800'>
              <td className='px-4 py-4 text-sm text-gray-300'>
                Temperature Range
              </td>
              {items.map((item) => (
                <td
                  key={`temperature-${item.id}`}
                  className='px-4 py-4 text-center text-white'
                >
                  {item.temperature || 'N/A'}
                </td>
              ))}
            </tr>
          )}

          {/* Insulation Row (for boots) */}
          {shouldShowField('insulation') && (
            <tr>
              <td className='px-4 py-4 text-sm text-gray-300'>Insulation</td>
              {items.map((item) => (
                <td
                  key={`insulation-${item.id}`}
                  className='px-4 py-4 text-center text-white'
                >
                  {item.insulation || 'None'}
                </td>
              ))}
            </tr>
          )}

          {/* Best For Row */}
          {shouldShowField('bestFor') && (
            <tr className={shouldShowField('insulation') ? '' : 'bg-gray-800'}>
              <td className='px-4 py-4 text-sm text-gray-300'>Best For</td>
              {items.map((item) => (
                <td
                  key={`bestfor-${item.id}`}
                  className='px-4 py-4 text-center text-white'
                >
                  {item.bestFor}
                </td>
              ))}
            </tr>
          )}

          {/* Waterproof Row */}
          {shouldShowField('waterproof') && (
            <tr className={shouldShowField('bestFor') ? '' : 'bg-gray-800'}>
              <td className='px-4 py-4 text-sm text-gray-300'>Waterproof</td>
              {items.map((item) => (
                <td
                  key={`waterproof-${item.id}`}
                  className='px-4 py-4 text-center'
                >
                  <span
                    className={`inline-flex px-2 py-1 text-xs rounded-full ${
                      item.waterproof
                        ? 'bg-green-900 text-green-300'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {item.waterproof ? 'Yes' : 'No'}
                  </span>
                </td>
              ))}
            </tr>
          )}

          {/* Durability Row */}
          {shouldShowField('durability') && (
            <tr className={shouldShowField('waterproof') ? 'bg-gray-800' : ''}>
              <td className='px-4 py-4 text-sm text-gray-300'>Durability</td>
              {items.map((item) => (
                <td
                  key={`durability-${item.id}`}
                  className='px-4 py-4 text-center'
                >
                  <span
                    className={`inline-flex px-2 py-1 text-xs rounded-full ${
                      item.durability === 'High'
                        ? 'bg-green-900 text-green-300'
                        : item.durability === 'Medium'
                        ? 'bg-yellow-900 text-yellow-300'
                        : 'bg-red-900 text-red-300'
                    }`}
                  >
                    {item.durability}
                  </span>
                </td>
              ))}
            </tr>
          )}

          {/* Features Row */}
          {shouldShowField('features') && (
            <tr>
              <td className='px-4 py-4 text-sm text-gray-300'>Key Features</td>
              {items.map((item) => (
                <td
                  key={`features-${item.id}`}
                  className='px-4 py-4 text-center'
                >
                  <ul className='text-sm text-white list-disc list-inside text-left'>
                    {item.features.map((feature, idx) => (
                      <li key={idx} className='mb-1'>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
