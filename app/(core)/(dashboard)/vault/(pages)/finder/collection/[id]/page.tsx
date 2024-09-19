'use client';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import {
  VaultTabs,
  VaultTabStage,
} from '@/(core)/(dashboard)/vault/(tabs)/main';
import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import {
  ContextForGalleryCollectionMain,
  useControllerForGalleryCollectionMain,
} from '@/(server)/controller/gallery/collection/main';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/(server)/controller/gallery/collection/resource/list';
import {
  ContextForGalleryMain,
  useControllerForGalleryMain,
} from '@/(server)/controller/gallery/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { VaultFinderCreateModals } from '../../(modals)/create/controller/main';
import { FinderCollectionResources } from './view/main';

function Page({ params }: { params: { id: string } }) {
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
    <ContextForGalleryMain.Provider value={galleryMainController}>
      <ContextForGalleryCollectionMain.Provider
        value={collectionMainController}
      >
        <ContextForCollectionResourceList.Provider
          value={resourceListController}
        >
          <VaultFinderCreateModals>
            <DashboardContent>
              <VaultTabs
                tab={VaultTabStage.Finder}
                backUrl={vaultMap.vault.finder.gallery.id.link(
                  galleryMainController.state.obj.id,
                )}
              />
              <FinderCollectionResources />
            </DashboardContent>
          </VaultFinderCreateModals>
        </ContextForCollectionResourceList.Provider>
      </ContextForGalleryCollectionMain.Provider>
    </ContextForGalleryMain.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
