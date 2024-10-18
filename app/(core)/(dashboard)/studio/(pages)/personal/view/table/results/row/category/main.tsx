'use client';

import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { useContext } from 'react';

export function StudioSpacesRowCategory() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex items-center justify-center'>
      <p className='text-center text-center text-sm font-bold text-slate-300'>
        {space.category}
      </p>
    </div>
  );
}
