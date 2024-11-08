import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';

export function HomeSharedNumberText() {
  const index = useContext(ContextForIndexable);

  return <p className='text-lg font-light text-slate-300'>{index + 1}</p>;
}
