'use client';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GallerysContainer } from './container/main';
import { GallerysGrid } from './grid/main';
import { GallerysSearch } from './search/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';

export function GallerysView() {
  return (
    <GallerysContainer>
      <div className='w-full p-[2rem]'>
        <GallerysSearch />
      </div>
      <GlassWindowFrame className='h-full flex-grow px-[2rem] pt-[2rem]'>
        <GlassWindowContents className='flex w-full flex-col overflow-auto'>
          <GallerysGrid />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </GallerysContainer>
  );
}
