'use client';
import { GallerysView } from './(gallerys-explorer-epic)/view';
import isVerseAuth from '@/(utils)/isAuth';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  GallerysHandlerContext,
  useGallerysHandler,
} from '@/(types)/handler/explorer/gallerys/main';
import {
  ArchiveExplorerCreateModalContext,
  useArchiveExplorerCreateModal,
} from '@/(core)/(board)/(modals)/archive/explorer/create/main';
import { ExplorerModalView } from '@/(core)/(board)/(modals)/archive/explorer/create/view';

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

export default isVerseAuth(Page);
