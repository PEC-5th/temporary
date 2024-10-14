export const PATHS = {
  ROOT: '/',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  THREADS: '/threads',
  ARTICLES: '/articles',
  THREAD_DETAIL: (threadId: number) => `${PATHS.THREADS}/${threadId}`,
  ARTICLE_DETAIL: (articleId: number) => `${PATHS.ARTICLES}/${articleId}`,
  VIDEO_CALL_REQUEST: (userId: number) => `/user/${userId}/video-call/request`,
  VIDEO_CALL_REVIEW: (userId: number) => `/user/${userId}/video-call/review`,
  PROFILE: (userId: number) => `/user/${userId}`,
};
