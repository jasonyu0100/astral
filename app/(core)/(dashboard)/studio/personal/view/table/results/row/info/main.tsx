import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';

export function StudioPersonalRowInfo() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='col-span-2 flex flex-col justify-center space-y-[0.5rem]'>
      <p className='text-lg font-bold text-slate-300'>
        {space?.title || 'Untitled'}
      </p>
      <p className='w-full text-ellipsis text-sm font-light text-slate-300'>
        {loggedInUser?.displayName || 'Unknown'}
      </p>
    </div>
  );
}
