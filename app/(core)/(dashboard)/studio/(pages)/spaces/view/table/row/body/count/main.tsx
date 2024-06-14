'use client';

import { ContextForHoverable } from '@/(logic)/contexts/hoverable/main';
import { useContext } from 'react';
import { StudioSpacesRowCountPlay } from './play/main';
import { StudioSpacesRowCountText } from './text/main';

export function StudioSpaceRowCount() {
  const { hovered } = useContext(ContextForHoverable);
  return (
    <div className='flex w-[50px] items-center justify-center'>
      {hovered ? <StudioSpacesRowCountPlay /> : <StudioSpacesRowCountText />}
    </div>
  );
}
