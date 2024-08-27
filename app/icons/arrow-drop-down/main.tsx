import { SvgInputProps } from '@/types/props/main';
import { cn } from '@/utils/cn';

export function AstralArrowDropDown({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className={cn(
        'h-[1.5rem] w-[1.5rem]  cursor-pointer fill-slate-300',
        props.className,
      )}
      xmlns='http://www.w3.org/2000/svg'
      enable-background='new 0 0 24 24'
      viewBox='0 0 24 24'
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M7 10l5 5 5-5H7z' />
    </svg>
  );
}
