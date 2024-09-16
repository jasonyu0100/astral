import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { ContextForGalleryObj } from '@/(server)/model/gallery/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { GalleryFinderAdd } from '../../../../(common)/gallery/add/main';
import { FinderGallery } from '../../../../(common)/gallery/main';
import { VaultFinderCreateGalleryModal } from '../../../../(modals)/create/gallery/main';

export function FinderHomeGallerysGrid() {
  const galleryListController = useContext(ContextForGalleryList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <VaultFinderCreateGalleryModal />
      </ContextForOpenable.Provider>
      <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
        <div className='grid grid-cols-3 gap-[2rem] pr-[2rem]'>
          {galleryListController.state.more.queryResults.map((gallery) => (
            <ContextForGalleryObj.Provider value={gallery} key={gallery.id}>
              <FinderGallery key={gallery.id} />
            </ContextForGalleryObj.Provider>
          ))}
          <GalleryFinderAdd onClick={openableController.open} />
        </div>
      </div>
    </>
  );
}
