import { ContextForSpaceObj } from '@/server/model/space/main';
import { ContextForProfileUserObj } from '@/server/model/user/main';
import { useContext } from 'react';

export function UserProfileSpacesRowInfo() {
  const profileUser = useContext(ContextForProfileUserObj);
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='col-span-2 flex flex-row items-center justify-center space-x-[1rem]'>
      <div className='flex h-full w-full flex-col justify-center text-ellipsis'>
        <p className='text-lg font-bold text-slate-300'>{space.title}</p>
        <p className='w-full text-ellipsis text-sm font-light text-slate-300'>
          {profileUser?.displayName}
        </p>
      </div>
    </div>
  );
}
