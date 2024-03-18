'use client';
import { MovesCover } from './cover/main';
import { MovesHeaderText } from './text/main';

export function MovesInfo() {
  return (
    <div className='flex h-full flex-row items-center space-x-[2rem]'>
      <MovesHeaderText />
    </div>
  );
}
