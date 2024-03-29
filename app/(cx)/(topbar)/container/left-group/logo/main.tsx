import { LinkInputProps } from '@/(logic)/types/element/main';
import Link from 'next/link';

export function TopbarLogo({ ...props }: LinkInputProps) {
  return (
    <Link
      className='flex h-full w-[15rem] flex-shrink-0 flex-row items-center px-[1rem]'
      {...props}
    >
      <img src='/brand/logo.png' className='ml-[4px] w-[12rem] animate-pulse-slow' alt='Ouros' />
    </Link>
  );
}
