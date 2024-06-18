import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { useContext } from 'react';

export function StudioSpacesRowDaysLeft() {
  const space = useContext(ContextForSpaceObj);
  const timeDiff = new Date(space.target).getTime() - new Date().getTime();
  const daysDifference = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <div className='flex items-center justify-center'>
      <p className='text-lg font-bold text-slate-300'>
        {daysDifference + 1} days left
      </p>
    </div>
  );
}
