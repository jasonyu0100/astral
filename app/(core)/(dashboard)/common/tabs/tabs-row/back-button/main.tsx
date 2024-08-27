import { CircleLeftIcon } from '@/(core)/(dashboard)/common//tabs/tabs-row/back-button/circle-left/main';
import { LinkInputProps } from '@/types/props/main';
import Link from 'next/link';

export function TabsBackButton({ ...props }: LinkInputProps) {
  return (
    <Link
      {...props}
      className='mr-[3rem] flex h-[3rem] w-[2rem] flex-col items-start justify-center'
    >
      <CircleLeftIcon />
    </Link>
  );
}
