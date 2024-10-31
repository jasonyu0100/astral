'use client';

import { ContextForSpaceObj } from '@/server/model/space/main';
import { useContext } from 'react';

export function StudioSharedRowCategory() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div>
      <p className='text-sm font-bold text-slate-300'>{space.category}</p>
    </div>
  );
}
