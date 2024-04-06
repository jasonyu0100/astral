import { WrapperTooltip } from '@/(components)/(basic)/tooltip/main';
import { ButtonInputProps } from '@/(logic)/types/element/main';

export function DraftHeaderFileButton({ ...props }: ButtonInputProps) {
  return (
    <WrapperTooltip text='Add File'>
      <button
        className='flex h-[4rem] w-[4rem] items-center justify-center hover:bg-slate-950'
        {...props}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-1/2 w-1/2'
          viewBox='0 0 25 25'
          fill='none'
        >
          <mask
            id='mask0_3146_7'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='25'
            height='25'
          >
            <rect
              x='0.19165'
              y='0.572327'
              width='24'
              height='24'
              fill='#D9D9D9'
            />
          </mask>
          <g mask='url(#mask0_3146_7)'>
            <path
              d='M5.19165 21.5723C4.64165 21.5723 4.17082 21.3765 3.77915 20.9848C3.38748 20.5932 3.19165 20.1223 3.19165 19.5723V5.57233C3.19165 5.02233 3.38748 4.55149 3.77915 4.15983C4.17082 3.76816 4.64165 3.57233 5.19165 3.57233H19.1917C19.7417 3.57233 20.2125 3.76816 20.6042 4.15983C20.9958 4.55149 21.1917 5.02233 21.1917 5.57233V19.5723C21.1917 20.1223 20.9958 20.5932 20.6042 20.9848C20.2125 21.3765 19.7417 21.5723 19.1917 21.5723H5.19165ZM5.19165 19.5723H19.1917V5.57233H5.19165V19.5723ZM6.19165 17.5723H18.1917L14.4417 12.5723L11.4417 16.5723L9.19165 13.5723L6.19165 17.5723Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </button>
    </WrapperTooltip>
  );
}
