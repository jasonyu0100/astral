import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { WrapperTooltip } from '@/(lib)/(basic)/tooltip/main';
import { glassFx } from '@/(fx)/data';
import { ButtonInputProps } from '@/(types)/element/main';

export function MapSaveButton({ ...props }: ButtonInputProps) {
  return (
    <WrapperTooltip text='Save'>
      <button
        className={
          'flex h-[4rem] w-[4rem] flex-col items-center justify-center hover:bg-slate-950'
        }
        {...props}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-[30px] w-[30px]'
          viewBox='0 0 25 25'
          fill='none'
        >
          <mask
            id='mask0_2987_49'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='25'
            height='25'
          >
            <rect
              x='0.287628'
              y='0.174683'
              width='24'
              height='24'
              fill='#D9D9D9'
            />
          </mask>
          <g mask='url(#mask0_2987_49)'>
            <path
              d='M21.2876 7.17468V19.1747C21.2876 19.7247 21.0918 20.1955 20.7001 20.5872C20.3085 20.9788 19.8376 21.1747 19.2876 21.1747H5.28763C4.73763 21.1747 4.26679 20.9788 3.87513 20.5872C3.48346 20.1955 3.28763 19.7247 3.28763 19.1747V5.17468C3.28763 4.62468 3.48346 4.15385 3.87513 3.76218C4.26679 3.37052 4.73763 3.17468 5.28763 3.17468H17.2876L21.2876 7.17468ZM19.2876 8.02468L16.4376 5.17468H5.28763V19.1747H19.2876V8.02468ZM12.2876 18.1747C13.121 18.1747 13.8293 17.883 14.4126 17.2997C14.996 16.7163 15.2876 16.008 15.2876 15.1747C15.2876 14.3413 14.996 13.633 14.4126 13.0497C13.8293 12.4663 13.121 12.1747 12.2876 12.1747C11.4543 12.1747 10.746 12.4663 10.1626 13.0497C9.57929 13.633 9.28763 14.3413 9.28763 15.1747C9.28763 16.008 9.57929 16.7163 10.1626 17.2997C10.746 17.883 11.4543 18.1747 12.2876 18.1747ZM6.28763 10.1747H15.2876V6.17468H6.28763V10.1747Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </button>
    </WrapperTooltip>
  );
}
