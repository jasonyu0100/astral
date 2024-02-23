'use client';
import { ButtonProps } from '@/components/ui/button';
import { useGlobalUser } from '@/(logic)/store/user/main';

export function TopbarAvatar({ ...props }: ButtonProps) {
  const user = useGlobalUser((state) => state.user);

  return (
    <button className='flex h-full items-center' {...props}>
      <img
        className='h-[2.5rem] w-[2.5rem] animate-pulse-slow rounded-full shadow-md shadow-slate-300/50'
        src={user?.profilePicture?.src || "/brand/icon-bg-sm.png"}
      />
    </button>
  );
}
