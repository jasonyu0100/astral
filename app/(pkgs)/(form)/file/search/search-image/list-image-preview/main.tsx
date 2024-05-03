import { FileOnChangeContext } from '@/(lgx)/internal/contexts/fileOnChange/main';
import { FileObj } from '@/(lgx)/internal/model/resource/file/main';
import { useContext } from 'react';

export function SearchImageListPreview() {
  const { file, onChange } = useContext(FileOnChangeContext);

  return (
    <div className='flex w-full flex-row items-center justify-between space-x-[2rem] border-b border-black bg-slate-50 pr-[2rem]'>
      <div className='flex flex-row items-center space-x-[2rem]'>
        <img
          src={file.src}
          alt={file.title}
          className='aspect-square h-[100px] bg-black shadow-md'
        />
        <div className='flex flex-col'>
          <p className='text-lg font-bold'>{file.title}</p>
          <p className='text-sm text-slate-500'>{file.fileType}</p>
          <p className='text-md text-slate-500'>{file.size} bytes</p>
        </div>
      </div>
      <button
        className='h-[30px] w-[30px] rounded-full'
        onClick={() => {
          onChange({} as FileObj);
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
    </div>
  );
}
