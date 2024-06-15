import { SpaceDraftSidebarContext } from '@/(core)/(project)/space/[id]/(pages)/draft/view/sidebar/main';
import {
  ContextForFlippable,
  useControllerForFlippable,
} from '@/(logic)/contexts/flippable/main';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { useContext } from 'react';
import { GalleryContainer } from '../common/container/main';
import { GallerySidebarCover } from './front/main';

export function SidebarHomeGallery() {
  const { sidebarHandler } = useContext(SpaceDraftSidebarContext);
  const gallery = useContext(ContextForGalleryObj);
  const flippableController = useControllerForFlippable();

  return (
    <div
      className='w-full cursor-pointer'
      onClick={() => {
        sidebarHandler.goToGallery(gallery);
      }}
    >
      <ContextForFlippable.Provider value={flippableController}>
        <GalleryContainer className='w-full'>
          <GallerySidebarCover />
        </GalleryContainer>
      </ContextForFlippable.Provider>
    </div>
  );
}
