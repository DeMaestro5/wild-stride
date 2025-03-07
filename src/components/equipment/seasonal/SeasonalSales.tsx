// components/ui/SeasonalSalesAlert.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Timer, ShoppingBag } from 'lucide-react';

interface SeasonalSalesAlertProps {
  message: string;
  linkText: string;
  linkUrl: string;
  expiryDate: string; // Format: YYYY-MM-DD
}

const SeasonalSalesAlert: React.FC<SeasonalSalesAlertProps> = ({
  message,
  linkText,
  linkUrl,
  expiryDate,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const expiry = new Date(expiryDate);
      const now = new Date();

      if (now > expiry) {
        setIsVisible(false);
        return '';
      }

      const difference = expiry.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      if (days > 0) {
        return `${days}d ${hours}h remaining`;
      } else if (hours > 0) {
        return `${hours}h remaining`;
      } else {
        return 'Ending soon!';
      }
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (!updatedTimeLeft) {
        clearInterval(timer);
      }
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [expiryDate]);

  if (!isVisible) return null;

  return (
    <div className='bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-4 py-3 relative'>
      <div className='container mx-auto flex flex-col sm:flex-row items-center justify-between'>
        <div className='flex items-center mb-2 sm:mb-0'>
          <ShoppingBag className='h-5 w-5 mr-2' />
          <p className='font-medium text-sm sm:text-base'>{message}</p>
        </div>

        <div className='flex items-center space-x-4'>
          {timeLeft && (
            <div className='flex items-center text-xs bg-black bg-opacity-20 px-3 py-1 rounded-full'>
              <Timer className='h-3 w-3 mr-1' />
              <span>{timeLeft}</span>
            </div>
          )}

          <Link
            href={linkUrl}
            className='bg-black text-white hover:bg-gray-800 text-sm font-medium px-4 py-2 rounded-md transition duration-200'
          >
            {linkText}
          </Link>

          <button
            onClick={() => setIsVisible(false)}
            className='focus:outline-none ml-2'
            aria-label='Close'
          >
            <X className='h-5 w-5 text-black hover:text-gray-800' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeasonalSalesAlert;
