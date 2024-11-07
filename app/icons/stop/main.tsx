import { SvgInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export function AstralStopIcon({ ...props }: SvgInputProps) {
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
      <path d='M320-640v320-320Zm-80 400v-480h480v480H240Zm80-80h320v-320H320v320Z' />
    </svg>
  );
}
