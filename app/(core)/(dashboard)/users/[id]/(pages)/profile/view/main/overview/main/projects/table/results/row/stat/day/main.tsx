import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { useContext } from 'react';

export function UserProfileSpacesRowDays() {
  const space = useContext(ContextForSpaceObj);
  const timeDiff = new Date().getTime() - new Date(space.created).getTime();
  const daysDifference = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <div className='flex items-center justify-center'>
      <p className='text-sm font-bold text-slate-300'>{daysDifference + 1}</p>
    </div>
  );
}
