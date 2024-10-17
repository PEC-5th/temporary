'use client';

import Link from 'next/link';
import React from 'react';

const ArticleMoreButton = ({ articleId }: { articleId: string }) => {
  return (
    <Link
      href={`/articles/${articleId}`}
      className="text-blue-500 hover:underline"
    >
      더 보기
    </Link>
  );
};

export default ArticleMoreButton;
