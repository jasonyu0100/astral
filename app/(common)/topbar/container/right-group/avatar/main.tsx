'use client';
import { LinkInputProps } from '@/(common)/types/main';
import { useGlobalUser } from '@/state/main';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function TopbarAvatar({ ...props }: LinkInputProps) {
  const user = useGlobalUser((state) => state.user);
  const [profilePictureSrc, changeProfilePictureSrc] = useState("/brand/avatar.png");

  useEffect(() => {
    changeProfilePictureSrc(user?.profilePicture?.src || "/brand/avatar.png");
  }, [profilePictureSrc, user]);

  return (
    <Link className='ml-[2rem] flex h-full items-center' {...props}>
      <img
        className='h-[2.5rem] w-[2.5rem] animate-pulse-slow rounded-full shadow-md shadow-slate-300/50'
        src={profilePictureSrc}
      />
    </Link>
  );
}
