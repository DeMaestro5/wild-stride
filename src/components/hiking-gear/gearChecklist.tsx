// app/hiking-gear/components/GearChecklist.tsx

const GearChecklist: React.FC = () => {
  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-xl'>
      <div className='p-6'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-gray-700 rounded-lg p-4'>
            <h3 className='text-lg font-semibold text-yellow-400 mb-3 border-b border-gray-600 pb-2'>
              The Ten Essentials
            </h3>
            <ul className='space-y-2'>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Navigation (map & compass)</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Sun protection</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Insulation (extra clothing)</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Illumination (headlamp/flashlight)</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>First-aid supplies</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Fire (lighter/matches)</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Repair kit and tools</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Nutrition (extra food)</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Hydration (extra water)</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Emergency shelter</span>
              </li>
            </ul>
          </div>

          <div className='bg-gray-700 rounded-lg p-4'>
            <h3 className='text-lg font-semibold text-yellow-400 mb-3 border-b border-gray-600 pb-2'>
              Day Hiking Essentials
            </h3>
            <ul className='space-y-2'>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Backpack (15-30L)</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Appropriate footwear</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Water (2-3 liters)</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Food and snacks</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Weather-appropriate clothing</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Navigation tools</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Personal hygiene items</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Trekking poles (optional)</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Camera/phone</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Permits (if required)</span>
              </li>
            </ul>
          </div>

          <div className='bg-gray-700 rounded-lg p-4'>
            <h3 className='text-lg font-semibold text-yellow-400 mb-3 border-b border-gray-600 pb-2'>
              Overnight Additions
            </h3>
            <ul className='space-y-2'>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Shelter (tent, tarp, etc.)</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Sleeping bag</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Sleeping pad</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Stove and fuel</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Cookware</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Additional food</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Water filter/purifier</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Toiletries/sanitation</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Camp shoes (optional)</span>
              </li>
              <li className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded bg-gray-600 border-gray-500 text-yellow-400 focus:ring-yellow-400 cursor-pointer'
                />
                <span className='ml-2'>Food storage (bear canister, etc.)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-6 p-4 bg-gray-700 rounded-md'>
          <div className='flex items-start'>
            <span className='text-yellow-400 text-lg font-bold mr-2'>📋</span>
            <p className='text-gray-300'>
              Use this checklist as a starting point and customize it based on
              your specific trip needs, destination, season, and personal
              preferences. Adjust quantities and items based on trip length and
              conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearChecklist;
