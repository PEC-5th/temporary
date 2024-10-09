import { IconButton } from '@/shared/ui/IconButton';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface LnbItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isBottom?: boolean;
  isHome?: boolean;
}

const LnbItem = ({ href, icon: Icon, label, isBottom = false, isHome = false }: LnbItemProps) => {
  return (
    <div className={isBottom ? 'flex-grow-0 w-full' : ''}>
      <Link href={href} passHref className="w-full">
        <IconButton variant="ghost" size="lg" className="md:w-full md:justify-start p-3">
          <div className="">
            <Icon className="h-6 w-6" />
          </div>
          <span className={isHome ? 'sr-only' : 'sr-only md:not-sr-only md:ml-2'}>{label}</span>
        </IconButton>
      </Link>
    </div>
  );
};

export default LnbItem;
