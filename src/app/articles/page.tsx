import React, { Suspense } from 'react';

import ArticleList from '@/features/articles/ui/ArticleList';
import ArticlesError from '@/features/articles/ui/error';
import ArticlesLoading from '@/features/articles/ui/loading';

const ArticlesPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-m font-bold">Articles</h1>
      <Suspense fallback={<ArticlesLoading />}>
        <ArticleList />
      </Suspense>
    </div>
  );
};

export default ArticlesPage;

export const ErrorBoundary = ArticlesError;
