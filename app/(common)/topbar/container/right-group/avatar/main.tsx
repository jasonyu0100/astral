"use client";
import { LinkInputProps } from '@/(common)/types/main';
import { useGlobalUser } from '@/state/main';
import { UserObj } from '@/tables/user/main';

export function TopbarAvatar({ ...props }: LinkInputProps) {
  const [state, actions] = useGlobalUser();
  const user: UserObj = state.user;
  
  return (
    <a className='h-full flex items-center ml-[2rem]' {...props}>
      <img
        className='w-[2.5rem] h-[2.5rem] rounded-full shadow-md shadow-slate-300/50 animate-pulse-slow'
        src={user.profilePicture?.src}
      />
    </a>
  );
}
