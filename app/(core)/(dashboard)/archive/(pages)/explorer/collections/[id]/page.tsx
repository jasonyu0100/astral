'use client';
import { CollectionsResults } from './view/view';
import {
  ContextForGalleryObj,
} from '@/(model)/gallery/main';
import isVerseAuth from '@/(utils)/isAuth';
import { useGalleryHandler } from '@/(model)/(controller)/(archive)/explorer/gallerys/gallery/main';
import {
  CollectionsHandlerContext,
  useCollectionsHandler,
} from '@/(model)/(controller)/(archive)/explorer/collections/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  useArchiveExplorerCreateModal,
  ArchiveExplorerCreateModalContext,
} from '@/(core)/(dashboard)/(modals)/archive/explorer/create/main';
import { ExplorerModalView } from '@/(core)/(dashboard)/(modals)/archive/explorer/create/view';

function Page({ params }: { params: { id: string } }) {
  const { gallery } = useGalleryHandler(params.id);
  const user = useGlobalUser((state) => state.user);
  const collectionsHandler = useCollectionsHandler(gallery.id, user?.id);
  const modalContext = useArchiveExplorerCreateModal();

  return (
    <ContextForGalleryObj.Provider value={gallery}>
      <CollectionsHandlerContext.Provider value={collectionsHandler}>
        <ArchiveExplorerCreateModalContext.Provider value={modalContext}>
          <ExplorerModalView />
          <CollectionsResults />
        </ArchiveExplorerCreateModalContext.Provider>
      </CollectionsHandlerContext.Provider>
    </ContextForGalleryObj.Provider>
  );
}

export default isVerseAuth(Page);
