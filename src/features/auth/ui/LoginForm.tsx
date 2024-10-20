import { PATHS } from '@/shared/constants/path';
import Link from 'next/link';
import LoginButtons from './LoginButtons';

const LoginForm = () => {
  return (
    <div className="flex items-center h-full">
      <div className="flex items-center gap-20 w-full">
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-3xl font-bold">로그인</h1>
          <div className="flex flex-col gap-2">
            <p>
              로그인을 통해 스티클에서 스레드와 아티클을 저장하고 관리해보세요!
            </p>
            <div className="text-xs text-zinc-400">
              로그인하시면&nbsp;
              <Link href={PATHS.TERMS} target="_blank">
                <p className="underline">이용 약관</p>
              </Link>
              과&nbsp;
              <Link href={PATHS.PRIVACY} target="_blank">
                <p className="underline">개인정보 처리방침</p>
              </Link>
              에 동의한 것으로 간주됩니다.
            </div>
          </div>
        </div>
        <LoginButtons />
      </div>
    </div>
  );
};

export default LoginForm;
