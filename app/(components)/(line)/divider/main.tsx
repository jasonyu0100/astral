import { DivInputProps } from '@/(logic)/types/element/main';

export interface DividerProps extends DivInputProps {}

export function Divider({ ...props }: DividerProps) {
  return (
    <div
      className={`flex h-[0px] w-full flex-shrink-0 flex-row items-center ${props.className}`}
    >
      <div className='h-[1px] w-full bg-slate-500 bg-opacity-30' />
    </div>
  );
}
