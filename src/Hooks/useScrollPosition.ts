'use client';

import { useState, useEffect } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollDirection: 'up' | 'down' | 'none';
  isAtTop: boolean;
  scrollPercentage: number;
}

export default function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollDirection: 'none',
    isAtTop: true,
    scrollPercentage: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection =
        currentScrollY > lastScrollY
          ? 'down'
          : currentScrollY < lastScrollY
          ? 'up'
          : 'none';

      // Calculate scroll percentage
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage =
        documentHeight > 0 ? (currentScrollY / documentHeight) * 100 : 0;

      setScrollPosition({
        scrollY: currentScrollY,
        scrollDirection,
        isAtTop: currentScrollY < 50,
        scrollPercentage,
      });

      lastScrollY = currentScrollY;
    };

    // Initial call to set values
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}
