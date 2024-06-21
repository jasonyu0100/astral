import { SvgInputProps } from '@/(types)/props/main';

export function SpaceMapDownIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className='h-[2rem] w-[2rem] cursor-pointer'
      fill='none'
      {...props}
    >
      <mask
        id='mask0_3266_13'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_3266_13)'>
        <path
          d='M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z'
          fill='#CBD5E1'
        />
      </g>
    </svg>
  );
}
