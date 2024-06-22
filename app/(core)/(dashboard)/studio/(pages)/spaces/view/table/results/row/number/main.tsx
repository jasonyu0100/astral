'use client';

import { ContextForHoverable } from '@/(logic)/contexts/hoverable/main';
import { useContext } from 'react';
import { StudioSpacesNumberPlay } from './play/main';
import { StudioSpacesNumberText } from './text/main';

export function StudioSpacesRowNumber() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex flex-row items-center justify-center'>
      {hovered ? <StudioSpacesNumberPlay /> : <StudioSpacesNumberText />}
    </div>
  );
}
