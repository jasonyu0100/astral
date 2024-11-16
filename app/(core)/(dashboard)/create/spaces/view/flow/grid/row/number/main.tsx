'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { CreateSpacesNumberPlay } from './play/main';
import { CreateSpacesNumberText } from './text/main';

export function CreateSpacesRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <CreateSpacesNumberPlay /> : <CreateSpacesNumberText />}
    </div>
  );
}
