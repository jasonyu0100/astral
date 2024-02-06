import { CircleLeftIcon } from '@/(common)/icons/global/circle-left/main';
import { LinkInputProps } from '@/(common)/types/main';

export function TabsBackButton({ ...props }: LinkInputProps) {
  return (
    <a
      {...props}
      className='mr-[3rem] flex h-[3rem] w-[2rem] flex-col items-start justify-center'
    >
      <CircleLeftIcon />
    </a>
  );
}
