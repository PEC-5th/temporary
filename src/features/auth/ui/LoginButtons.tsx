import React from 'react';
import { LoginMethod } from '../model/login';
import {
  AppleIcon,
  GithubIcon,
  GoogleIcon,
  KakaoIcon,
} from '@/shared/ui/Icons';
import { cn } from '@/shared/lib/utils';

const LOGIN_METHODS: LoginMethod[] = [
  {
    name: 'Google',
    icon: <GoogleIcon />,
    isActive: true,
  },
  {
    name: '카카오',
    icon: <KakaoIcon />,
    isActive: false,
  },
  {
    name: 'GitHub',
    icon: <GithubIcon />,
    isActive: false,
  },
  {
    name: 'Apple',
    icon: <AppleIcon />,
    isActive: false,
  },
];

const LoginButtons = () => {
  return (
    <div className="flex flex-wrap gap-3 w-1/2">
      {LOGIN_METHODS.map((loginMethod) => (
        <button
          key={loginMethod.name}
          className={cn(
            'flex flex-col gap-2 items-center border w-[100px] h-[100px] justify-center rounded-sm hover:bg-zinc-100 bg-white',
            !loginMethod.isActive && 'bg-zinc-300 hover:bg-zinc-300',
          )}
          disabled={!loginMethod.isActive}
          // TODO: 로그인 기능 추가
        >
          <div className="w-10 h-10">{loginMethod.icon}</div>
          <h3 className="font-semibold">{loginMethod.name}</h3>
        </button>
      ))}
    </div>
  );
};

export default LoginButtons;
