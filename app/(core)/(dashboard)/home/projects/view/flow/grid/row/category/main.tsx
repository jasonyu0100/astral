'use client';

import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { useContext } from 'react';

export function HomeProjectsRowCategory() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex items-center justify-center'>
      <p className='text-sm font-light text-slate-300'>{space.category}</p>
    </div>
  );
}
