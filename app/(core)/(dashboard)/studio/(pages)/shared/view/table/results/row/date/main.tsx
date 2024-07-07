'use client';

import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function StudioSpacesRowDate() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex items-center justify-center'>
      <p className='text-sm font-bold text-slate-500'>
        {getFormattedDate(new Date(space.created))}
      </p>
    </div>
  );
}
