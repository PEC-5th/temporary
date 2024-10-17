export interface Thread {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
  // 추가적인 옵션 필드들
  likes?: string[];
  comments?: Comment[];
  tags?: string[];
}
