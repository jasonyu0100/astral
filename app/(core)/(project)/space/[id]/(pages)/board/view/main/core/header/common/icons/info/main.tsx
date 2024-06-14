import { SvgInputProps } from '@/(types)/props/main';

export function InfoIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className='h-1/2 w-1/2'
      fill='none'
    >
      <mask
        id='mask0_3147_25'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_3147_25)'>
        <path
          d='M14 20V7H9V4H22V7H17V20H14ZM5 20V12H2V9H11V12H8V20H5Z'
          fill='#CBD5E1'
        />
      </g>
    </svg>
  );
}
