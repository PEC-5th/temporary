import { PATHS } from '@/shared/constants/path';

interface NavgationMenu {
  name: string;
  path: keyof typeof PATHS;
}

export const NAVIGATION_MENUS: NavgationMenu[] = [
  { name: '스레드', path: 'THREADS' },
  { name: '아티클', path: 'ARTICLES' },
];
