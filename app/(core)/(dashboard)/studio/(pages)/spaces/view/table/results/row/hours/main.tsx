import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { useContext } from 'react';

export function StudioSpacesRowHoursLeft() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-sm font-bold text-slate-300'>{space.hours} hours</p>
    </div>
  );
}
