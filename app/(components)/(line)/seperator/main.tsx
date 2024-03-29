import { DivInputProps } from '@/(types)/main';

export interface SeperatorProps extends DivInputProps {}

export function Seperator({ ...props }: SeperatorProps) {
  return (
    <div
      className={`flex h-full w-[2rem] flex-shrink-0 flex-row items-center justify-center ${props.className}`}
    >
      <div className='h-[1px] w-full bg-slate-300 bg-opacity-30' />
    </div>
  );
}
