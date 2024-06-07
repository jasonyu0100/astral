'use client';

import { useContext } from 'react';
import { SpaceCountPlay } from './play/main';
import { SpaceCountCount } from './count/main';
import { ContextForHoverable } from '@/(logic)/contexts/hoverable/main';

export function SpaceCount() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-[50px] items-center justify-center'>
      {hovered ? (
        <SpaceCountPlay/>
      ) : (
        <SpaceCountCount/>
      )}
    </div>
  );
}
