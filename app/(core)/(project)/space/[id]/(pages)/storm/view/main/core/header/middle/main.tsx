import SpaceStormHeaderMiddleTitle from './title/main';

export function SpaceStormHeaderMiddle() {
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <SpaceStormHeaderMiddleTitle />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-[1.5rem] w-[1.5rem]'
        viewBox='0 0 25 25'
        fill='none'
      >
        <mask
          id='mask0_3268_19'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='25'
          height='25'
        >
          <rect
            x='0.0512695'
            y='0.798035'
            width='24'
            height='24'
            fill='#D9D9D9'
          />
        </mask>
        <g mask='url(#mask0_3268_19)'>
          <path
            d='M12.6513 12.798L8.05127 8.19803L9.45127 6.79803L15.4513 12.798L9.45127 18.798L8.05127 17.398L12.6513 12.798Z'
            fill='#CBD5E1'
          />
        </g>
      </svg>
    </div>
  );
}
