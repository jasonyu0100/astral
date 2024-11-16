'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { HomeFlowNumberPlay } from './play/main';
import { HomeFlowNumberText } from './text/main';

export function HomeFlowRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <HomeFlowNumberPlay /> : <HomeFlowNumberText />}
    </div>
  );
}
