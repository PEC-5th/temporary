import { HttpResponse, http } from 'msw';

import { Article } from '@/shared/types';

const articles: Article[] = [
  { id: 1, title: '첫 번째 글', content: '내용...' },
  { id: 2, title: '두 번째 글', content: '내용...' },
  { id: 3, title: '세 번째 글', content: '내용...' },
  { id: 4, title: '네 번째 글', content: '내용...' },
];

export const articlesHandlers = [
  http.get('/api/articles', () => {
    return HttpResponse.json(articles);
  }),
];
