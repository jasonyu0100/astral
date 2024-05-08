'use client';
import { CollectionsView } from './(collections-explorer-epic)/view';
import {
  GalleryContext,
} from '@/(types)/model/gallery/main';
import insideVerse from '@/(utils)/isAuth';
import { useGalleryHandler } from '@/(logic)/internal/handler/explorer/gallerys/gallery/main';
import {
  CollectionsHandlerContext,
  useCollectionsHandler,
} from '@/(logic)/internal/handler/explorer/collections/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  useArchiveExplorerCreateModal,
  ArchiveExplorerCreateModalContext,
} from '@/(core)/(board)/(modals)/archive/explorer/create/main';
import { ExplorerModalView } from '@/(core)/(board)/(modals)/archive/explorer/create/view';

function Page({ params }: { params: { id: string } }) {
  const { gallery } = useGalleryHandler(params.id);
  const user = useGlobalUser((state) => state.user);
  const collectionsHandler = useCollectionsHandler(gallery.id, user?.id);
  const modalContext = useArchiveExplorerCreateModal();

  return (
    <GalleryContext.Provider value={gallery}>
      <CollectionsHandlerContext.Provider value={collectionsHandler}>
        <ArchiveExplorerCreateModalContext.Provider value={modalContext}>
          <ExplorerModalView />
          <CollectionsView />
        </ArchiveExplorerCreateModalContext.Provider>
      </CollectionsHandlerContext.Provider>
    </GalleryContext.Provider>
  );
}

export default insideVerse(Page);
