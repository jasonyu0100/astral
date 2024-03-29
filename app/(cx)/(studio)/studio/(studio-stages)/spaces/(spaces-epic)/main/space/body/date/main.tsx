'use client';

import { useContext } from 'react';
import { ExtendedSpaceContext } from '../../main';

export function SpaceDate() {
  const { space } = useContext(ExtendedSpaceContext);
  return (
    <div className='flex items-center w-[150px]'>
      <p className='text-lg font-bold text-slate-300'>
        {new Date(space.time).toDateString()}
      </p>
    </div>
  );
}
