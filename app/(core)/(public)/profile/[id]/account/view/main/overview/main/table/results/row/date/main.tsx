'use client';

import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function StudioSpacesRowDate() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex items-center justify-center'>
      <p className='text-center text-sm font-bold text-slate-300'>
        {getFormattedDate(new Date(space.created))}
      </p>
    </div>
  );
}
