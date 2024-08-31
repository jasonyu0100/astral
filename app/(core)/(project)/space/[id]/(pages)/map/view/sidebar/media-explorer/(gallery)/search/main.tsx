import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function SpaceMapGalleryCollectionsSearch() {
  const collectionListController = useContext(ContextForGalleryCollectionList);

  return (
    <div className='flex h-[4rem] w-full flex-shrink-0 flex-col items-center justify-center p-[1rem] shadow-glow'>
      <GlassWindowFrame
        className='h-[2rem] w-full flex-shrink-0'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents className='h-full w-full'>
          <input
            className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent px-[1rem] font-bold text-slate-300 outline-none'
            placeholder='Venture forth...'
            onChange={(e) => {
              collectionListController.actions.stateActions.executeQuery(
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
