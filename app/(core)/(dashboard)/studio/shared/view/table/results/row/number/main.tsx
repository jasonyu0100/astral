'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { StudioSharedNumberPlay } from './play/main';
import { StudioSharedNumberText } from './text/main';

export function StudioSharedRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <StudioSharedNumberPlay /> : <StudioSharedNumberText />}
    </div>
  );
}
