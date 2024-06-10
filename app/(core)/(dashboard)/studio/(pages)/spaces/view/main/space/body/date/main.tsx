'use client';

import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { useContext } from 'react';

export function SpaceDate() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex items-center w-[150px]'>
      <p className='text-lg font-bold text-slate-300'>
        {new Date(space.created).toDateString()}
      </p>
    </div>
  );
}
