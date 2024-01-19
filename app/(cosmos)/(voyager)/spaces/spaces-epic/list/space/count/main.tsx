'use client';

import { useContext } from 'react';
import { CreativeSpaceContext } from '../main';
import { spaceMap } from '@/(cosmos)/(apollo)/space/[id]/map';

export function SpaceCount() {
  const { hover, index, space } = useContext(CreativeSpaceContext);
  return (
    <div className='flex items-center justify-center w-[50px]'>
      {hover ? (
        <a href={spaceMap.space.id.storm.link(space.id)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-[30px] h-[30px]'
            viewBox='0 0 24 24'
            fill='none'
          >
            <mask
              id='mask0_2968_7'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='24'
              height='24'
            >
              <rect width='24' height='24' fill='#D9D9D9' />
            </mask>
            <g mask='url(#mask0_2968_7)'>
              <path d='M8 19V5L19 12L8 19Z' fill='#CBD5E1' />
            </g>
          </svg>
        </a>
      ) : (
        <p className='text-white font-extraBold text-xl'>#{index + 1}</p>
      )}
    </div>
  );
}
