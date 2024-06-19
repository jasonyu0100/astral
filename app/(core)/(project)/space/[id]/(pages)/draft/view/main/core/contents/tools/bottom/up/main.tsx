import { SvgInputProps } from '@/(types)/props/main';

export function SpaceDraftUpIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className='h-[2rem] w-[2rem] cursor-pointer'
      fill='none'
      {...props}
    >
      <mask
        id='mask0_3266_7'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='25'
        height='25'
      >
        <rect
          x='0.0400391'
          y='0.563477'
          width='24'
          height='24'
          fill='#D9D9D9'
        />
      </mask>
      <g mask='url(#mask0_3266_7)'>
        <path
          d='M12.04 11.3635L7.44004 15.9635L6.04004 14.5635L12.04 8.56348L18.04 14.5635L16.64 15.9635L12.04 11.3635Z'
          fill='#CBD5E1'
        />
      </g>
    </svg>
  );
}
