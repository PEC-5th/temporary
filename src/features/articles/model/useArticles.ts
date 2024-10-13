import { useEffect, useState } from 'react';

import { Article } from '@/shared/types/entry';
import { articlesApi } from '@/features/articles/api/articlesApi';

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await articlesApi.fetchArticles();
        setArticles(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return { articles, loading, error };
};
