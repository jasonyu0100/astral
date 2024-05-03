import { SvgInputProps } from '@/(lgx)/types/element/main';

export function VisualIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-1/2 w-1/2'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <mask
        id='mask0_3151_38'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_3151_38)'>
        <path
          d='M12 21.05L3 14.05L4.65 12.8L12 18.5L19.35 12.8L21 14.05L12 21.05ZM12 16L3 9L12 2L21 9L12 16ZM12 13.45L17.75 9L12 4.55L6.25 9L12 13.45Z'
          fill='#CBD5E1'
        />
      </g>
    </svg>
  );
}
