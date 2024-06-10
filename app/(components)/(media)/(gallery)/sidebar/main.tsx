import {
  ContextForFlippable,
  useControllerForFlippable,
} from '@/(logic)/contexts/flippable/main';
import { useContext } from 'react';
import { GallerySidebarCover } from './front/main';
import { GalleryContainer } from '../common/container/main';
import { MapSidebarContext } from '@/(core)/(project)/space/[id]/(pages)/map/view/sidebar/main';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';

export function SidebarHomeGallery() {
  const { sidebarHandler } = useContext(MapSidebarContext);
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
