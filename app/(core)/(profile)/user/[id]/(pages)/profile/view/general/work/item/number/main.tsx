'use client';

import { ContextForHoverable } from '@/(logic)/contexts/hoverable/main';
import { useContext } from 'react';
import { UseProfileNumberPlay } from './play/main';
import { UseProfileNumberText } from './text/main';

export function UserProfileRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <UseProfileNumberPlay /> : <UseProfileNumberText />}
    </div>
  );
}
