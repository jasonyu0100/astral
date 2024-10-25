'use client';
import { useGlobalUser } from '@/logic/store/user/main';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/server/controller/gallery/collection/list';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/server/controller/gallery/collection/resource/list';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/server/controller/gallery/list';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { VaultFinderModals } from '../modals/controller/main';
import { FinderHomeGallerysView } from './view/view';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const galleryListController = useControllerForGalleryList(user.id);
  const collectionListController = useControllerForGalleryCollectionList(
    galleryListController.state.objId,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionListController.state.objId,
  );

  return (
    <ContextForGalleryList.Provider value={galleryListController}>
      <ContextForGalleryCollectionList.Provider
        value={collectionListController}
      >
        <ContextForCollectionResourceList.Provider
          value={resourceListController}
        >
          <VaultFinderModals>
            <FinderHomeGallerysView />
          </VaultFinderModals>
        </ContextForCollectionResourceList.Provider>
      </ContextForGalleryCollectionList.Provider>
    </ContextForGalleryList.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
