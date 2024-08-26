import { SvgInputProps } from '@/types/props/main';

export function SpaceMapJournalIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className='h-[1.5rem] w-[1.5rem] cursor-pointer'
      fill='none'
      {...props}
    >
      <mask
        id='mask0_3263_5803'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_3263_5803)'>
        <path
          d='M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM6 20H18V4H16V11L13.5 9.5L11 11V4H6V20Z'
          fill='#CBD5E1'
        />
      </g>
    </svg>
  );
}
