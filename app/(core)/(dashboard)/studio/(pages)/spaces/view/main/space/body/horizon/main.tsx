'use client';

import { useContext } from 'react';
import { horizonMap } from '@/(core)/(project)/horizon/[id]/map';
import { ContextForSpaceObj } from '@/(server)/(model)/space/main';

export function SpaceHorizon() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex w-[150px] items-center'>
      <a
        href={`${horizonMap.horizon.id.forum.link('0')}`}
        className='text-lg font-bold text-slate-300'
      >
        Horizon
      </a>
    </div>
  );
}
