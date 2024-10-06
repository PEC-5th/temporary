'use client';

import { useEffect } from 'react';

export const MSWProvider = () => {
  useEffect(() => {
    const initMSW = async () => {
      if (typeof window !== 'undefined') {
        try {
          await import('@/shared/api/msw/mocks/browser');
          console.log('MSW initialized');
        } catch (error) {
          console.error('Failed to initialize MSW:', error);
        }
      }
    };

    initMSW();
  }, []);

  return null;
};
