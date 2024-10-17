import {
  bottomNavItem,
  navItems,
  topNavItem,
} from '@/widgets/Lnb/constants/navItems';

import LnbItem from './LnbItem';

const Lnb = () => {
  return (
    <nav aria-label="메인 네비게이션" className="fixed left-0 top-0">
      <div className='flex flex-col items-center p-2 min-h-screen border-r border-r-zinc-200 transition-all duration-300 ease-in-out min-w-[var(--nav-narrow-width)] md:min-w-[var(--nav-wide-width)]'>
        <div className="flex-grow-0 w-full">
          <LnbItem {...topNavItem} />
        </div>
        <div className="flex flex-col justify-center flex-1 w-full">
          {navItems.map((item) => (
            <LnbItem key={item.href} {...item} />
          ))}
        </div>
        <LnbItem {...bottomNavItem} isBottom />
      </div>
    </nav>
  );
};

export default Lnb;
