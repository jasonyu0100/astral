import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { ExplorerHomeGallerysGrid } from './grid/main';

export function ExplorerHomeGallerysResults() {
  return (
    <GlassWindowFrame className='h-full flex-grow px-[2rem] pt-[2rem]'>
      <GlassWindowContents className='flex w-full flex-col overflow-auto'>
        <ExplorerHomeGallerysGrid />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
