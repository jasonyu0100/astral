import { ButtonInputProps } from '@/(types)/props/main';

export function SpaceSeaEditNext({ ...props }: ButtonInputProps) {
  return (
    <button className='h-[5rem] w-[5rem] rounded-full bg-blue-500' {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-[3/4] w-[3/4]'
        viewBox='0 0 24 24'
        fill='none'
      >
        <mask
          id='mask0_3270_3507'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='24'
          height='24'
        >
          <rect width='24' height='24' fill='#D9D9D9' />
        </mask>
        <g mask='url(#mask0_3270_3507)'>
          <path
            d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z'
            fill='#CBD5E1'
          />
        </g>
      </svg>
    </button>
  );
}
