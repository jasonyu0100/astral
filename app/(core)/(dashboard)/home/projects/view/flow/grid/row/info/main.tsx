import { liveMap } from '@/(core)/(live)/live/[id]/map';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import Link from 'next/link';
import { useContext } from 'react';

export function HomeProjectsRowInfo() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='col-span-2 flex flex-col justify-center'>
      <Link
        href={liveMap.live.link(space.id)}
        className='text-lg font-bold text-slate-300'
      >
        {space?.title || 'Untitled'}
      </Link>
      <p className='w-full text-ellipsis text-sm font-light text-slate-300'>
        {loggedInUser?.displayName || 'Unknown'}
      </p>
    </div>
  );
}
