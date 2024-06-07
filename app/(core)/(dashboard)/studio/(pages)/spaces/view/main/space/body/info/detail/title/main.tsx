import { useContext } from 'react';
import { ContextForSpaceObj } from '@/(model)/space/main';

export function SpaceInfoDetailTitle() {
  const space = useContext(ContextForSpaceObj);

  return <p className='font-regular text-slate-300'>{space.title}</p>;
}
