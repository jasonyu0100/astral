import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';
import { glassFx } from '@/(fx)/data';

export function HorizonsHeader() {
  return (
    <GlassAreaContainer
      name={HorizonsHeader.name}
      sizeFx='w-full h-[4rem]'
      glassFx={glassFx['glass-5']}
      className='flex flex-row items-center justify-between px-[50px]'
    >
      <div className='flex w-1/3 flex-row justify-start '></div>
      <div className='flex w-1/3  flex-row justify-center gap-[1rem]'>
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
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
        <p className='text-3xl font-bold text-slate-300'>2024 Q1</p>{' '}
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <mask
              id='mask0_3194_7'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='24'
              height='24'
            >
              <rect width='24' height='24' fill='#D9D9D9' />
            </mask>
            <g mask='url(#mask0_3194_7)'>
              <path
                d='M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z'
                fill='#CBD5E1'
              />
            </g>
          </svg>
        </button>
      </div>
      <div className='flex w-1/3 flex-row justify-end '>
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
          >
            <mask
              id='mask0_3140_7'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='25'
              height='25'
            >
              <rect
                x='0.777588'
                y='0.335144'
                width='24'
                height='24'
                fill='#D9D9D9'
              />
            </mask>
            <g mask='url(#mask0_3140_7)'>
              <path
                d='M11.7776 13.3351H5.77759V11.3351H11.7776V5.33514H13.7776V11.3351H19.7776V13.3351H13.7776V19.3351H11.7776V13.3351Z'
                fill='#CBD5E1'
              />
            </g>
          </svg>
        </button>
      </div>
    </GlassAreaContainer>
  );
}
