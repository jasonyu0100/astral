import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
import { ExplorerCollectionResourcesBreadcrumbs } from './breadcrumbs/main';
import { ExplorerCollectionResourcesGrid } from './grid/main';

export function ExplorerColllectionResourcesResults() {
  return (
    <GlassWindowFrame className='h-full flex-grow px-[2rem] pt-[1rem]'>
      <GlassWindowContents className='flex w-full flex-col overflow-auto'>
        <ExplorerCollectionResourcesBreadcrumbs />
        <ExplorerCollectionResourcesGrid />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
