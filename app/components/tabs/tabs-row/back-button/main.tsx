import { AstralArrowCircleLeftIcon } from '@/icons/arrow-circle-left/main';
import { LinkInputProps } from '@/props/main';
import Link from 'next/link';

export function TabsBackButton({ ...props }: LinkInputProps) {
  return (
    <Link
      {...props}
      className='mr-[3rem] flex h-[3rem] w-[2rem] flex-col items-start justify-center'
    >
      <AstralArrowCircleLeftIcon className='h-[2.5rem] w-[2.5rem]' />
    </Link>
  );
}
