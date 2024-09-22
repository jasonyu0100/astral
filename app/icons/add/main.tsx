import { SvgInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export function AstralAddIcon({ ...props }: SvgInputProps) {
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
      <path d='M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z' />
    </svg>
  );
}
