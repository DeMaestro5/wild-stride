// components/equipment/EquipmentComparison.tsx
import { Star } from 'lucide-react';

// Update ComparisonItem to be more compatible with BootComparisonItem
export interface ComparisonItem {
  id: string;
  name: string;
  brand: string;
  price: number; // Changed from string to number
  rating: number;
  reviewCount?: number;
  features: string[];
  bestFor: string;
  waterproof: string; // Changed from boolean to string ('Yes', 'No', 'Partial')
  durability: 'Low' | 'Medium' | 'High' | 'Very High'; // Added 'Very High'

  // Add all the fields from BootComparisonItem
  imageUrl?: string;
  temperature?: string;
  ventilation?: string;
  weight?: string;
  recommendedUse?: string[];
}

interface EquipmentComparisonProps {
  category: string;
  items: ComparisonItem[];
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

  // Helper function to format price with improved error handling
  const formatPrice = (price: number | string) => {
    // Handle the case where price might be a string despite the type declaration
    if (typeof price === 'string') {
      // Try to convert string to number if possible
      const numPrice = parseFloat(price);
      if (!isNaN(numPrice)) {
        return `$${numPrice.toFixed(2)}`;
      }
      // If it's a string but can't be converted to a valid number
      return price.startsWith('$') ? price : `$${price}`;
    }

    // Handle case where price is a proper number
    if (typeof price === 'number' && !isNaN(price)) {
      return `$${price.toFixed(2)}`;
    }

    // Fallback for any other unexpected cases
    return 'Price unavailable';
  };

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
                <div className='text-sm text-gray-400'>{item.brand}</div>
                <div className='text-yellow-400 mt-1'>
                  {formatPrice(item.price)}
                </div>
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
                    {item.reviewCount && (
                      <span className='ml-1 text-xs text-gray-500'>
                        ({item.reviewCount} reviews)
                      </span>
                    )}
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
                  {item.weight || 'N/A'}
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

          {/* Ventilation Row (for boots) */}
          {shouldShowField('ventilation') && (
            <tr>
              <td className='px-4 py-4 text-sm text-gray-300'>Ventilation</td>
              {items.map((item) => (
                <td
                  key={`ventilation-${item.id}`}
                  className='px-4 py-4 text-center text-white'
                >
                  {item.ventilation || 'N/A'}
                </td>
              ))}
            </tr>
          )}

          {/* Best For Row */}
          {shouldShowField('bestFor') && (
            <tr className={shouldShowField('ventilation') ? 'bg-gray-800' : ''}>
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
                      item.waterproof === 'Yes'
                        ? 'bg-green-900 text-green-300'
                        : item.waterproof === 'Partial'
                        ? 'bg-yellow-900 text-yellow-300'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {item.waterproof}
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
                      item.durability === 'Very High'
                        ? 'bg-blue-900 text-blue-300'
                        : item.durability === 'High'
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

          {/* Recommended Use Row (for boots) */}
          {shouldShowField('recommendedUse') && (
            <tr className='bg-gray-800'>
              <td className='px-4 py-4 text-sm text-gray-300'>
                Recommended Use
              </td>
              {items.map((item) => (
                <td
                  key={`recommendedUse-${item.id}`}
                  className='px-4 py-4 text-center'
                >
                  {item.recommendedUse ? (
                    <ul className='text-sm text-white list-disc list-inside text-left'>
                      {item.recommendedUse.map((use, idx) => (
                        <li key={idx} className='mb-1'>
                          {use}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    'N/A'
                  )}
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
