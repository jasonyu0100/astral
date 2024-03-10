'use client';

import { useContext } from 'react';
import { CreativeSpaceContext } from '../main';

export function SpaceDate() {
  const { space } = useContext(CreativeSpaceContext);
  return (
    <div className='flex items-center w-[150px]'>
      <p className='text-lg text-white'>
        {new Date(space.time).toDateString()}
      </p>
    </div>
  );
}
