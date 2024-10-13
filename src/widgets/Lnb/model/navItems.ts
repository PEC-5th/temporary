import {
  FileText,
  Home,
  MessageSquare,
  Search,
  Settings,
  User,
} from 'lucide-react';

import { NavItem } from '@/widgets/Lnb/types';
import { PATHS } from '@/shared/constants/path';

export const topNavItem: NavItem = {
  href: PATHS.ROOT,
  icon: Home,
  label: '메인 페이지',
};

export const navItems: NavItem[] = [
  { href: PATHS.THREADS, icon: MessageSquare, label: '스레드' },
  { href: PATHS.SEARCH, icon: Search, label: '검색' },
  { href: PATHS.ARTICLES, icon: FileText, label: '아티클' },
  { href: PATHS.MYPAGE, icon: User, label: '마이페이지' },
];

export const bottomNavItem: NavItem = {
  href: PATHS.SETTINGS,
  icon: Settings,
  label: '설정',
};
