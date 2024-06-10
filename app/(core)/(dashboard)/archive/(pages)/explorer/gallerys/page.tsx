'use client';
import { GallerysView } from './view/view';
import isVerseAuth from '@/(utils)/isAuth';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ContextForExplorerModals,
  useControllerForExplorerModals,
} from '@/(core)/(dashboard)/(modals)/archive/explorer/create/main';
import { ExplorerModalsView } from '@/(core)/(dashboard)/(modals)/archive/explorer/create/view';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/(server)/(controller)/gallery/list';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const galleryListController = useControllerForGalleryList(user.id);
  const modalContext = useControllerForExplorerModals();

  return (
    <ContextForGalleryList.Provider value={galleryListController}>
      <ContextForExplorerModals.Provider value={modalContext}>
        <ExplorerModalsView />
      </ContextForExplorerModals.Provider>
      <GallerysView />
    </ContextForGalleryList.Provider>
  );
}

export default isVerseAuth(Page);
