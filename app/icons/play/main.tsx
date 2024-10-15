import { SvgInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export function AstralPlayIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className={ctwn(
        'h-[1.5rem] w-[1.5rem] cursor-pointer fill-slate-300',
        props.className,
      )}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
    >
      <mask
        id='mask0_2968_7'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_2968_7)'>
        <path d='M8 19V5L19 12L8 19Z' fill='#CBD5E1' />
      </g>
    </svg>
  );
}
