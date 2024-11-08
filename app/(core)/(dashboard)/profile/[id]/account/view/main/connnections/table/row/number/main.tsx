'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { ProfileConnectionsNumberPlay } from './play/main';
import { ProfileConnectionsNumberText } from './text/main';

export function ProfileConnectionsRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? (
        <ProfileConnectionsNumberPlay />
      ) : (
        <ProfileConnectionsNumberText />
      )}
    </div>
  );
}
