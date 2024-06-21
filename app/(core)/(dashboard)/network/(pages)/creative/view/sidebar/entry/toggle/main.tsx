import { ContextForTogglable } from '@/(logic)/contexts/togglable/main';
import { useContext } from 'react';

export function CreativeNetworkSidebarEntryToggle() {
  const { toggled, toggle } = useContext(ContextForTogglable);
  return (
    <div className='flex w-full flex-col'>
      <div className='mt-auto flex flex-row  items-center justify-between'>
        <div className='flex w-full flex-row items-center space-x-[2rem]'>
          <div className='flex flex-col'>
            <p className='text-lg font-bold text-slate-300'>Project Horizon</p>
            <p className='text-md font-bold text-slate-400'>John Smith</p>
          </div>
        </div>
        <button className='h-[50px] w-[50px]' onClick={() => toggle()}>
          {toggled ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-1/2 w-1/2'
              viewBox='0 0 24 24'
              fill='none'
            >
              <mask
                id='mask0_3190_7'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='24'
                height='24'
              >
                <rect width='24' height='24' fill='#D9D9D9' />
              </mask>
              <g mask='url(#mask0_3190_7)'>
                <path
                  d='M12 15.375L6 9.37498L7.4 7.97498L12 12.575L16.6 7.97498L18 9.37498L12 15.375Z'
                  fill='#CBD5E1'
                />
              </g>
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <mask
                id='mask0_3190_13'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='24'
                height='24'
              >
                <rect width='24' height='24' fill='#D9D9D9' />
              </mask>
              <g mask='url(#mask0_3190_13)'>
                <path
                  d='M7.4 15.375L6 13.975L12 7.97498L18 13.975L16.6 15.375L12 10.775L7.4 15.375Z'
                  fill='#CBD5E1'
                />
              </g>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
