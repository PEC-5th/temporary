import React, { ReactNode } from 'react';
import Gnb from '@/widgets/Gnb/ui/Gnb';
import Lnb from '@/widgets/Lnb/ui/Lnb';

interface PagesLayoutProps {
  children: ReactNode;
}

const Pageslayout = ({ children }: PagesLayoutProps) => {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <Gnb />
      <div className="flex justify-center px-4">
        <div className="flex w-full max-w-[1440px] gap-8">
          <Lnb />
          <main className="w-full">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Pageslayout;
