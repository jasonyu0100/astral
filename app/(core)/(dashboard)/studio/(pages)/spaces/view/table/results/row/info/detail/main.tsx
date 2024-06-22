import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { ContextForCurrentUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';

export function SpaceInfoDetail() {
  const user = useContext(ContextForCurrentUserObj);
  const space = useContext(ContextForSpaceObj);
  return (
    <div className='flex h-full w-full flex-col justify-center text-ellipsis'>
      <p className='text-lg font-bold text-slate-300'>{space.title}</p>
      <p className='w-full text-ellipsis text-sm font-light text-slate-300'>
        {user.fname} {user.lname}
      </p>
    </div>
  );
}
