import { SvgInputProps } from '@/props/main';
import { cn } from '@/utils/cn';

export function AstralChevronUpIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className={cn(
        'h-[1.5rem] w-[1.5rem]  cursor-pointer fill-slate-300',
        props.className,
      )}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
    >
      <path d='M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z' />
    </svg>
  );
}
