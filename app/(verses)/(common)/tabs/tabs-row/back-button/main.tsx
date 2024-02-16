import { CircleLeftIcon } from '@/(common)/icons/global/circle-left/main';
import { LinkInputProps } from '@/(common)/types/main';
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
