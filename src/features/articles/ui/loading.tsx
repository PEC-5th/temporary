import { BounceLoader } from 'react-spinners';
import React from 'react';

const ArticlesLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <BounceLoader />
      <p className="text-1xl font-bold">Loading...</p>
    </div>
  );
};

export default ArticlesLoading;
