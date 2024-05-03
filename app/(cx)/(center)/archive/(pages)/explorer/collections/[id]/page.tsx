'use client';
import { CollectionsView } from './(collections-explorer-epic)/view';
import {
  GalleryContext,
} from '@/(lgx)/internal/model/gallery/main';
import insideVerse from '@/(lgx)/utils/isAuth';
import { useGalleryHandler } from '@/(lgx)/internal/handler/explorer/gallerys/gallery/main';
import {
  CollectionsHandlerContext,
  useCollectionsHandler,
} from '@/(lgx)/internal/handler/explorer/collections/main';
import { useGlobalUser } from '@/(lgx)/internal/store/user/main';
import {
  useArchiveExplorerCreateModal,
  ArchiveExplorerCreateModalContext,
} from '@/(cx)/(center)/(modals)/archive/explorer/create/main';
import { ExplorerModalView } from '@/(cx)/(center)/(modals)/archive/explorer/create/view';

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
