import { LinkInputProps } from '@/(types)/element/main';
import Link from 'next/link';

export function TopbarLogo({ ...props }: LinkInputProps) {
  return (
    <Link
      className='flex h-full w-[16rem] flex-shrink-0 flex-row items-center'
      {...props}
    >
      <img src='/brand/logo.png' className='h-[3rem] pl-[3px] animate-pulse-slow' alt='Ouros' />
    </Link>
  );
}
