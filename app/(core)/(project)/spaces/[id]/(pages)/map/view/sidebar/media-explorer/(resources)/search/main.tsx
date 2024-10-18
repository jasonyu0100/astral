import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function SpacesMapResourcesSearch() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div className='flex h-[5rem] w-full flex-shrink-0 flex-col items-center justify-center px-[1rem] shadow-glow'>
      <GlassWindowFrame
        className='h-[3rem] w-full flex-shrink-0'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents className='h-full w-full'>
          <input
            className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent px-[1rem] font-bold text-slate-300 outline-none'
            placeholder='Venture forth...'
            onChange={(e) => {
              resourceListController.actions.stateActions.searchAndUpdateQuery(
                e.target.value,
              );
            }}
          ></input>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
