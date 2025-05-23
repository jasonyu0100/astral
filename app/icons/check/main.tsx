import { SvgInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export function AstralCheckIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className={ctwn(
        'h-[1.5rem] w-[1.5rem] cursor-pointer fill-slate-300',
        props.className,
      )}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
    >
      <path d='M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z' />
    </svg>
  );
}
