import { ButtonInputProps } from '@/types/props/main';

export function SpaceProgressEditPrev({ ...props }: ButtonInputProps) {
  return (
    <button
      className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-500'
      {...props}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-[2rem] w-[2rem]'
        viewBox='0 0 24 24'
        fill='none'
      >
        <mask
          id='mask0_3274_1787'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='25'
          height='25'
        >
          <rect
            x='0.541992'
            y='0.848572'
            width='24'
            height='24'
            fill='#D9D9D9'
          />
        </mask>
        <g mask='url(#mask0_3274_1787)'>
          <path
            d='M8.36699 13.8486L13.967 19.4486L12.542 20.8486L4.54199 12.8486L12.542 4.84857L13.967 6.24857L8.36699 11.8486H20.542V13.8486H8.36699Z'
            fill='#CBD5E1'
          />
        </g>
      </svg>
    </button>
  );
}
