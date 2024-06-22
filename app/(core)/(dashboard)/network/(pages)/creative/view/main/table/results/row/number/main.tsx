'use client';

import { ContextForHoverable } from '@/(logic)/contexts/hoverable/main';
import { useContext } from 'react';
import { CreativeNetworkNumberPlay } from './play/main';
import { CreativeNetworkNumberText } from './text/main';

export function CreativeNetworkRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <CreativeNetworkNumberPlay /> : <CreativeNetworkNumberText />}
    </div>
  );
}
