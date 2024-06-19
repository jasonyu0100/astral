import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { borderFx, glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceDraftSidebarContext } from '../../../main';

export function SpaceDraftGalleryCollectionsResults() {
  const collectionsListController = useContext(ContextForGalleryCollectionList);
  const sidebarController = useContext(SpaceDraftSidebarContext);

  return (
    <div
      className='flex w-full flex-col overflow-auto px-[1rem]'
      style={{ height: 'calc(100% - 4rem - 80px)' }}
    >
      <div className='flex w-full flex-row flex-wrap gap-[1rem]'>
        {collectionsListController.state.objs.map((collection) => (
          <>
            <p className='w-full text-lg font-bold text-slate-300'>
              {collection.title}
            </p>
            <GlassWindowFrame
              className='h-[10rem] w-full flex-shrink-0'
              borderFx={borderFx['border-around']}
            >
              <GlassWindowContents
                onClick={() =>
                  sidebarController.actions.goToCollection(collection)
                }
                className='flex w-full cursor-pointer flex-row space-x-[1rem] p-[1rem]'
              ></GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          </>
        ))}
      </div>
    </div>
  );
}
