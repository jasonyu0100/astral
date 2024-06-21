import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { useControllerForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { borderFx, glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceMapSidebarContext } from '../../../../main';

export function SpaceMapCollectionThumbnail() {
  const collection = useContext(ContextForGalleryCollectionObj);
  const resourceListController = useControllerForCollectionResourceList(
    collection.id,
  );
  const sidebarController = useContext(SpaceMapSidebarContext);

  return (
    <GlassWindowFrame
      className='aspect-[3/2] w-full flex-shrink-0'
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents
        onClick={() => sidebarController.actions.goToCollection(collection)}
        className='flex w-full cursor-pointer flex-row flex-wrap'
      >
        {resourceListController.state.objs.map((resource) => (
          <>
            <div className='h-1/2 w-1/3'>
              <img src={resource.fileElem?.src} className='aspect-square' />
            </div>
          </>
        ))}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
