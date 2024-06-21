'use client';
import { DashboardContent } from '@/(components)/(dashboard)/content/main';
import {
  ArchiveTabs,
  ArchiveTabStage,
} from '@/(core)/(dashboard)/archive/(tabs)/main';
import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import {
  ContextForGalleryCollectionMain,
  useControllerForGalleryCollectionMain,
} from '@/(server)/(controller)/gallery/collection/main';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/(server)/(controller)/gallery/collection/resource/list';
import {
  ContextForGalleryMain,
  useControllerForGalleryMain,
} from '@/(server)/(controller)/gallery/main';
import isVerseAuth from '@/(utils)/isAuth';
import { ExplorerCollectionResources } from './view/main';

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
          <ArchiveTabs
            tab={ArchiveTabStage.Explorer}
            backUrl={archiveMap.archive.explorer.gallery.id.link(
              galleryMainController.state.obj.id,
            )}
          />
          <DashboardContent>
            <ExplorerCollectionResources />
          </DashboardContent>
        </ContextForCollectionResourceList.Provider>
      </ContextForGalleryCollectionMain.Provider>
    </ContextForGalleryMain.Provider>
  );
}

export default isVerseAuth(Page);
