import { useContext } from 'react';
import { ExtendedSpaceContext } from '../../../../main';

export function SpaceInfoDetailTitle() {
  const { space } = useContext(ExtendedSpaceContext);

  return <p className='font-regular text-slate-300'>{space.title}</p>;
}
