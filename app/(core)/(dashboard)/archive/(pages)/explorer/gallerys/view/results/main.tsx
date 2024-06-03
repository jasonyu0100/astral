import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import React from 'react';
import { GallerysGrid } from './grid/main';

export function GallerysResults() {
  return (
    <GlassWindowFrame className='h-full flex-grow px-[2rem] pt-[2rem]'>
      <GlassWindowContents className='flex w-full flex-col overflow-auto'>
        <GallerysGrid />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
