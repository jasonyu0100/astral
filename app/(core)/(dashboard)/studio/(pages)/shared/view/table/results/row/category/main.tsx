'use client';

import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { useContext } from 'react';

export function StudioSpacesRowCategory() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex items-center justify-center'>
      <p className='text-sm font-bold text-slate-500'>{space.category}</p>
    </div>
  );
}
