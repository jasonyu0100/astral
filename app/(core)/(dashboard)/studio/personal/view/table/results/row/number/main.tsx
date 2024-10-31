'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { StudioPersonalNumberPlay } from './play/main';
import { StudioPersonalNumberText } from './text/main';

export function StudioPersonalRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <StudioPersonalNumberPlay /> : <StudioPersonalNumberText />}
    </div>
  );
}
