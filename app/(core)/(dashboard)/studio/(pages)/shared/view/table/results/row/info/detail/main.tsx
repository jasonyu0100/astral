import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { ContextForUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';

export function SpaceInfoDetail() {
  const user = useContext(ContextForUserObj);
  const space = useContext(ContextForSpaceObj);
  return (
    <div className='flex h-full w-full flex-col justify-center text-ellipsis'>
      <p className='text-lg font-bold text-slate-700'>{space.title}</p>
      <p className='w-full text-ellipsis text-sm font-light text-slate-700'>
        {user?.fname} {user?.lname}
      </p>
    </div>
  );
}
