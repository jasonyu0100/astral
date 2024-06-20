import { ButtonInputProps } from '@/(types)/props/main';

export function SpaceSeaEditDone({ ...props }: ButtonInputProps) {
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
          id='mask0_3275_1793'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='24'
          height='24'
        >
          <rect width='24' height='24' fill='#D9D9D9' />
        </mask>
        <g mask='url(#mask0_3275_1793)'>
          <path
            d='M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z'
            fill='#CBD5E1'
          />
        </g>
      </svg>
    </button>
  );
}
