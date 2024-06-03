'use client';
import { createContext } from 'react';
import {
  GalleryContext,
  GalleryObj,
} from '@/(model)/gallery/main';
import {
  CollectionContext,
  CollectionObj,
} from '@/(model)/gallery/collection/main';
import isVerseAuth from '@/(utils)/isAuth';
import { ResourceObj } from '@/(model)/resource/main';
import {
  ResourcesActions,
  ResourcesHandlerContext,
  useResourcesHandler,
} from '@/(controller)/explorer/resources/main';
import { useCollectionHandler } from '@/(controller)/explorer/collections/collection/main';
import { useGalleryHandler } from '@/(controller)/explorer/gallerys/gallery/main';
import { ResourcesView } from './view/view';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ArchiveExplorerCreateModalContext,
  useArchiveExplorerCreateModal,
} from '@/(core)/(dashboard)/(modals)/archive/explorer/create/main';
import { ExplorerModalView } from '@/(core)/(dashboard)/(modals)/archive/explorer/create/view';

function Page({ params }: { params: { id: string } }) {
  const { collection } = useCollectionHandler(params.id);
  const { gallery } = useGalleryHandler(collection.galleryId);
  const user = useGlobalUser((state) => state.user);
  const resourcesHandler = useResourcesHandler(params.id, user?.id);
  const modalContext = useArchiveExplorerCreateModal();

  return (
    <ArchiveExplorerCreateModalContext.Provider value={modalContext}>
      <GalleryContext.Provider value={gallery}>
        <CollectionContext.Provider value={collection}>
          <ResourcesHandlerContext.Provider value={resourcesHandler}>
            <ExplorerModalView />
            <ResourcesView />
          </ResourcesHandlerContext.Provider>
        </CollectionContext.Provider>
      </GalleryContext.Provider>
    </ArchiveExplorerCreateModalContext.Provider>
  );
}

export default isVerseAuth(Page);
