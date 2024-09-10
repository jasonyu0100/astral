'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { NetworkCreativeNumberPlay } from './play/main';
import { NetworkCreativeNumberText } from './text/main';

export function NetworkCreativeRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <NetworkCreativeNumberPlay /> : <NetworkCreativeNumberText />}
    </div>
  );
}
