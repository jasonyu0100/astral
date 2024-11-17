import { liveMap } from '@/(core)/(live)/live/[id]/map';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { ContextForProfileUserObj } from '@/architecture/model/user/main';
import Link from 'next/link';
import { useContext } from 'react';

export function UserProfileSpacesRowInfo() {
  const profileUser = useContext(ContextForProfileUserObj);
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='col-span-2 flex flex-col'>
      <Link
        href={liveMap.live.link(space.id)}
        className='text-lg font-bold text-slate-300'
      >
        {space?.title || 'Untitled'}
      </Link>
      <p className='w-full text-ellipsis text-sm font-light text-slate-300'>
        {profileUser?.displayName}
      </p>
    </div>
  );
}
