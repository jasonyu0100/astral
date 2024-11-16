'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { CreateFlowNumberPlay } from './play/main';
import { CreateFlowNumberText } from './text/main';

export function CreateFlowRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <CreateFlowNumberPlay /> : <CreateFlowNumberText />}
    </div>
  );
}
