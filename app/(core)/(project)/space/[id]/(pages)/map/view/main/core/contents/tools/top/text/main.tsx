import { SvgInputProps } from '@/(types)/props/main';

export function SpaceMapTextIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-[1.5rem] w-[1.5rem] cursor-pointer'
      viewBox='0 0 24 24'
      fill='none'
    >
      <mask
        id='mask0_3284_72'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_3284_72)'>
        <path
          d='M3 18V16H15V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z'
          fill='#CBD5E1'
        />
      </g>
    </svg>
  );
}
