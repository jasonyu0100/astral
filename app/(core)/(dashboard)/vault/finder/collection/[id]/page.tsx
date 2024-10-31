'use client';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { VaultTabs, VaultTabStage } from '@/(core)/(dashboard)/vault/tabs/main';
import { useGlobalUser } from '@/logic/store/user/main';
import {
  ContextForGalleryCollectionMain,
  useControllerForGalleryCollectionMain,
} from '@/server/controller/gallery/collection/main';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/server/controller/gallery/collection/resource/list';
import {
  ContextForGalleryMain,
  useControllerForGalleryMain,
} from '@/server/controller/gallery/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { VaultFinderModals } from '../../modals/controller/main';
import { FinderCollectionResources } from './view/main';

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
            <VaultFinderModals>
              <DashboardContent>
                <VaultTabs tab={VaultTabStage.Finder} />
                <FinderCollectionResources />
              </DashboardContent>
            </VaultFinderModals>
          </ContextForCollectionResourceList.Provider>
        </ContextForGalleryCollectionMain.Provider>
      </ContextForGalleryMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
