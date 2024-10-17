'use client';

import ArticleComponent from '@/entities/article/ArticleComponent';
import React from 'react';
import { useArticles } from '../model/useArticles';

const ArticleList = () => {
  const { articles } = useArticles();

  return (
    <>
      {articles.map((article) => (
        <ArticleComponent key={article.id} article={article} />
      ))}
    </>
  );
};

export default ArticleList;
