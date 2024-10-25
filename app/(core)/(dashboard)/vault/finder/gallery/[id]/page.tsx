'use client';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/server/controller/gallery/collection/list';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/server/controller/gallery/collection/resource/list';
import {
  ContextForGalleryMain,
  useControllerForGalleryMain,
} from '@/server/controller/gallery/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { VaultFinderModals } from '../../modals/controller/main';
import { FinderGalleryCollections } from './view/view';

function Page({ params }: { params: { id: string } }) {
  const galleryMainController = useControllerForGalleryMain(params.id);
  const collectionListController = useControllerForGalleryCollectionList(
    galleryMainController.state.objId,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionListController.state.objId,
  );

  return (
    <ContextForGalleryMain.Provider value={galleryMainController}>
      <ContextForGalleryCollectionList.Provider
        value={collectionListController}
      >
        <ContextForCollectionResourceList.Provider
          value={resourceListController}
        >
          <VaultFinderModals>
            <FinderGalleryCollections />
          </VaultFinderModals>
        </ContextForCollectionResourceList.Provider>
      </ContextForGalleryCollectionList.Provider>
    </ContextForGalleryMain.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
