import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { useContext } from 'react';

export function StudioSpacesRowHours() {
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex w-[150px] items-center'>
      <p className='text-lg font-bold text-slate-300'>{space.hours} hours</p>
    </div>
  );
}
