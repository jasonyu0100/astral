import { ContextForIndexable } from '@/(logic)/contexts/indexable/main';
import { useContext } from 'react';

export function SpaceCountCount() {
  const index = useContext(ContextForIndexable);

  return <p className='font-extraBold text-xl text-slate-300'>#{index + 1}</p>;
}
