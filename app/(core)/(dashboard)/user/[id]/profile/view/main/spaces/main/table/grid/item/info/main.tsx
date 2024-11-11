import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { ContextForProfileUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';

export function UserProfileSpacesRowInfo() {
  const profileUser = useContext(ContextForProfileUserObj);
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='col-span-2 flex flex-col space-y-[0.5rem]'>
      <p className='text-lg font-bold text-slate-300'>{space.title}</p>
      <p className='w-full text-ellipsis text-sm font-light text-slate-300'>
        {profileUser?.displayName}
      </p>
    </div>
  );
}
