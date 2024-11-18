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
import { DashboardUploadsModals } from './modal/controller/main';
import { BrandUploadsDailyView } from './view/view';

function Page() {
  const user = useGlobalUser((state) => state.user);

  const galleryController = useControllerForGalleryMain(user.journalId);
  const collectionListController = useControllerForGalleryCollectionList(
    galleryController.state.obj.id,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForGalleryMain.Provider value={galleryController}>
        <ContextForGalleryCollectionList.Provider
          value={collectionListController}
        >
          <ContextForCollectionResourceList.Provider
            value={resourceListController}
          >
            <DashboardUploadsModals>
              <BrandUploadsDailyView />
            </DashboardUploadsModals>
          </ContextForCollectionResourceList.Provider>
        </ContextForGalleryCollectionList.Provider>
      </ContextForGalleryMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default PrivateAstralPage(Page);
