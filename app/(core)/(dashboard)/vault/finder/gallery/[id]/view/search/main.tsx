import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function FinderGalleryCollectionsSearch() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
  return (
    <div className='w-full p-[2rem] shadow-glow'>
      <GlassWindowFrame
        name={FinderGalleryCollectionsSearch.name}
        className='h-[4rem] w-full flex-shrink-0'
        borderFx={borderFx['border-around']}
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className={`flex flex-row items-center space-x-[1rem] px-[1rem]`}
        >
          <input
            className='h-full w-full animate-pulse-slow rounded-full bg-transparent px-[2rem] text-2xl font-bold text-slate-300 outline-none'
            placeholder='Search...'
            onChange={(e) => {
              collectionListController.actions.stateActions.searchAndUpdateQuery(
                e.target.value,
              );
            }}
          />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
