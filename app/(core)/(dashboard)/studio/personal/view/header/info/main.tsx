'use client';
import { StudioPersonalHeaderCover } from './cover/main';
import { StudioPersonalHeaderText } from './text/main';

export function StudioPersonalHeaderInfo() {
  return (
    <div className='flex h-full flex-row items-center space-x-[2rem]'>
      <StudioPersonalHeaderCover />
      <StudioPersonalHeaderText />
    </div>
  );
}
