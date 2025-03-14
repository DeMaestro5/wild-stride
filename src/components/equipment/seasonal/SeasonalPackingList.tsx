// components/equipment/seasonal/SeasonalPackingList.tsx
'use client';

import React, { useState } from 'react';
import { Check, Download, Clipboard, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';
import { PackingItem } from '../../../types/summerTypes';

interface SeasonalPackingListProps {
  essentialItems: PackingItem[];
  optionalItems: PackingItem[];
  seasonName: string;
  downloadUrl: string;
}

const SeasonalPackingList: React.FC<SeasonalPackingListProps> = ({
  essentialItems,
  optionalItems,
  seasonName,
  downloadUrl,
}) => {
  const [checkedEssential, setCheckedEssential] = useState<{
    [key: string]: boolean;
  }>({});
  const [checkedOptional, setCheckedOptional] = useState<{
    [key: string]: boolean;
  }>({});
  const [copied, setCopied] = useState(false);

  const toggleEssentialItem = (itemId: string) => {
    setCheckedEssential((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const toggleOptionalItem = (itemId: string) => {
    setCheckedOptional((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const copyToClipboard = () => {
    const essentialText = essentialItems
      .map((item) => `□ ${item.name} - ${item.description}`)
      .join('\n');
    const optionalText = optionalItems
      .map((item) => `□ ${item.name} - ${item.description}`)
      .join('\n');
    const fullText = `${seasonName.toUpperCase()} HIKING CHECKLIST\n\nESSENTIAL ITEMS:\n${essentialText}\n\nOPTIONAL ITEMS:\n${optionalText}`;

    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Function to get appropriate icon or fallback to emoji
  const getItemIcon = (iconName: string) => {
    // This function could be expanded to map icon names to actual icon components
    // For now, we'll use a simple emoji mapping
    const iconMap: { [key: string]: string } = {
      shirt: '👕',
      pants: '👖',
      hat: '🧢',
      water: '💧',
      sun: '☀️',
      glasses: '🕶️',
      shoe: '👟',
      bug: '🦟',
      jacket: '🧥',
      firstaid: '🩹',
      nutrition: '🧂',
      clothing: '👚',
      backpack: '🎒',
      towel: '🧻',
      shield: '🛡️',
      filter: '🚰',
      net: '🕸️',
      sandal: '👡',
      poles: '🥢',
      medical: '💊',
      umbrella: '☂️',
    };

    return iconMap[iconName] || '📦'; // Default to a generic box emoji
  };

  // Helper function to display the importance level with appropriate color
  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'critical':
        return 'text-red-400';
      case 'high':
        return 'text-yellow-400';
      case 'medium':
        return 'text-blue-400';
      case 'variable':
        return 'text-purple-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className='bg-gray-800 rounded-xl overflow-hidden shadow-xl'>
      <div className='flex items-center justify-between bg-gray-700 px-6 py-4'>
        <h3 className='text-xl font-bold text-white'>
          {seasonName} Hiking Checklist
        </h3>
        <div className='flex space-x-3'>
          <button
            onClick={copyToClipboard}
            className='flex items-center bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-md transition duration-200'
          >
            {copied ? (
              <ClipboardCheck className='mr-2 h-5 w-5' />
            ) : (
              <Clipboard className='mr-2 h-5 w-5' />
            )}
            {copied ? 'Copied!' : 'Copy List'}
          </button>
          <Link
            href={downloadUrl}
            className='flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200'
          >
            <Download className='mr-2 h-5 w-5' />
            PDF Version
          </Link>
        </div>
      </div>

      <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h4 className='text-lg font-semibold text-yellow-400 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-yellow-400 rounded-full mr-2'></span>
            Essential Items
          </h4>
          <ul className='space-y-3'>
            {essentialItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-start text-white transition-all duration-200 ${
                  checkedEssential[item.name] ? 'opacity-50 line-through' : ''
                }`}
              >
                <button
                  onClick={() => toggleEssentialItem(item.name)}
                  className={`w-5 h-5 mt-1 mr-3 rounded border flex-shrink-0 flex items-center justify-center ${
                    checkedEssential[item.name]
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-500 hover:border-white'
                  }`}
                >
                  {checkedEssential[item.name] && (
                    <Check className='h-4 w-4 text-white' />
                  )}
                </button>
                <div>
                  <div className='flex items-center'>
                    <span className='mr-2'>{getItemIcon(item.icon)}</span>
                    <span className='font-medium'>{item.name}</span>
                    <span
                      className={`ml-2 text-xs ${getImportanceColor(
                        item.importance
                      )}`}
                    >
                      ({item.importance})
                    </span>
                  </div>
                  <p className='text-sm text-gray-400 mt-1'>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='text-lg font-semibold text-blue-400 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-blue-400 rounded-full mr-2'></span>
            Optional Items
          </h4>
          <ul className='space-y-3'>
            {optionalItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-start text-white transition-all duration-200 ${
                  checkedOptional[item.name] ? 'opacity-50 line-through' : ''
                }`}
              >
                <button
                  onClick={() => toggleOptionalItem(item.name)}
                  className={`w-5 h-5 mt-1 mr-3 rounded border flex-shrink-0 flex items-center justify-center ${
                    checkedOptional[item.name]
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-500 hover:border-white'
                  }`}
                >
                  {checkedOptional[item.name] && (
                    <Check className='h-4 w-4 text-white' />
                  )}
                </button>
                <div>
                  <div className='flex items-center'>
                    <span className='mr-2'>{getItemIcon(item.icon)}</span>
                    <span className='font-medium'>{item.name}</span>
                    <span
                      className={`ml-2 text-xs ${getImportanceColor(
                        item.importance
                      )}`}
                    >
                      ({item.importance})
                    </span>
                  </div>
                  <p className='text-sm text-gray-400 mt-1'>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='px-6 py-4 bg-gray-700 text-sm text-gray-300'>
        <p>
          This checklist is customized for typical {seasonName.toLowerCase()}{' '}
          conditions. Adjust based on your specific trip needs, weather
          forecast, and trail difficulty.
        </p>
      </div>
    </div>
  );
};

export default SeasonalPackingList;
