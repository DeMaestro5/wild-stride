// components/equipment/terrain/TerrainPackingList.tsx
import React, { useState } from 'react';
import {
  Download,
  Check,
  Plus,
  ChevronDown,
  ChevronUp,
  Printer,
} from 'lucide-react';
import Link from 'next/link';
import { PackingItem } from '../../../types/terraineTypes';

type TerrainPackingListProps = {
  essentialItems: PackingItem[];
  optionalItems: PackingItem[];
  terrainName: string;
  downloadUrl: string;
};

const TerrainPackingList: React.FC<TerrainPackingListProps> = ({
  essentialItems,
  optionalItems,
  terrainName,
  downloadUrl,
}) => {
  const [showOptional, setShowOptional] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Group items by category
  const groupByCategory = (items: PackingItem[]) => {
    return items.reduce((groups, item) => {
      const category = item.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(item);
      return groups;
    }, {} as Record<string, PackingItem[]>);
  };

  const essentialByCategory = groupByCategory(essentialItems);
  const optionalByCategory = groupByCategory(optionalItems);

  const toggleItem = (itemName: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isSelected = (itemName: string) => selectedItems.includes(itemName);

  // Get importance style
  const getImportanceStyle = (importance: string) => {
    switch (importance) {
      case 'critical':
        return 'bg-red-500 text-white';
      case 'high':
        return 'bg-orange-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-black';
      case 'low':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700'>
      <div className='flex justify-between items-center p-6 border-b border-gray-700'>
        <h3 className='text-xl font-bold text-white'>
          {terrainName} Packing Checklist
        </h3>
        <div className='flex space-x-3'>
          <button className='bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md flex items-center text-sm'>
            <Printer className='mr-2 h-4 w-4' />
            Print
          </button>
          <Link
            href={downloadUrl}
            className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center text-sm'
          >
            <Download className='mr-2 h-4 w-4' />
            Download PDF
          </Link>
        </div>
      </div>

      <div className='p-6'>
        <div className='mb-6'>
          <div className='flex items-center mb-3'>
            <h4 className='text-lg font-medium text-white'>Essential Items</h4>
            <div className='ml-3 flex space-x-2'>
              <span className='bg-red-500 text-white text-xs px-2 py-0.5 rounded'>
                Critical
              </span>
              <span className='bg-orange-500 text-white text-xs px-2 py-0.5 rounded'>
                High
              </span>
              <span className='bg-yellow-500 text-black text-xs px-2 py-0.5 rounded'>
                Medium
              </span>
            </div>
          </div>

          {/* Essential Items List */}
          <div className='space-y-6'>
            {Object.entries(essentialByCategory).map(([category, items]) => (
              <div key={category}>
                <h5 className='text-green-400 uppercase text-sm tracking-wider mb-3'>
                  {category}
                </h5>
                <ul className='space-y-2'>
                  {items.map((item) => (
                    <li
                      key={item.name}
                      className={`bg-gray-700 p-3 rounded-md flex items-start ${
                        isSelected(item.name)
                          ? 'border-green-500 border'
                          : 'border border-gray-600'
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(item.name)}
                        className={`mt-0.5 mr-3 h-5 w-5 rounded flex-shrink-0 flex items-center justify-center ${
                          isSelected(item.name)
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-600'
                        }`}
                      >
                        {isSelected(item.name) && <Check className='h-4 w-4' />}
                      </button>
                      <div className='flex-grow'>
                        <div className='flex justify-between items-start'>
                          <div className='font-medium text-white'>
                            {item.name}
                          </div>
                          <div
                            className={`text-xs px-2 py-0.5 rounded ml-2 ${getImportanceStyle(
                              item.importance
                            )}`}
                          >
                            {item.importance}
                          </div>
                        </div>
                        <p className='text-sm text-gray-400 mt-1'>
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Items Toggle */}
        <div className='mt-8'>
          <button
            onClick={() => setShowOptional(!showOptional)}
            className='w-full flex items-center justify-between bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-md'
          >
            <div className='flex items-center'>
              <Plus className='mr-2 h-5 w-5' />
              <span>Optional Items ({optionalItems.length})</span>
            </div>
            {showOptional ? (
              <ChevronUp className='h-5 w-5' />
            ) : (
              <ChevronDown className='h-5 w-5' />
            )}
          </button>

          {/* Optional Items List */}
          {showOptional && (
            <div className='mt-4 space-y-6'>
              {Object.entries(optionalByCategory).map(([category, items]) => (
                <div key={category}>
                  <h5 className='text-blue-400 uppercase text-sm tracking-wider mb-3'>
                    {category}
                  </h5>
                  <ul className='space-y-2'>
                    {items.map((item) => (
                      <li
                        key={item.name}
                        className={`bg-gray-700 p-3 rounded-md flex items-start ${
                          isSelected(item.name)
                            ? 'border-green-500 border'
                            : 'border border-gray-600'
                        }`}
                      >
                        <button
                          onClick={() => toggleItem(item.name)}
                          className={`mt-0.5 mr-3 h-5 w-5 rounded flex-shrink-0 flex items-center justify-center ${
                            isSelected(item.name)
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-600'
                          }`}
                        >
                          {isSelected(item.name) && (
                            <Check className='h-4 w-4' />
                          )}
                        </button>
                        <div className='flex-grow'>
                          <div className='flex justify-between items-start'>
                            <div className='font-medium text-white'>
                              {item.name}
                            </div>
                            <div
                              className={`text-xs px-2 py-0.5 rounded ml-2 ${getImportanceStyle(
                                item.importance
                              )}`}
                            >
                              {item.importance}
                            </div>
                          </div>
                          <p className='text-sm text-gray-400 mt-1'>
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerrainPackingList;
