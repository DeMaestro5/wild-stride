// components/mapping-guide/sections/mapChecklistSection.tsx

import { FC, useState } from 'react';

// Define the checklist items
const navigationChecklist = [
  {
    category: 'Essential Navigation Tools',
    items: [
      {
        id: 'topographic-map',
        label: 'Topographic map of the area (waterproof or in protective case)',
      },
      { id: 'compass', label: 'Baseplate compass with declination adjustment' },
      {
        id: 'gps',
        label:
          'GPS device or smartphone with GPS app (with spare batteries/power bank)',
      },
      {
        id: 'guidebook',
        label: 'Trail guidebook or printed route description',
      },
      {
        id: 'backup-map',
        label: 'Backup paper map (even if using digital navigation)',
      },
    ],
  },
  {
    category: 'Pre-Trip Planning',
    items: [
      {
        id: 'route-plan',
        label: 'Detailed route plan with distances and estimated times',
      },
      { id: 'waypoints', label: 'Key waypoints and coordinates marked on map' },
      { id: 'bailout', label: 'Emergency exit routes identified' },
      { id: 'weather', label: 'Weather forecast checked and understood' },
      {
        id: 'daylight',
        label: 'Daylight hours calculated for your trip dates',
      },
      { id: 'share-plan', label: 'Route plan shared with someone at home' },
    ],
  },
  {
    category: 'Navigation Accessories',
    items: [
      {
        id: 'headlamp',
        label: 'Headlamp or flashlight (for emergency night navigation)',
      },
      { id: 'whistle', label: 'Signal whistle for emergencies' },
      { id: 'ruler', label: 'Map ruler or measuring tool' },
      { id: 'pencil', label: 'Pencil for marking map notes' },
      { id: 'watch', label: 'Watch (for timing travel between points)' },
      { id: 'altimeter', label: 'Altimeter (standalone or on watch/phone)' },
    ],
  },
  {
    category: 'Skills & Knowledge',
    items: [
      {
        id: 'compass-use',
        label: 'Practiced taking and following compass bearings',
      },
      {
        id: 'contour-read',
        label: 'Understand how to read contour lines on map',
      },
      {
        id: 'triangulation',
        label: 'Know how to perform triangulation to find position',
      },
      {
        id: 'declination',
        label: 'Checked and adjusted for local magnetic declination',
      },
      {
        id: 'scale-distance',
        label: 'Can measure distances accurately on the map',
      },
      {
        id: 'night-nav',
        label: 'Basic knowledge of night navigation techniques',
      },
    ],
  },
];

const MapChecklistSection: FC = () => {
  // State to track checked items
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Calculate progress for each category
  const calculateProgress = (
    categoryItems: { id: string; label: string }[]
  ) => {
    const checkedCount = categoryItems.filter(
      (item) => checkedItems[item.id]
    ).length;
    return Math.round((checkedCount / categoryItems.length) * 100);
  };

  // Handle checkbox changes
  const handleCheckboxChange = (itemId: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div className='bg-slate-800 rounded-xl shadow-xl p-6'>
      <div className='space-y-8'>
        {navigationChecklist.map((category) => (
          <div key={category.category}>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-xl font-bold'>{category.category}</h3>
              <div className='flex items-center'>
                <div className='w-40 bg-slate-700 rounded-full h-2.5 mr-2'>
                  <div
                    className='bg-emerald-500 h-2.5 rounded-full'
                    style={{ width: `${calculateProgress(category.items)}%` }}
                  ></div>
                </div>
                <span className='text-sm text-gray-400'>
                  {calculateProgress(category.items)}%
                </span>
              </div>
            </div>

            <div className='space-y-3'>
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className='flex items-center p-3 bg-slate-700 rounded-lg hover:bg-slate-650 transition-colors'
                >
                  <input
                    type='checkbox'
                    id={item.id}
                    checked={checkedItems[item.id] || false}
                    onChange={() => handleCheckboxChange(item.id)}
                    className='w-5 h-5 text-emerald-500 border-gray-600 rounded focus:ring-emerald-500 focus:ring-opacity-25 focus:ring-2 bg-gray-700 cursor-pointer'
                  />
                  <label
                    htmlFor={item.id}
                    className='ml-3 text-gray-300 cursor-pointer'
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Reset Button */}
      <div className='mt-8 text-center'>
        <button
          onClick={() => setCheckedItems({})}
          className='px-4 py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 rounded-lg transition-colors'
        >
          Reset Checklist
        </button>
      </div>
    </div>
  );
};

export default MapChecklistSection;
