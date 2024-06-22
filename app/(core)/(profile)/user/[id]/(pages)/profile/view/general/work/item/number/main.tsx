'use client';

import { ContextForHoverable } from '@/(logic)/contexts/hoverable/main';
import { useContext } from 'react';
import { UserProfileNumberPlay } from './play/main';
import { UserProfileNumberText } from './text/main';

export function UserProfileRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <UserProfileNumberPlay /> : <UserProfileNumberText />}
    </div>
  );
}
