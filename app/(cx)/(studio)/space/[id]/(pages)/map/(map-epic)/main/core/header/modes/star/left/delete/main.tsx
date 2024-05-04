import { WrapperTooltip } from '@/(lib)/(basic)/tooltip/main';
import { ButtonInputProps } from '@/(types)/element/main';

export function StarDeleteButton({ ...props }: ButtonInputProps) {
  return (
    <WrapperTooltip text='Delete'>
      <button
        className={
          'flex h-[4rem] w-[4rem] items-center justify-center hover:bg-slate-950'
        }
        {...props}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 25 25'
          className='h-1/2 w-1/2'
          fill='none'
        >
          <mask
            id='mask0_3154_7'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='25'
            height='25'
          >
            <rect
              x='0.0290527'
              y='0.428711'
              width='24'
              height='24'
              fill='#D9D9D9'
            />
          </mask>
          <g mask='url(#mask0_3154_7)'>
            <path
              d='M6.42905 19.4287L5.02905 18.0287L10.6291 12.4287L5.02905 6.82871L6.42905 5.42871L12.0291 11.0287L17.6291 5.42871L19.0291 6.82871L13.4291 12.4287L19.0291 18.0287L17.6291 19.4287L12.0291 13.8287L6.42905 19.4287Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </button>
    </WrapperTooltip>
  );
}
