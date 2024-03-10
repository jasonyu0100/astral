'use client';
import { GallerysView } from './view';
import insideVerses from '@/(logic)/utils/isAuth';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';
import {
  GallerysHandlerContext,
  useGallerysHandler,
} from '@/(logic)/internal/handler/explorer/gallerys/main';
import { ArchiveExplorerCreateModalContext, useArchiveExplorerCreateModal } from '@/(modals)/(studio)/archive/explorer/create/main';
import { ArchiveExplorerModalView } from '@/(modals)/(studio)/archive/explorer/create/view';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const gallerysHandler = useGallerysHandler(user.id);
  const modalContext = useArchiveExplorerCreateModal();

  return (
    <ArchiveExplorerCreateModalContext.Provider value={modalContext}>
      <ArchiveExplorerModalView />
      <GallerysHandlerContext.Provider value={gallerysHandler}>
        <GallerysView />
      </GallerysHandlerContext.Provider>
    </ArchiveExplorerCreateModalContext.Provider>
  );
}

export default insideVerses(Page);
