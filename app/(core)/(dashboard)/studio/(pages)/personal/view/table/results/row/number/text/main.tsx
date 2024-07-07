import { ContextForIndexable } from '@/(logic)/contexts/indexable/main';
import { useContext } from 'react';

export function StudioSpacesNumberText() {
  const index = useContext(ContextForIndexable);

  return <p className='text-lg font-light text-slate-700'>{index + 1}</p>;
}
