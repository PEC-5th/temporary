import Link from 'next/link';
import React from 'react';
import { PATHS } from '@/shared/constants/path';
import GnbNavigationMenu from './NavigationMenu';

const Gnb = () => {
  return (
    <header className="shadow-md flex justify-center">
      <div className="flex justify-between items-center py-2 px-4 max-w-[1440px] w-full">
        {/* FIXME: 로고 추가 후 수정 */}
        <Link href={PATHS.ROOT}>
          <h1 className="font-bold">스티클</h1>
        </Link>
        <GnbNavigationMenu />
        <div className="w-8 h-8 rounded-full bg-zinc-400">
          {/* TODO: 아바타 popover 추가 */}
        </div>
      </div>
    </header>
  );
};

export default Gnb;
