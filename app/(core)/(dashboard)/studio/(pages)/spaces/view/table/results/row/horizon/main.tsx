'use client';

import { horizonMap } from '@/(core)/(project)/horizon/[id]/map';

export function StudioSpacesRowHorizon() {
  return (
    <div className='flex flex-row items-center justify-center'>
      <a
        href={`${horizonMap.horizon.id.forum.link('0')}`}
        className='text-lg font-bold text-slate-300'
      >
        Horizon
      </a>
    </div>
  );
}
