import { WrapperTooltip } from '@/(lib)/(basic)/tooltip/main';
import { ButtonInputProps } from '@/(types)/element/main';

export function StarEditButton({ ...props }: ButtonInputProps) {
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
            id='mask0_3158_7'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='25'
            height='25'
          >
            <rect
              x='0.135742'
              y='0.546173'
              width='24'
              height='24'
              fill='#D9D9D9'
            />
          </mask>
          <g mask='url(#mask0_3158_7)'>
            <path
              d='M5.13574 19.5462H6.56074L16.3357 9.77117L14.9107 8.34617L5.13574 18.1212V19.5462ZM3.13574 21.5462V17.2962L16.3357 4.12117C16.5357 3.93784 16.7566 3.79617 16.9982 3.69617C17.2399 3.59617 17.4941 3.54617 17.7607 3.54617C18.0274 3.54617 18.2857 3.59617 18.5357 3.69617C18.7857 3.79617 19.0024 3.94617 19.1857 4.14617L20.5607 5.54617C20.7607 5.72951 20.9066 5.94617 20.9982 6.19617C21.0899 6.44617 21.1357 6.69617 21.1357 6.94617C21.1357 7.21284 21.0899 7.46701 20.9982 7.70867C20.9066 7.95034 20.7607 8.17117 20.5607 8.37117L7.38574 21.5462H3.13574ZM15.6107 9.07117L14.9107 8.34617L16.3357 9.77117L15.6107 9.07117Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </button>
    </WrapperTooltip>
  );
}
