'use client';
import { createContext } from 'react';
import { ContextForGalleryObj, GalleryObj } from '@/(server)/(model)/gallery/main';
import {
  ContextForGalleryCollectionObj,
  GalleryCollectionObj,
} from '@/(server)/(model)/gallery/collection/main';
import isVerseAuth from '@/(utils)/isAuth';
import { CollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { ResourcesView } from './view/view';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ContextForExplorerModals,
  useControllerForExplorerModals,
} from '@/(core)/(dashboard)/(modals)/archive/explorer/create/main';
import { ExplorerModalsView } from '@/(core)/(dashboard)/(modals)/archive/explorer/create/view';
import { DashboardContent } from '@/(components)/(dashboard)/content/main';
import {
  CraftTabs,
  CraftTabStage,
} from '@/(core)/(dashboard)/archive/(tabs)/main';
import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import {
  ContextForGalleryCollectionMain,
  useControllerForGalleryCollectionMain,
} from '@/(server)/(controller)/gallery/collection/main';
import {
  ContextForCollectionResourceMain,
  useControllerForCollectionResourceMain,
} from '@/(server)/(controller)/gallery/collection/resource/main';
import {
  ContextForGalleryMain,
  useControllerForGalleryMain,
} from '@/(server)/(controller)/gallery/main';
import { ContextForCollectionResourceList, useControllerForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';

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
          <CraftTabs
            tab={CraftTabStage.Explorer}
            backUrl={archiveMap.archive.explorer.collections.id.link(
              galleryMainController.state.obj.id,
            )}
          />
          <DashboardContent>
            <ResourcesView />
          </DashboardContent>
        </ContextForCollectionResourceList.Provider>
      </ContextForGalleryCollectionMain.Provider>
    </ContextForGalleryMain.Provider>
  );
}

export default isVerseAuth(Page);
