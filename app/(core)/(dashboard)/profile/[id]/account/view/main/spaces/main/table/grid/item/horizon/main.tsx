'use client';

import { horizonsMap } from '@/(core)/(project)/horizons/[id]/map';

export function ProfileSpacesRowHorizon() {
  return (
    <div className='flex flex-row items-center justify-center'>
      <a
        href={`${horizonsMap.horizons.id.horizon.link('0')}`}
        className='text-lg font-bold text-slate-300'
      >
        Horizon
      </a>
    </div>
  );
}
