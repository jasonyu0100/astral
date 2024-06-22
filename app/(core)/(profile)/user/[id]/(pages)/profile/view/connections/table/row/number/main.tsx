'use client';

import { ContextForHoverable } from '@/(logic)/contexts/hoverable/main';
import { useContext } from 'react';
import { UserProfileConnectionsNumberPlay } from './play/main';
import { UserProfileConnectionsNumberText } from './text/main';

export function UserProfileConnectionsRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? (
        <UserProfileConnectionsNumberPlay />
      ) : (
        <UserProfileConnectionsNumberText />
      )}
    </div>
  );
}
