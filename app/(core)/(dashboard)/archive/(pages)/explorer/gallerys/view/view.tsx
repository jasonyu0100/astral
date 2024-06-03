'use client';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GallerysContainer } from './container/main';
import { GallerysGrid } from './grid/main';
import { GallerysSearch } from './search/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { GallerysResults } from './results/main';

export function GallerysView() {
  return (
    <GallerysContainer>
      <GallerysSearch />
      <GallerysResults/>
    </GallerysContainer>
  );
}
