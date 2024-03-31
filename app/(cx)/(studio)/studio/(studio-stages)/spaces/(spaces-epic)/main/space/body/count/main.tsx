'use client';

import { useContext } from 'react';
import { ExtendedSpaceContext } from '../../main';
import { spaceMap } from '@/(cx)/(process)/space/[id]/map';
import Link from 'next/link';
import { SpaceCountPlay } from './play/main';
import { SpaceCountCount } from './count/main';

export function SpaceCount() {
  const { hover, index, space } = useContext(ExtendedSpaceContext);
  return (
    <div className='flex w-[50px] items-center justify-center'>
      {hover ? (
        <SpaceCountPlay/>
      ) : (
        <SpaceCountCount/>
      )}
    </div>
  );
}
