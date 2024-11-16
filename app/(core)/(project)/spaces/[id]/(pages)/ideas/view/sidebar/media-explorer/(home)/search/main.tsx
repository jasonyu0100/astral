import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesIdeasGallerysSearch() {
  const galleryListController = useContext(ContextForGalleryList);

  return (
    <div className='flex h-[5rem] w-full flex-shrink-0 flex-col items-center justify-center px-[1rem] shadow-glow'>
      <GlassWindowFrame
        className='h-[3rem] w-full flex-shrink-0'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents className='h-full w-full'>
          <input
            className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent px-[1rem] font-bold text-slate-300 outline-none'
            placeholder='Search...'
            onChange={(e) => {
              galleryListController.actions.stateActions.searchAndUpdateQuery(
                e.target.value,
              );
            }}
          />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
