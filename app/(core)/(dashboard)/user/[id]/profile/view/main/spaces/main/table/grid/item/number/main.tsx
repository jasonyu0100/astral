'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { UserProfileSpacesNumberPlay } from './play/main';
import { UserProfileSpacesNumberText } from './text/main';

export function UserProfileSpacesRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? (
        <UserProfileSpacesNumberPlay />
      ) : (
        <UserProfileSpacesNumberText />
      )}
    </div>
  );
}
