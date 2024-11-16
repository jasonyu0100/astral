'use client';

import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { useContext } from 'react';

export function HomeFlowRowCategory() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex items-center'>
      <p className='text-sm font-bold text-slate-300'>{space.category}</p>
    </div>
  );
}
