import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { useContext } from 'react';

export function SpaceInfoDetailTitle() {
  const space = useContext(ContextForSpaceObj);

  return (
    <p className='w-full text-ellipsis font-light text-slate-300'>
      {space.title}
    </p>
  );
}
