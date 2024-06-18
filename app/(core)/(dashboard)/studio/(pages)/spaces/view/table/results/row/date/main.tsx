'use client';

import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { useContext } from 'react';

export function StudioSpacesRowDate() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex items-center justify-center'>
      <p className='text-lg font-bold text-slate-300'>
        {new Date(space.target).toLocaleDateString()}
      </p>
    </div>
  );
}
