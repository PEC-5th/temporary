'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import React, { useEffect, useState } from 'react';

import ArticleMoreButton from './ArticleMoreButton';
import Link from 'next/link';
import { useArticles } from '@/features/articles/model/useArticles';

const ArticleList = () => {
  const { articles } = useArticles();

  return (
    <>
      {articles.map((article) => (
        <Card key={article.id}>
          <CardHeader>
            <CardTitle>{article.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{article.content?.substring(0, 100)}...</p>
            <ArticleMoreButton articleId={article.id.toString()} />
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ArticleList;
