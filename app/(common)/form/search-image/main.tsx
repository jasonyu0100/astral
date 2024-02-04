import { FileObj } from '@/tables/file/main';
import React, { useState } from 'react';
import SearchModal from '@/(common)/form/search-image/search-modal/main';

export function FormSearchImage({
  onChange,
  label,
}: {
  onChange: (file: FileObj) => void;
  label: string;
}) {
  const [selectedImage, changeSelectedImage] = useState({} as FileObj);
  const [showModal, changeShowModal] = useState(false);

  return (
    <>
      <SearchModal
        isOpen={showModal}
        onClose={() => changeShowModal(false)}
        onChange={(file) => {
          onChange(file);
          changeSelectedImage(file);
        }}
      />
      <div className='flex flex-col bg-white'>
        <label
          htmlFor='fileInput'
          className='w-full text-slate-400 text-xs font-bold mb-1'
        >
          {label}
        </label>
        {selectedImage.id === undefined && (
          <button
            className='relative p-4 border-black border-b bg-slate-50 mb-3 h-[100px]'
            onClick={() => changeShowModal(true)}
          >
            <div className='flex flex-row w-full items-center space-x-[1rem] h-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='48'
                height='48'
                viewBox='0 0 48 48'
                fill='none'
              >
                <mask
                  id='mask0_3090_7'
                  maskUnits='userSpaceOnUse'
                  x='0'
                  y='0'
                  width='48'
                  height='48'
                >
                  <rect width='48' height='48' className="fill-slate-300" />
                </mask>
                <g mask='url(#mask0_3090_7)'>
                  <path
                    d='M39.2 42L26.6 29.4C25.6 30.2 24.45 30.8333 23.15 31.3C21.85 31.7667 20.4667 32 19 32C15.3667 32 12.2917 30.7417 9.775 28.225C7.25833 25.7083 6 22.6333 6 19C6 15.3667 7.25833 12.2917 9.775 9.775C12.2917 7.25833 15.3667 6 19 6C22.6333 6 25.7083 7.25833 28.225 9.775C30.7417 12.2917 32 15.3667 32 19C32 20.4667 31.7667 21.85 31.3 23.15C30.8333 24.45 30.2 25.6 29.4 26.6L42 39.2L39.2 42ZM19 28C21.5 28 23.625 27.125 25.375 25.375C27.125 23.625 28 21.5 28 19C28 16.5 27.125 14.375 25.375 12.625C23.625 10.875 21.5 10 19 10C16.5 10 14.375 10.875 12.625 12.625C10.875 14.375 10 16.5 10 19C10 21.5 10.875 23.625 12.625 25.375C14.375 27.125 16.5 28 19 28Z'
                    fill='#1C1B1F'
                  />
                </g>
              </svg>
              <p className='mt-1 text-lg text-slate-500 font-bold'>
                {selectedImage.name === undefined
                  ? 'No image selected'
                  : selectedImage.name}
              </p>
            </div>
          </button>
        )}
        {selectedImage.id !== undefined && (
            <div className='flex flex-row w-full space-x-[2rem] items-center justify-between pr-[2rem] bg-slate-50 border-b border-black'>
                <div className='flex flex-row space-x-[2rem] items-center'>
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.name}
                        className='bg-black h-[100px] aspect-square shadow-md'
                    />
                    <div className='flex flex-col'>
                        <p className='text-lg font-bold'>{selectedImage.name}</p>
                        <p className='text-sm text-slate-500'>{selectedImage.fileType}</p>
                        <p className='text-md text-slate-500'>
                        {selectedImage.size} bytes
                        </p>
                    </div>
              </div>
              <button
                className='w-[30px] h-[30px] bg-red-500 rounded-full'
                onClick={() => {
                  changeSelectedImage({} as FileObj);
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-full h-full'
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
                    <rect width='24' height='24' className='fill-slate-50' />
                  </mask>
                  <g mask='url(#mask0_2962_7)'>
                    <path
                      d='M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z'
                      className='fill-slate-100'
                    />
                  </g>
                </svg>
              </button>
            </div>
        )}
      </div>
    </>
  );
}
