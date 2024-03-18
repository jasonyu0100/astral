import { FileOnChangeContext } from "@/(logic)/internal/contexts/fileOnChange/main";
import { SearchModalContext } from "@/(modals)/(components)/search-modal/main";
import { useContext } from "react";

export function SearchButton() {
    const { file } = useContext(FileOnChangeContext);
    const modalContext = useContext(SearchModalContext);

  return (
    <button
      className='relative mb-3 h-[100px] border-b border-black bg-slate-50 p-4'
      onClick={modalContext.searchModal.open}
    >
      <div className='flex h-full w-full flex-row items-center space-x-[1rem]'>
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
            <rect width='48' height='48' className='fill-slate-400' />
          </mask>
          <g mask='url(#mask0_3090_7)'>
            <path
              d='M39.2 42L26.6 29.4C25.6 30.2 24.45 30.8333 23.15 31.3C21.85 31.7667 20.4667 32 19 32C15.3667 32 12.2917 30.7417 9.775 28.225C7.25833 25.7083 6 22.6333 6 19C6 15.3667 7.25833 12.2917 9.775 9.775C12.2917 7.25833 15.3667 6 19 6C22.6333 6 25.7083 7.25833 28.225 9.775C30.7417 12.2917 32 15.3667 32 19C32 20.4667 31.7667 21.85 31.3 23.15C30.8333 24.45 30.2 25.6 29.4 26.6L42 39.2L39.2 42ZM19 28C21.5 28 23.625 27.125 25.375 25.375C27.125 23.625 28 21.5 28 19C28 16.5 27.125 14.375 25.375 12.625C23.625 10.875 21.5 10 19 10C16.5 10 14.375 10.875 12.625 12.625C10.875 14.375 10 16.5 10 19C10 21.5 10.875 23.625 12.625 25.375C14.375 27.125 16.5 28 19 28Z'
              className='fill-slate-400'
            />
          </g>
        </svg>
        <p className='mt-1 text-lg font-bold text-slate-500'>
          {file.title === undefined ? 'No image selected' : file.title}
        </p>
      </div>
    </button>
  );
}
