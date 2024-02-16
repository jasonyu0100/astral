import { ButtonInputProps } from '@/(common)/types/main';

export function DraftHeaderFileButton({ ...props }: ButtonInputProps) {
  return (
    <button
      className='flex h-[60px] w-[60px] items-center justify-center hover:bg-slate-950'
      {...props}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className="w-1/2 h-1/2"
        viewBox='0 0 24 24'
        fill='none'
      >
        <mask
          id='mask0_3126_7'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='24'
          height='24'
        >
          <rect width='24' height='24' fill='#D9D9D9' />
        </mask>
        <g mask='url(#mask0_3126_7)'>
          <path
            d='M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H14L20 8V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM13 9V4H6V20H18V9H13Z'
            fill='#CBD5E1'
          />
        </g>
      </svg>
    </button>
  );
}
