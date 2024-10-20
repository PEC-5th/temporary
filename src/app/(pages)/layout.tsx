import React, { ReactNode } from 'react';
import Gnb from '@/widgets/Gnb/ui/Gnb';

interface PagesLayoutProps {
  children: ReactNode;
}

const Pageslayout = ({ children }: PagesLayoutProps) => {
  return (
    <div className="flex flex-col gap-10">
      <Gnb />
      <div className="flex justify-center px-4">
        <div className="flex w-full max-w-[1440px] gap-10">
          {/* TODO: LNB 추가 */}
          <main className="min-h-without-gnb">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Pageslayout;
