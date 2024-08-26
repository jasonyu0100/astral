import { UploadHandlerContext } from '@/api/controller/s3/single/main';
import { useContext } from 'react';

export function UploadedEntryRemove() {
  const uploadHandler = useContext(UploadHandlerContext);

  return (
    <button
      className='h-[30px] w-[30px] flex-shrink-0 rounded-full'
      onClick={() => {
        uploadHandler.uploadActions.clearFile();
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-full w-full'
        viewBox='0 0 24 24'
        fill='none'
      >
        <mask
          id='mask0_2962_7'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='24'
          height='24'
        >
          <rect width='24' height='24' className='fill-slate-500' />
        </mask>
        <g mask='url(#mask0_2962_7)'>
          <path
            d='M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z'
            className='fill-slate-500'
          />
        </g>
      </svg>
    </button>
  );
}
