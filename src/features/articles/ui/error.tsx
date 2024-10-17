'use client';

import React from 'react';

const ArticlesError = ({ error }: { error: Error }) => {
  return <div>ArticlesError: {error.message}</div>;
};

export default ArticlesError;
