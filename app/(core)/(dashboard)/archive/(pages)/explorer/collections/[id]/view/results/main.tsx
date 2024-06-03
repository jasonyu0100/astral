import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { CollectionsBreadcrumbs } from './breadcrumbs/main';
import { CollectionsGrid } from './grid/main';

export function CollectionsContent() {
  return (
    <GlassWindowFrame className='h-full flex-grow px-[2rem] pt-[1rem]'>
      <GlassWindowContents className='flex w-full flex-col overflow-auto'>
        <CollectionsBreadcrumbs />
        <CollectionsGrid />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
