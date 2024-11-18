'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { HomeProjectsNumberPlay } from './play/main';
import { HomeProjectsNumberText } from './text/main';

export function HomeProjectsRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <HomeProjectsNumberPlay /> : <HomeProjectsNumberText />}
    </div>
  );
}
