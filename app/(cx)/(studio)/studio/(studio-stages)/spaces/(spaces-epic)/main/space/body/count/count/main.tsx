import { useContext } from 'react';
import { ExtendedSpaceContext } from '../../../main';

export function SpaceCountCount() {
  const { index } = useContext(ExtendedSpaceContext);

  return <p className='font-extraBold text-xl text-slate-300'>#{index + 1}</p>;
}
