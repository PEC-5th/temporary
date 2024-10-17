import { Article, ArticleData } from '@/shared/types';

// TODO: 모의 서버 주소
const API_BASE_URL = 'http://localhost:9090';

export const articlesApi = {
  fetchArticles: async (): Promise<Article[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/articles`);
      const data = await response.json();
      return data as Article[];
    } catch (error) {
      console.error('ArticleList error:', error);
      throw error;
    }
  },

  // TODO: 특정 게시글 조회
  fetchArticleById: async (id: string): Promise<Article> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/articles/${id}`);
      const data = await response.json();
      return data as Article;
    } catch (error) {
      console.error(`Error fetching article ${id}:`, error);
      throw error;
    }
  },

  // TODO: 게시글 생성
  createArticle: async (articleData: ArticleData): Promise<Article> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });
      const data = await response.json();
      return data as Article;
    } catch (error) {
      console.error('Error creating article:', error);
      throw error;
    }
  },

  // TODO: 게시글 수정
  updateArticle: async (
    id: string,
    articleData: ArticleData,
  ): Promise<Article> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/articles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });
      const data = await response.json();
      return data as Article;
    } catch (error) {
      console.error(`Error updating article ${id}:`, error);
      throw error;
    }
  },

  // TODO: 게시글 삭제
  deleteArticle: async (id: string): Promise<void> => {
    try {
      await fetch(`${API_BASE_URL}/api/articles/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error(`Error deleting article ${id}:`, error);
      throw error;
    }
  },
};
