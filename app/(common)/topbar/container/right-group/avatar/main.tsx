'use client';
import { LinkInputProps } from '@/(common)/types/main';
import { useGlobalUser } from '@/state/main';
import { useState, useEffect } from 'react';

export function TopbarAvatar({ ...props }: LinkInputProps) {
  const [state, actions] = useGlobalUser();
  const [profilePictureSrc, changeProfilePictureSrc] = useState(null);
  useEffect(() => {
    changeProfilePictureSrc(state?.user?.profilePicture?.src || null);
  }, [profilePictureSrc]);

  return (
    <a className='ml-[2rem] flex h-full items-center' {...props}>
      <img
        className='h-[2.5rem] w-[2.5rem] animate-pulse-slow rounded-full shadow-md shadow-slate-300/50'
        src={profilePictureSrc}
      />
    </a>
  );
}
