'use client';
import { ButtonProps } from '@/components/ui/button';
import { useGlobalUser } from '@/(store)/user/main';
import { useState, useEffect } from 'react';

export function TopbarAvatar({ ...props }: ButtonProps) {
  const user = useGlobalUser((state) => state.user);
  const [profilePictureSrc, changeProfilePictureSrc] = useState("/brand/avatar.png");

  useEffect(() => {
    changeProfilePictureSrc(user?.profilePicture?.src || "/brand/avatar.png");
  }, [profilePictureSrc, user]);

  return (
    <button className='flex h-full items-center' {...props}>
      <img
        className='h-[2.5rem] w-[2.5rem] animate-pulse-slow rounded-full shadow-md shadow-slate-300/50'
        src={"/brand/icon-bg-sm.png" || profilePictureSrc}
      />
    </button>
  );
}
