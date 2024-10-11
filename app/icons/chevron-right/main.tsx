import { SvgInputProps } from '@/props/main';
import { cn } from '@/utils/cn';

export function AstralChevronRightIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className={cn(
        'h-[1.5rem] w-[1.5rem]  cursor-pointer fill-slate-300',
        props.className,
      )}
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 -960 960 960'
      width='24px'
    >
      <path d='M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z' />
    </svg>
  );
}
