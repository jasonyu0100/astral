'use client';

import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { useContext } from 'react';

export function HomeSharedRowCategory() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div>
      <p className='text-sm font-bold text-slate-300'>{space.category}</p>
    </div>
  );
}
