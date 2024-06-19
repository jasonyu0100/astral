import { SvgInputProps } from '@/(types)/props/main';

export function SpaceDraftCursorIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-[2rem] w-[2rem] cursor-pointer'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <mask
        id='mask0_3260_5779'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_3260_5779)'>
        <path
          d='M13.775 22L10.15 14.2L6 20V2L20 13H12.9L16.5 20.725L13.775 22Z'
          fill='#CBD5E1'
        />
      </g>
    </svg>
  );
}
