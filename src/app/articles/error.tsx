'use client';

import ArticlesError from '@/features/articles/ui/error';
import React from 'react';

const ErrorBoundary = ({ error }: { error: Error }) => {
  return <ArticlesError error={error} />;
};

export default ErrorBoundary;
