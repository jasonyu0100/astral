import { LinkInputProps } from '@/(types)/props/main';
import Link from 'next/link';

export function TopbarLogo({ ...props }: LinkInputProps) {
  return (
    <Link
      className='mr-[2rem] flex h-full flex-shrink-0 flex-row items-center'
      {...props}
    >
      <p className='text-4xl font-black text-slate-900'></p>
    </Link>
  );
}
