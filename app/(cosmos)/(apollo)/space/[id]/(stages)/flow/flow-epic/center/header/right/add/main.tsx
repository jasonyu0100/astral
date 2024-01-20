import { ButtonInputProps } from '@/(common)/types/main';

export function FlowHeaderAddButton({ ...props }: ButtonInputProps) {
  return (
    <button
      className='w-[60px] h-[60px] flex items-center justify-center hover:bg-slate-950'
      {...props}
      {...props}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'
      >
        <mask
          id='mask0_2941_2727'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='30'
          height='30'
        >
          <rect width='30' height='30' fill='#D9D9D9' />
        </mask>
        <g mask='url(#mask0_2941_2727)'>
          <path
            d='M13.75 16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75V16.25Z'
            fill='#CBD5E1'
          />
        </g>
      </svg>
    </button>
  );
}
