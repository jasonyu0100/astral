import { ContextForFileChangable } from '@/(logic)/contexts/fileChangable/main';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import { useContext } from 'react';

export function DisplayImagePreview() {
  const { fileElem: file, updateFileElem: onChange } = useContext(ContextForFileChangable);

  return (
    <div className='flex w-full flex-row items-center py-[1rem]'>
      <div className='relative flex h-[150px] w-[150px] flex-shrink-0 items-center justify-center rounded-full border-slate-300 bg-slate-100'>
        {file?.src ? (
          <>
            <img
              className='h-[150px] w-[150px] flex-shrink-0 rounded-full bg-black object-cover shadow-md'
              src={file?.src}
              onClick={() => onChange({} as FileElem)}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              className='absolute h-1/2 w-1/2 opacity-0 hover:opacity-100'
              viewBox='0 0 24 24'
              onClick={() => onChange({} as FileElem)}
              fill='none'
            >
              <mask
                id='mask0_3173_13'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='24'
                height='24'
              >
                <rect width='24' height='24' fill='#D9D9D9' 
                className="fill-slate-300 opacity-30"
                />
              </mask>
              <g mask='url(#mask0_3173_13)'>
                <path
                  d='M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z'
                  fill='#CBD5E1'
                />
              </g>
            </svg>
          </>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-1/2 w-1/2'
            viewBox='0 0 24 24'
            fill='none'
          >
            <mask
              id='mask0_3171_7'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='24'
              height='24'
            >
              <rect width='24' height='24' fill='#D9D9D9' />
            </mask>
            <g mask='url(#mask0_3171_7)'>
              <path
                d='M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19ZM6 17H18L14.25 12L11.25 16L9 13L6 17Z'
                fill='#CBD5E1'
              />
            </g>
          </svg>
        )}
      </div>
      {file?.src && (
        <div className='ml-[3rem] flex flex-grow flex-col space-y-[1rem] py-[1rem]'>
          <p className='text-xl font-bold capitalize text-slate-500'>
            {file?.title}
          </p>
          <div className='flex flex-row'>
            <p className='font-bold text-slate-300'>
              {file?.variant}, {file?.size} bytes
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
