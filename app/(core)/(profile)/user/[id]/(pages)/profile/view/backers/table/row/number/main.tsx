'use client';

import { ContextForHoverable } from '@/(logic)/contexts/hoverable/main';
import { useContext } from 'react';
import { UserProfileBackersNumberPlay } from './play/main';
import { UserProfileBackersNumberText } from './text/main';

export function UserProfileBackersRowNumber() {
  const { hovered } = useContext(ContextForHoverable);

  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? (
        <UserProfileBackersNumberPlay />
      ) : (
        <UserProfileBackersNumberText />
      )}
    </div>
  );
}
