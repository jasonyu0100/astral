import { SvgInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export function AstralCloseIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className={ctwn(
        'h-[1.5rem] w-[1.5rem] cursor-pointer fill-slate-300',
        props.className,
      )}
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 -960 960 960'
      width='24px'
      fill='#e8eaed'
    >
      <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
    </svg>
  );
}
