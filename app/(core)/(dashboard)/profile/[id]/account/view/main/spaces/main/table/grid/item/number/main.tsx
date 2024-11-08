'use client';

import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { useContext } from 'react';
import { ProfileSpacesNumberPlay } from './play/main';
import { ProfileSpacesNumberText } from './text/main';

export function ProfileSpacesRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      {hovered ? <ProfileSpacesNumberPlay /> : <ProfileSpacesNumberText />}
    </div>
  );
}
