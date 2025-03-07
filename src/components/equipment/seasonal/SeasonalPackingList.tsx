// components/equipment/SeasonalPackingList.tsx
'use client';

import React, { useState } from 'react';
import { Check, Download, Clipboard, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';

interface SeasonalPackingListProps {
  essentialItems: string[];
  optionalItems: string[];
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

  const toggleEssentialItem = (item: string) => {
    setCheckedEssential((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const toggleOptionalItem = (item: string) => {
    setCheckedOptional((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const copyToClipboard = () => {
    const essentialText = essentialItems.map((item) => `□ ${item}`).join('\n');
    const optionalText = optionalItems.map((item) => `□ ${item}`).join('\n');
    const fullText = `${seasonName.toUpperCase()} HIKING CHECKLIST\n\nESSENTIAL ITEMS:\n${essentialText}\n\nOPTIONAL ITEMS:\n${optionalText}`;

    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
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
                className={`flex items-center text-white transition-all duration-200 ${
                  checkedEssential[item] ? 'opacity-50 line-through' : ''
                }`}
              >
                <button
                  onClick={() => toggleEssentialItem(item)}
                  className={`w-5 h-5 mr-3 rounded border flex-shrink-0 flex items-center justify-center ${
                    checkedEssential[item]
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-500 hover:border-white'
                  }`}
                >
                  {checkedEssential[item] && (
                    <Check className='h-4 w-4 text-white' />
                  )}
                </button>
                {item}
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
                className={`flex items-center text-white transition-all duration-200 ${
                  checkedOptional[item] ? 'opacity-50 line-through' : ''
                }`}
              >
                <button
                  onClick={() => toggleOptionalItem(item)}
                  className={`w-5 h-5 mr-3 rounded border flex-shrink-0 flex items-center justify-center ${
                    checkedOptional[item]
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-500 hover:border-white'
                  }`}
                >
                  {checkedOptional[item] && (
                    <Check className='h-4 w-4 text-white' />
                  )}
                </button>
                {item}
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
