'use client';
import { ButtonProps } from '@/components/ui/button';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';

export function TopbarAvatar({ ...props }: ButtonProps) {
  const user = useGlobalUser((state) => state.user);

  return (
    <button className='flex h-full items-center' {...props}>
      <img
        className='h-[2.5rem] w-[2.5rem] animate-pulse-slow rounded-full'
        src={'/brand/icon-bg-sm.png' || user?.dp?.src}
      />
    </button>
  );
}
