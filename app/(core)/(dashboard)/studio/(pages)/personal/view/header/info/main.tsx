'use client';
import { StudioSpacesHeaderCover } from './cover/main';
import { StudioSpacesHeaderText } from './text/main';

export function StudioSpacesHeaderInfo() {
  return (
    <div className='flex h-full flex-row items-center space-x-[2rem]'>
      <StudioSpacesHeaderCover />
      <StudioSpacesHeaderText />
    </div>
  );
}
