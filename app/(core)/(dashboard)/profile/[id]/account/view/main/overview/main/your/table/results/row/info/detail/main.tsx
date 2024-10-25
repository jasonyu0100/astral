import { ContextForSpaceObj } from '@/server/model/space/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { useContext } from 'react';

export function SpaceInfoDetail() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const space = useContext(ContextForSpaceObj);
  return (
    <div className='flex h-full w-full flex-col justify-center text-ellipsis'>
      <p className='text-lg font-bold text-slate-300'>{space.title}</p>
      <p className='w-full text-ellipsis text-sm font-light text-slate-300'>
        {loggedInUser?.fname} {loggedInUser?.lname}
      </p>
    </div>
  );
}
