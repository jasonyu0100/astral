import { CircleLeftIcon } from '@/(components)/icons/global/circle-left/main';
import { LinkInputProps } from '@/(components)/types/main';
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
