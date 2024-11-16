'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { HomePersonalNumberPlay } from './play/main';
import { HomePersonalNumberText } from './text/main';

export function HomePersonalRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <HomePersonalNumberPlay /> : <HomePersonalNumberText />}
    </div>
  );
}
