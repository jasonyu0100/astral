import { AstralArrowCircleLeftIcon } from '@/icons/arrow-circle-left/main';
import { LinkInputProps } from '@/props/main';

export function CommonSidebarTopBack({ ...props }: LinkInputProps) {
  return (
    <AstralArrowCircleLeftIcon
      className='h-[2.5rem] w-[2.5rem] flex-shrink-0'
      onClick={() => {
        window.location.href = props.href as string;
      }}
    />
  );
}
