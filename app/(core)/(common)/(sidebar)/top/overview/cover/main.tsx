'use client';
import { ContextForCurrentSpaceObj } from '@/(server)/(model)/space/main';
import { effectFx } from '@/(style)/data';
import { cn } from '@/(utils)/cn';
import { useContext } from 'react';
import { ContextForDashboardSidebar } from '../../../main';

export function DashboardSidebarTopOveriewCover() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const active = !dashboardSidebar.indicator;
  const currentSpace = useContext(ContextForCurrentSpaceObj);

  return (
    <div className='relative flex-shrink-0'>
      {dashboardSidebar.minimised ? (
        <svg
          className='h-full w-full'
          xmlns='http://www.w3.org/2000/svg'
          width='2.5rem'
          height='2.5rem'
          viewBox='0 0 32 32'
          fill='none'
          style={{ width: '2.5rem', height: '2.5rem' }}
        >
          <mask
            id='mask0_1252_7476'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='32'
            height='32'
          >
            <rect width='32' height='32' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_1252_7476)'>
            <path
              d='M16 21.3333L17.8667 19.4667L15.7333 17.3333H21.3333V14.6667H15.7333L17.8667 12.5333L16 10.6667L10.6667 16L16 21.3333ZM16 29.3333C14.1556 29.3333 12.4222 28.9833 10.8 28.2833C9.17779 27.5833 7.76668 26.6333 6.56668 25.4333C5.36668 24.2333 4.41668 22.8222 3.71668 21.2C3.01668 19.5778 2.66668 17.8444 2.66668 16C2.66668 14.1555 3.01668 12.4222 3.71668 10.8C4.41668 9.17777 5.36668 7.76666 6.56668 6.56666C7.76668 5.36666 9.17779 4.41666 10.8 3.71666C12.4222 3.01666 14.1556 2.66666 16 2.66666C17.8445 2.66666 19.5778 3.01666 21.2 3.71666C22.8222 4.41666 24.2333 5.36666 25.4333 6.56666C26.6333 7.76666 27.5833 9.17777 28.2833 10.8C28.9833 12.4222 29.3333 14.1555 29.3333 16C29.3333 17.8444 28.9833 19.5778 28.2833 21.2C27.5833 22.8222 26.6333 24.2333 25.4333 25.4333C24.2333 26.6333 22.8222 27.5833 21.2 28.2833C19.5778 28.9833 17.8445 29.3333 16 29.3333ZM16 26.6667C18.9778 26.6667 21.5 25.6333 23.5667 23.5667C25.6333 21.5 26.6667 18.9778 26.6667 16C26.6667 13.0222 25.6333 10.5 23.5667 8.43332C21.5 6.36666 18.9778 5.33332 16 5.33332C13.0222 5.33332 10.5 6.36666 8.43334 8.43332C6.36668 10.5 5.33334 13.0222 5.33334 16C5.33334 18.9778 6.36668 21.5 8.43334 23.5667C10.5 25.6333 13.0222 26.6667 16 26.6667Z'
              fill='white'
            />
          </g>
        </svg>
      ) : (
        <img
          src={currentSpace?.thumbnail?.src || '/brand/icon-bg-sm.png'}
          className={cn('h-[2.5rem] w-[2.5rem] rounded-full', {
            [effectFx['glow-lg']]: active,
          })}
        />
      )}
    </div>
  );
}
