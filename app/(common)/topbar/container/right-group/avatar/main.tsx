"use client";
import { LinkInputProps } from '@/(common)/types/main';
import { useGlobalUser } from '@/state/main';
import { useState, useEffect } from 'react';

export function TopbarAvatar({ ...props }: LinkInputProps) {
  const [state, actions] = useGlobalUser();
  const [profilePictureSrc, changeProfilePictureSrc] = useState(null)
  useEffect(() => {
    changeProfilePictureSrc(state?.user?.profilePicture?.src || null)
  }, [profilePictureSrc])
  
  return (
    <a className='h-full flex items-center ml-[2rem]' {...props}>
      <img
        className='w-[2.5rem] h-[2.5rem] rounded-full shadow-md shadow-slate-300/50 animate-pulse-slow'
        src={profilePictureSrc}
      />
    </a>
  );
}
