import { SvgInputProps } from '@/types/props/main';

export function AstralVoiceIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className='h-[1.5rem] w-[1.5rem] cursor-pointer'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
    >
      <mask
        id='mask0_1086_1054'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_1086_1054)'>
        <path
          d='M7 18V6H9V18H7ZM11 22V2H13V22H11ZM3 14V10H5V14H3ZM15 18V6H17V18H15ZM19 14V10H21V14H19Z'
          fill='#CBD5E1'
        />
      </g>
    </svg>
  );
}
