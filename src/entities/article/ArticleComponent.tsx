import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';

import type { Article } from '@/shared/types';
import ArticleMoreButton from '@/features/articles/ui/ArticleMoreButton';
import React from 'react';

const ArticleComponent = ({ article }: { article: Article }) => {
  return (
    <>
      <Card key={article.id}>
        <CardHeader>
          <CardTitle>{article.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{article.content?.substring(0, 100)}...</p>
          <ArticleMoreButton articleId={article.id.toString()} />
        </CardContent>
      </Card>
    </>
  );
};

export default ArticleComponent;
