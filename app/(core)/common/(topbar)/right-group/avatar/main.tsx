'use client';
import { useGlobalUser } from '@/logic/store/user/main';
import { LinkInputProps } from '@/types/props/main';
import Link from 'next/link';

export function TopbarAvatar({ ...props }: LinkInputProps) {
  const user = useGlobalUser((state) => state.user);

  return (
    <Link className='flex h-full items-center' aria-current='page' {...props}>
      <img
        className='h-[2.5rem] w-[2.5rem] rounded-full shadow-glow'
        src={'/brand/icon-bg-sm.png' || user?.dp?.src}
      />
    </Link>
  );
}
