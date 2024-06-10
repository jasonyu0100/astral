'use client';
import { CollectionsResults } from './view/view';
import {
  ContextForGalleryObj,
} from '@/(server)/(model)/gallery/main';
import isVerseAuth from '@/(utils)/isAuth';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  useControllerForExplorerModals,
  ContextForExplorerModals,
} from '@/(core)/(dashboard)/(modals)/archive/explorer/create/main';
import { ExplorerModalsView } from '@/(core)/(dashboard)/(modals)/archive/explorer/create/view';
import { ContextForGalleryCollectionList, useControllerForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { ContextForGalleryMain, useControllerForGalleryMain } from '@/(server)/(controller)/gallery/main';

function Page({ params }: { params: { id: string } }) {
  const galleryMainController = useControllerForGalleryMain(params.id);
  const collectionListController = useControllerForGalleryCollectionList(galleryMainController.state.objId);
  const modalContext = useControllerForExplorerModals();

  return (
    <ContextForGalleryMain.Provider value={galleryMainController}>
      <ContextForGalleryCollectionList.Provider value={collectionListController}>
        <ContextForExplorerModals.Provider value={modalContext}>
          <ExplorerModalsView />
          <CollectionsResults />
        </ContextForExplorerModals.Provider>
      </ContextForGalleryCollectionList.Provider>
    </ContextForGalleryMain.Provider>
  );
}

export default isVerseAuth(Page);
