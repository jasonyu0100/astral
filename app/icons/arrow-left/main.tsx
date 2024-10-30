import { SvgInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export function AstralArrowLeft({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className={ctwn(
        'h-[1.5rem] w-[1.5rem]  cursor-pointer fill-slate-300',
        props.className,
      )}
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 -960 960 960'
      width='24px'
      fill='#e8eaed'
    >
      <path d='M560-280 360-480l200-200v400Z' />
    </svg>
  );
}
