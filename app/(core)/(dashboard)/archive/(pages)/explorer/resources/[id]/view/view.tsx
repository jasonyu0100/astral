import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { ResourcesBreadcrumbs } from './breadcrumbs/main';
import { ResourcesContainer } from './container/main';
import { ResourcesGrid } from './grid/main';
import { ResourcesSearch } from './search/main';

export function ResourcesView() {
  return (
    <ResourcesContainer>
      <div className='w-full p-[2rem]'>
        <ResourcesSearch />
      </div>
      <GlassWindowFrame className='h-full flex-grow px-[2rem] pt-[1rem]'>
        <GlassWindowContents className='flex w-full flex-col overflow-auto'>
          <ResourcesBreadcrumbs />
          <ResourcesGrid />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </ResourcesContainer>
  );
}
