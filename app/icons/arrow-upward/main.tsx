import { SvgInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export function AstralArrowUpwardIcon({ ...props }: SvgInputProps) {
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
      <path d='M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z' />
    </svg>
  );
}
