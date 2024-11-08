'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { HomeSharedNumberPlay } from './play/main';
import { HomeSharedNumberText } from './text/main';

export function HomeSharedRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <HomeSharedNumberPlay /> : <HomeSharedNumberText />}
    </div>
  );
}
