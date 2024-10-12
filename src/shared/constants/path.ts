export const PATHS = {
  ROOT: "/",
  LOGIN: "/login",
  SIGN_UP: "/sign-up",
  THREADS: "/threads",
  THREAD_DETAIL: (threadId: number) => `/threads/${threadId}`,
  VIDEO_CALL_REQUEST: (userId: number) => `/user/${userId}/video-call/request`,
  VIDEO_CALL_REVIEW: (userId: number) => `/user/${userId}/video-call/review`,
  PROFILE: (userId: number) => `/user/${userId}`,
};
