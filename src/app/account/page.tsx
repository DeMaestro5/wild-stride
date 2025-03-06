'use client';
// app/account/page.tsx
import { useState } from 'react';
import { StaticImageData } from 'next/image';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import SocialMediaSidebar from '../../components/ui/SocialMediaSidebar';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  User,
  ShoppingBag,
  MapPin,
  Heart,
  Settings,
  Calendar,
  LogOut,
  Edit,
  Package,
  Clock,
  Map,
} from 'lucide-react';

// Import images - update paths as needed
import heroImage from '../../public/images/img6.jpg'; // Using existing image
import profileImage from '../../public/images/reviewer.jpg'; // Using existing reviewer image
import trailImage1 from '../../public/images/img4.jpg';
import trailImage2 from '../../public/images/img5.jpg';
import productImage1 from '../../public/images/hikingboot.jpg';
import productImage2 from '../../public/images/jacket.jpg';

// TypeScript interfaces
interface SavedTrail {
  id: number;
  name: string;
  location: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Expert';
  length: string;
  date: string;
  image: string | StaticImageData;
  status: 'Completed' | 'Planned' | 'Saved';
}

interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered';
  total: string;
  items: OrderItem[];
}

interface OrderItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string | StaticImageData;
}

// Mock data for saved trails
const savedTrails: SavedTrail[] = [
  {
    id: 1,
    name: 'Cascade Mountain Loop',
    location: 'Pacific Northwest',
    difficulty: 'Moderate',
    length: '8.5 miles',
    date: 'March 15, 2023',
    image: trailImage1.src,
    status: 'Planned',
  },
  {
    id: 2,
    name: 'Eagle Peak Summit',
    location: 'Rocky Mountains',
    difficulty: 'Hard',
    length: '12 miles',
    date: 'April 22, 2023',
    image: trailImage2.src,
    status: 'Saved',
  },
];

// Mock data for order history
const orderHistory: Order[] = [
  {
    id: 'ORD-2023-0042',
    date: 'February 12, 2023',
    status: 'Delivered',
    total: '$245.99',
    items: [
      {
        id: 1,
        name: 'Trail Runner Pro 5',
        price: '$159.99',
        quantity: 1,
        image: productImage1.src,
      },
      {
        id: 2,
        name: 'Lightweight Down Jacket',
        price: '$86.00',
        quantity: 1,
        image: productImage2.src,
      },
    ],
  },
];

// Account navigation tabs
const accountTabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'orders', label: 'Orders', icon: ShoppingBag },
  { id: 'trails', label: 'Saved Trails', icon: MapPin },
  { id: 'preferences', label: 'Preferences', icon: Settings },
];

export default function Account() {
  const [activeTab, setActiveTab] = useState('profile');

  // User profile data
  const userProfile = {
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@example.com',
    memberSince: 'January 2023',
    trailsCompleted: 8,
    favoriteTerrain: 'Alpine',
    hikerLevel: 'Intermediate',
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <div className='relative h-[100vh] md:h-[50vh]' id='hero'>
        {/* Background Image - Only for hero section */}
        <div className='absolute inset-0 z-0'>
          <Image
            src={heroImage}
            alt='Mountain hiking background'
            fill
            priority
            sizes='100vw'
            quality={100}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.5)',
            }}
          />
        </div>

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className='relative z-10 h-full'>
          {/* Social Media Sidebar */}
          <SocialMediaSidebar />

          {/* Hero Section - Simpler for account page */}
          <div className='flex h-full items-center justify-center text-center px-4'>
            <div>
              <h4 className='text-yellow-400 tracking-widest uppercase text-sm font-medium mb-2'>
                MY ACCOUNT
              </h4>
              <h1 className='text-4xl md:text-5xl font-bold text-white max-w-4xl'>
                Hi, {userProfile.name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className='bg-gray-900 text-white'>
        <div className='container mx-auto px-4 py-12'>
          {/* Account Navigation Tabs */}
          <div className='flex flex-wrap justify-center mb-12 border-b border-gray-700'>
            {accountTabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center cursor-pointer px-6 py-4 font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'text-gray-400 hover:text-yellow-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className='h-5 w-5 mr-2' />
                {tab.label}
              </button>
            ))}
            <Link
              href='/logout'
              className='flex items-center px-6 py-4 font-medium text-gray-400 hover:text-red-400 transition-colors duration-200 ml-auto'
            >
              <LogOut className='h-5 w-5 mr-2' />
              Log Out
            </Link>
          </div>

          {/* Profile Tab Content */}
          {activeTab === 'profile' && (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* Profile Summary Card */}
              <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg'>
                <div className='relative h-40 bg-gradient-to-r from-yellow-600 to-yellow-500'>
                  <div className='absolute -bottom-16 left-1/2 transform -translate-x-1/2'>
                    <div className='relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-800'>
                      <Image
                        src={profileImage}
                        alt={userProfile.name}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className='pt-20 pb-6 px-6 text-center'>
                  <h3 className='text-2xl font-bold mb-1'>
                    {userProfile.name}
                  </h3>
                  <p className='text-gray-400 mb-4'>
                    {userProfile.hikerLevel} Hiker
                  </p>
                  <div className='flex justify-center'>
                    <button className='flex items-center bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-4 py-2 rounded-lg text-sm transition-colors duration-200'>
                      <Edit className='h-4 w-4 mr-1' />
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className='bg-gray-800 rounded-lg shadow-lg p-6 md:col-span-2'>
                <h3 className='text-xl font-bold mb-4'>Profile Details</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <p className='text-gray-400 text-sm mb-1'>Email</p>
                    <p className='font-medium'>{userProfile.email}</p>
                  </div>
                  <div>
                    <p className='text-gray-400 text-sm mb-1'>Member Since</p>
                    <p className='font-medium'>{userProfile.memberSince}</p>
                  </div>
                  <div>
                    <p className='text-gray-400 text-sm mb-1'>
                      Trails Completed
                    </p>
                    <p className='font-medium'>{userProfile.trailsCompleted}</p>
                  </div>
                  <div>
                    <p className='text-gray-400 text-sm mb-1'>
                      Favorite Terrain
                    </p>
                    <p className='font-medium'>{userProfile.favoriteTerrain}</p>
                  </div>
                </div>
                <div className='mt-6 pt-6 border-t border-gray-700'>
                  <h4 className='text-lg font-semibold mb-3'>
                    Account Settings
                  </h4>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <p className='font-medium'>Email Notifications</p>
                        <p className='text-gray-400 text-sm'>
                          Receive newsletters and trail updates
                        </p>
                      </div>
                      <label className='relative inline-flex items-center cursor-pointer'>
                        <input
                          type='checkbox'
                          value=''
                          className='sr-only peer'
                          defaultChecked
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                      </label>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div>
                        <p className='font-medium'>Two-Factor Authentication</p>
                        <p className='text-gray-400 text-sm'>
                          Add an extra layer of security
                        </p>
                      </div>
                      <label className='relative inline-flex items-center cursor-pointer'>
                        <input
                          type='checkbox'
                          value=''
                          className='sr-only peer'
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab Content */}
          {activeTab === 'orders' && (
            <div className='space-y-8'>
              <div className='bg-gray-800 rounded-lg shadow-lg p-6'>
                <h3 className='text-xl font-bold mb-6'>Order History</h3>

                {orderHistory.length > 0 ? (
                  <div className='space-y-8'>
                    {orderHistory.map((order) => (
                      <div
                        key={order.id}
                        className='border border-gray-700 rounded-lg overflow-hidden'
                      >
                        <div className='bg-gray-700 p-4 flex flex-wrap items-center justify-between'>
                          <div>
                            <p className='text-sm text-gray-400'>
                              Order #{order.id}
                            </p>
                            <div className='flex items-center mt-1'>
                              <Calendar className='h-4 w-4 text-gray-400 mr-1' />
                              <p className='text-sm'>{order.date}</p>
                            </div>
                          </div>
                          <div className='flex items-center space-x-4'>
                            <div className='flex items-center'>
                              <div
                                className={`h-2 w-2 rounded-full mr-2 ${
                                  order.status === 'Delivered'
                                    ? 'bg-green-500'
                                    : order.status === 'Shipped'
                                    ? 'bg-blue-500'
                                    : 'bg-yellow-500'
                                }`}
                              ></div>
                              <p className='text-sm'>{order.status}</p>
                            </div>
                            <p className='font-bold'>{order.total}</p>
                          </div>
                        </div>
                        <div className='p-4'>
                          {order.items.map((item) => (
                            <div
                              key={item.id}
                              className='flex items-center py-4 border-b border-gray-700 last:border-0'
                            >
                              <div className='relative h-16 w-16 rounded-md overflow-hidden'>
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  style={{
                                    objectFit: 'cover',
                                  }}
                                />
                              </div>
                              <div className='ml-4 flex-grow'>
                                <h4 className='font-medium'>{item.name}</h4>
                                <p className='text-gray-400 text-sm'>
                                  Qty: {item.quantity}
                                </p>
                              </div>
                              <p className='font-bold'>{item.price}</p>
                            </div>
                          ))}
                        </div>
                        <div className='bg-gray-700 p-4 flex justify-center'>
                          <Link
                            href={`/orders/${order.id}`}
                            className='flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200'
                          >
                            <span className='mr-2'>View Order Details</span>
                            <ArrowRight className='h-4 w-4' />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='text-center py-10 border border-dashed border-gray-700 rounded-lg'>
                    <Package className='h-16 w-16 mx-auto text-gray-600 mb-4' />
                    <h4 className='text-xl font-bold mb-2'>No Orders Yet</h4>
                    <p className='text-gray-400 mb-6'>
                      You haven&apos;t placed any orders with us yet.
                    </p>
                    <Link
                      href='/equipment'
                      className='inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200'
                    >
                      <ShoppingBag className='h-5 w-5 mr-2' />
                      Browse Equipment
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Saved Trails Tab Content */}
          {activeTab === 'trails' && (
            <div className='space-y-8'>
              <div className='bg-gray-800 rounded-lg shadow-lg p-6'>
                <h3 className='text-xl font-bold mb-6'>Saved Trails</h3>

                {savedTrails.length > 0 ? (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {savedTrails.map((trail) => (
                      <div
                        key={trail.id}
                        className='bg-gray-700 rounded-lg overflow-hidden shadow-lg'
                      >
                        <div className='relative h-48'>
                          <Image
                            src={trail.image}
                            alt={trail.name}
                            fill
                            style={{
                              objectFit: 'cover',
                            }}
                          />
                          <div className='absolute top-4 right-4'>
                            <span
                              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                                trail.status === 'Completed'
                                  ? 'bg-green-500 text-white'
                                  : trail.status === 'Planned'
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-yellow-500 text-gray-900'
                              }`}
                            >
                              {trail.status}
                            </span>
                          </div>
                        </div>
                        <div className='p-5'>
                          <h4 className='text-lg font-bold mb-2'>
                            {trail.name}
                          </h4>
                          <div className='flex items-center text-gray-400 text-sm mb-3'>
                            <MapPin className='h-4 w-4 mr-1' />
                            <span>{trail.location}</span>
                          </div>
                          <div className='grid grid-cols-3 gap-2 mb-4'>
                            <div className='bg-gray-800 rounded p-2 text-center'>
                              <p className='text-xs text-gray-400'>
                                Difficulty
                              </p>
                              <p className='font-medium text-sm'>
                                {trail.difficulty}
                              </p>
                            </div>
                            <div className='bg-gray-800 rounded p-2 text-center'>
                              <p className='text-xs text-gray-400'>Length</p>
                              <p className='font-medium text-sm'>
                                {trail.length}
                              </p>
                            </div>
                            <div className='bg-gray-800 rounded p-2 text-center'>
                              <p className='text-xs text-gray-400'>Date</p>
                              <p className='font-medium text-sm'>
                                {trail.date}
                              </p>
                            </div>
                          </div>
                          <div className='flex space-x-2'>
                            <Link
                              href={`/trails/${trail.id}`}
                              className='flex-1 flex items-center justify-center bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-4 py-2 rounded text-sm transition-colors duration-200'
                            >
                              <Map className='h-4 w-4 mr-1' />
                              View Trail
                            </Link>
                            <button className='flex items-center justify-center border border-gray-600 text-gray-400 hover:text-white hover:border-white px-4 py-2 rounded text-sm transition-colors duration-200'>
                              <Clock className='h-4 w-4' />
                            </button>
                            <button className='flex items-center justify-center border border-gray-600 text-gray-400 hover:text-red-400 hover:border-red-400 px-4 py-2 rounded text-sm transition-colors duration-200'>
                              <Heart className='h-4 w-4' />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='text-center py-10 border border-dashed border-gray-700 rounded-lg'>
                    <MapPin className='h-16 w-16 mx-auto text-gray-600 mb-4' />
                    <h4 className='text-xl font-bold mb-2'>No Saved Trails</h4>
                    <p className='text-gray-400 mb-6'>
                      You haven&apos;t saved any trails yet.
                    </p>
                    <Link
                      href='/trails'
                      className='inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200'
                    >
                      <Map className='h-5 w-5 mr-2' />
                      Explore Trails
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Preferences Tab Content */}
          {activeTab === 'preferences' && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='bg-gray-800 rounded-lg shadow-lg p-6'>
                <h3 className='text-xl font-bold mb-6'>Hiking Preferences</h3>
                <div className='space-y-6'>
                  <div>
                    <label className='block text-gray-400 mb-2'>
                      Preferred Difficulty
                    </label>
                    <div className='grid grid-cols-4 gap-2'>
                      {['Easy', 'Moderate', 'Hard', 'Expert'].map((level) => (
                        <button
                          key={level}
                          className={`py-2 rounded text-sm ${
                            level === 'Moderate'
                              ? 'bg-yellow-500 text-gray-900 font-medium'
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className='block text-gray-400 mb-2'>
                      Preferred Distance (miles)
                    </label>
                    <div className='relative'>
                      <input
                        type='range'
                        min='1'
                        max='20'
                        defaultValue='8'
                        className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500'
                      />
                      <div className='flex justify-between text-xs text-gray-500 px-2 mt-1'>
                        <span>1</span>
                        <span>5</span>
                        <span>10</span>
                        <span>15</span>
                        <span>20+</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className='block text-gray-400 mb-2'>
                      Preferred Terrain
                    </label>
                    <div className='grid grid-cols-2 gap-2'>
                      {[
                        'Forest',
                        'Mountain',
                        'Desert',
                        'Coastal',
                        'Alpine',
                        'Riverside',
                      ].map((terrain) => (
                        <div key={terrain} className='flex items-center'>
                          <input
                            type='checkbox'
                            id={`terrain-${terrain}`}
                            defaultChecked={terrain === 'Alpine'}
                            className='w-4 h-4 text-yellow-500 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500 focus:ring-2'
                          />
                          <label
                            htmlFor={`terrain-${terrain}`}
                            className='ml-2 text-sm font-medium'
                          >
                            {terrain}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-gray-800 rounded-lg shadow-lg p-6'>
                <h3 className='text-xl font-bold mb-6'>
                  Notification Preferences
                </h3>
                <div className='space-y-4'>
                  {[
                    {
                      id: 'trail-updates',
                      title: 'Trail Updates',
                      desc: 'Get notified about changes to saved trails',
                    },
                    {
                      id: 'new-trails',
                      title: 'New Trails',
                      desc: 'Be the first to know when new trails are added',
                    },
                    {
                      id: 'gear-reviews',
                      title: 'Gear Reviews',
                      desc: 'Receive updates on latest equipment reviews',
                    },
                    {
                      id: 'order-status',
                      title: 'Order Status',
                      desc: 'Get notifications about your orders',
                    },
                    {
                      id: 'hiking-tips',
                      title: 'Hiking Tips',
                      desc: 'Weekly hiking tips and advice',
                    },
                  ].map((pref) => (
                    <div
                      key={pref.id}
                      className='flex items-center justify-between'
                    >
                      <div>
                        <p className='font-medium'>{pref.title}</p>
                        <p className='text-gray-400 text-sm'>{pref.desc}</p>
                      </div>
                      <label className='relative inline-flex items-center cursor-pointer'>
                        <input
                          type='checkbox'
                          value=''
                          className='sr-only peer'
                          defaultChecked={[
                            'trail-updates',
                            'order-status',
                          ].includes(pref.id)}
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                      </label>
                    </div>
                  ))}
                </div>

                <div className='mt-8 pt-6 border-t border-gray-700'>
                  <button className='w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 rounded-lg transition-colors duration-200'>
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
