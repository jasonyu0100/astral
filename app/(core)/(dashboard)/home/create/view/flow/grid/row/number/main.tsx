'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { HomeCreateNumberPlay } from './play/main';
import { HomeCreateNumberText } from './text/main';

export function HomeCreateRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <HomeCreateNumberPlay /> : <HomeCreateNumberText />}
    </div>
  );
}
