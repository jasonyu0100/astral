import { SvgInputProps } from '@/props/main';

export function AstralSendIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className='h-[1.5rem] w-[1.5rem] cursor-pointer'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
    >
      <mask
        id='mask0_1085_17421'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' className='fill-slate-300' />
      </mask>
      <g mask='url(#mask0_1085_17421)'>
        <path
          d='M11 20V7.825L5.4 13.425L4 12L12 4L20 12L18.6 13.425L13 7.825V20H11Z'
          fill='#CBD5E1'
        />
      </g>
    </svg>
  );
}
