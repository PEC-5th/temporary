import { LucideIcon } from 'lucide-react';

export type NavItem = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export type LnbItemProps = NavItem & {
  isHome?: boolean;
  isBottom?: boolean;
};
