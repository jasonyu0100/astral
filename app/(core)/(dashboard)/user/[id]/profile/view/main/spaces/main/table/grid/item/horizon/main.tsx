'use client';

import { horizonsMap } from '@/(core)/(project)/horizons/[id]/map';
import Link from 'next/link';

export function UserProfileSpacesRowHorizon() {
  return (
    <div className='flex flex-row items-center justify-center'>
      <Link
        href={`${horizonsMap.horizons.id.horizon.link('0')}`}
        className='text-lg font-bold text-slate-300'
      >
        Horizon
      </Link>
    </div>
  );
}
