import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { CollectionsBreadcrumbs } from './breadcrumbs/main';
import { CollectionsContainer } from './container/main';
import { CollectionsGrid } from './grid/main';
import { CollectionsSearch } from './search/main';

export function CollectionsView() {
  return (
    <CollectionsContainer>
      <div className='w-full p-[2rem]'>
        <CollectionsSearch />
      </div>
      <GlassWindowFrame className='h-full flex-grow px-[2rem] pt-[1rem]'>
        <GlassWindowContents className='flex w-full flex-col overflow-auto'>
          <CollectionsBreadcrumbs />
          <CollectionsGrid />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </CollectionsContainer>
  );
}
