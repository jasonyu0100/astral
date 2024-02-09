'use client';
import { SpacesHeaderCover } from './cover/main';
import { SpacesHeaderText } from './text/main';

export function SpacesAlbumInfo() {
  return (
    <div className='flex h-full flex-row items-center space-x-[2rem]'>
      <SpacesHeaderCover />
      <SpacesHeaderText />
    </div>
  );
}
