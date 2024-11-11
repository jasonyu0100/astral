import { AstralArrowCircleLeftIcon } from '@/icons/arrow-circle-left/main';
import { LinkInputProps } from '@/props/main';
import Link from 'next/link';

export function CommonSidebarTopBack({ ...props }: LinkInputProps) {
  return (
    <Link href={props.href as string}>
      <AstralArrowCircleLeftIcon className='h-[2.5rem] w-[2.5rem] flex-shrink-0' />
    </Link>
  );
}
