import { FileText, Home, MessageSquare, Search, Settings, User } from 'lucide-react';

export const topNavItem = { href: '/', icon: Home, label: '메인 페이지', isHome: true };

export const navItems = [
  { href: '/thread', icon: MessageSquare, label: '스레드' },
  { href: '/search', icon: Search, label: '검색' },
  { href: '/article', icon: FileText, label: '아티클' },
  { href: '/mypage', icon: User, label: '마이페이지' },
];

export const bottomNavItem = { href: '/settings', icon: Settings, label: '설정' };
