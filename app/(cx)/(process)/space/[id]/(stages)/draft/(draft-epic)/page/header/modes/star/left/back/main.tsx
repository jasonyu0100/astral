import { ButtonInputProps } from '@/(types)/main';

export function DraftHeaderStarBackButton({ ...props }: ButtonInputProps) {
  return (
    <button
      className={"flex h-[60px] w-[60px] items-center justify-center hover:bg-slate-950 border-r border-slate-500 border-opacity-30"}
      {...props}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className="w-1/2 h-1/2"
        viewBox='0 0 24 24'
        fill='none'
      >
        <mask
          id='mask0_3148_31'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='24'
          height='24'
        >
          <rect width='24' height='24' fill='#D9D9D9' />
        </mask>
        <g mask='url(#mask0_3148_31)'>
          <path
            d='M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z'
            fill='#CBD5E1'
          />
        </g>
      </svg>
    </button>
  );
}
