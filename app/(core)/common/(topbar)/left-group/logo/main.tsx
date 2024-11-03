import { LinkInputProps } from '@/props/main';
import Link from 'next/link';

export function TopbarLogo({ ...props }: LinkInputProps) {
  return (
    <Link
      className='flex h-full w-[16rem] flex-shrink-0 flex-row items-center'
      {...props}
    >
      <img
        src={'/brand/logo-astral-light.png'}
        className='w-[12rem] animate-pulse-slow pl-[3px]'
        alt='Ouros'
      />
    </Link>
  );
}
