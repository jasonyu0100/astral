import { AstralArrowCircleLeftIcon } from '@/icons/arrow-circle-left/main';
import { LinkInputProps } from '@/types/props/main';
import Link from 'next/link';

export function DashboardSidebarTopBack({ ...props }: LinkInputProps) {
  return (
    <Link
      className='flex h-[3rem] w-full items-center gap-[1rem] self-stretch'
      {...props}
    >
      <AstralArrowCircleLeftIcon className='h-[2.5rem] w-[2.5rem]' />
    </Link>
  );
}
