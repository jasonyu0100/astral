'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { UserProfileSupportersNumberPlay } from './play/main';
import { UserProfileSupportersNumberText } from './text/main';

export function UserProfileSupportersRowNumber() {
  const { hovered } = useContext(ContextForHoverable);

  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? (
        <UserProfileSupportersNumberPlay />
      ) : (
        <UserProfileSupportersNumberText />
      )}
    </div>
  );
}
