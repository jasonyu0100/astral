import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { useContext } from 'react';

export function StudioSpacesRowDay() {
  const space = useContext(ContextForSpaceObj);
  const timeDiff = new Date().getTime() - new Date(space.created).getTime();
  const daysDifference = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <div className='flex w-[150px] items-center'>
      <p className='text-lg font-bold text-slate-300'>
        Day {daysDifference + 1}
      </p>
    </div>
  );
}
