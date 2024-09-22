import { SvgInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export function AstralChevronDownIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className={ctwn(
        'h-[1.5rem] w-[1.5rem]  cursor-pointer fill-slate-300',
        props.className,
      )}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
    >
      <path d='M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z' />
    </svg>
  );
}
