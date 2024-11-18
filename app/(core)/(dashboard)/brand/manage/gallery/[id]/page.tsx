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
  ContextForGalleryMain,
  useControllerForGalleryMain,
} from '@/architecture/controller/gallery/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import { BrandManageModals } from '../../modals/controller/main';
import { BrandManageGalleryCollections } from './view/view';

function Page({ params }: { params: { id: string } }) {
  const loggedInUser = useGlobalUser((state) => state.user);
  const galleryMainController = useControllerForGalleryMain(params.id);
  const collectionListController = useControllerForGalleryCollectionList(
    galleryMainController.state.objId,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForGalleryMain.Provider value={galleryMainController}>
        <ContextForGalleryCollectionList.Provider
          value={collectionListController}
        >
          <ContextForCollectionResourceList.Provider
            value={resourceListController}
          >
            <BrandManageModals>
              <BrandManageGalleryCollections />
            </BrandManageModals>
          </ContextForCollectionResourceList.Provider>
        </ContextForGalleryCollectionList.Provider>
      </ContextForGalleryMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default PrivateAstralPage(Page);
