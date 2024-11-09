'use client';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DriveTabs, DriveTabStage } from '@/(core)/(dashboard)/drive/tabs/main';
import {
  ContextForGalleryCollectionMain,
  useControllerForGalleryCollectionMain,
} from '@/architecture/controller/gallery/collection/main';
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
import { DriveFinderModals } from '../../modals/controller/main';
import { DriveFinderCollectionResources } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const loggedInUser = useGlobalUser((state) => state.user);
  const collectionMainController = useControllerForGalleryCollectionMain(
    params.id,
  );
  const galleryMainController = useControllerForGalleryMain(
    collectionMainController.state.obj.galleryId,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionMainController.state.obj.id,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForGalleryMain.Provider value={galleryMainController}>
        <ContextForGalleryCollectionMain.Provider
          value={collectionMainController}
        >
          <ContextForCollectionResourceList.Provider
            value={resourceListController}
          >
            <DriveFinderModals>
              <DashboardContent>
                <DriveTabs tab={DriveTabStage.Finder} />
                <DriveFinderCollectionResources />
              </DashboardContent>
            </DriveFinderModals>
          </ContextForCollectionResourceList.Provider>
        </ContextForGalleryCollectionMain.Provider>
      </ContextForGalleryMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default PrivateAstralPage(Page);
