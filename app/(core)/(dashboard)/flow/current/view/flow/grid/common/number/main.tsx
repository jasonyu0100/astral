'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { FlowCurrentNumberPlay } from './play/main';
import { FlowCurrentNumberText } from './text/main';

export function FlowCurrentRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <FlowCurrentNumberPlay /> : <FlowCurrentNumberText />}
    </div>
  );
}
