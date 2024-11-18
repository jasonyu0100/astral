'use client';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/architecture/controller/gallery/collection/list';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/architecture/controller/gallery/collection/resource/list';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/architecture/controller/gallery/list';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import { BrandManageModals } from '../modals/controller/main';
import { BrandManageHomeGallerysView } from './view/view';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const galleryListController = useControllerForGalleryList(loggedInUser.id);
  const collectionListController = useControllerForGalleryCollectionList(
    galleryListController.state.objId,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForGalleryList.Provider value={galleryListController}>
        <ContextForGalleryCollectionList.Provider
          value={collectionListController}
        >
          <ContextForCollectionResourceList.Provider
            value={resourceListController}
          >
            <BrandManageModals>
              <BrandManageHomeGallerysView />
            </BrandManageModals>
          </ContextForCollectionResourceList.Provider>
        </ContextForGalleryCollectionList.Provider>
      </ContextForGalleryList.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default PrivateAstralPage(Page);
