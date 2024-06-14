'use client';

import { useContext } from 'react';
import { ContextForSpaceObj } from '@/(server)/(model)/space/main';

export function SpaceGenre() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex w-[150px] items-center'>
      <p className='text-lg font-bold text-slate-300'>{space.category}</p>
    </div>
  );
}
