'use client';
import { GallerysView } from './(gallerys-explorer-epic)/view';
import insideVerse from '@/(lgx)/utils/isAuth';
import { useGlobalUser } from '@/(lgx)/internal/store/user/main';
import {
  GallerysHandlerContext,
  useGallerysHandler,
} from '@/(lgx)/internal/handler/explorer/gallerys/main';
import {
  ArchiveExplorerCreateModalContext,
  useArchiveExplorerCreateModal,
} from '@/(cx)/(modals)/(studio)/archive/explorer/create/main';
import { ExplorerModalView } from '@/(cx)/(modals)/(studio)/archive/explorer/create/view';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const gallerysHandler = useGallerysHandler(user.id);
  const modalContext = useArchiveExplorerCreateModal();

  return (
    <ArchiveExplorerCreateModalContext.Provider value={modalContext}>
      <GallerysHandlerContext.Provider value={gallerysHandler}>
        <ExplorerModalView />
        <GallerysView />
      </GallerysHandlerContext.Provider>
    </ArchiveExplorerCreateModalContext.Provider>
  );
}

export default insideVerse(Page);
