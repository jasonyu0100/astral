import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { useContext } from 'react';

export function CollectionResourceAudio() {
  const resource = useContext(ContextForCollectionResourceObj);

  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col'>
      <div className='flex aspect-square w-full flex-shrink-0 items-center justify-center bg-slate-950 p-[30px]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='h-1/2 w-1/2'
          fill='none'
        >
          <mask
            id='mask0_3134_7'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='24'
            height='24'
          >
            <rect width='24' height='24' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_3134_7)'>
            <path
              d='M10 21C8.9 21 7.95833 20.6083 7.175 19.825C6.39167 19.0417 6 18.1 6 17C6 15.9 6.39167 14.9583 7.175 14.175C7.95833 13.3917 8.9 13 10 13C10.3833 13 10.7375 13.0458 11.0625 13.1375C11.3875 13.2292 11.7 13.3667 12 13.55V3H18V7H14V17C14 18.1 13.6083 19.0417 12.825 19.825C12.0417 20.6083 11.1 21 10 21Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </div>
      <p className='mt-[1rem] w-full text-center font-extraBold text-xl'>
        {resource.title}
      </p>
    </div>
  );
}
