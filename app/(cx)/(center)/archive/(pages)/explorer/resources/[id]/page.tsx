'use client';
import { createContext } from 'react';
import {
  GalleryContext,
  GalleryObj,
} from '@/(lgx)/internal/model/gallery/main';
import {
  CollectionContext,
  CollectionObj,
} from '@/(lgx)/internal/model/gallery/collection/main';
import insideVerse from '@/(lgx)/utils/isAuth';
import { ResourceObj } from '@/(lgx)/internal/model/resource/main';
import {
  ResourcesActions,
  ResourcesHandlerContext,
  useResourcesHandler,
} from '@/(lgx)/internal/handler/explorer/resources/main';
import { useCollectionHandler } from '@/(lgx)/internal/handler/explorer/collections/collection/main';
import { useGalleryHandler } from '@/(lgx)/internal/handler/explorer/gallerys/gallery/main';
import { ResourcesView } from './(resources-explorer-epic)/view';
import { useGlobalUser } from '@/(lgx)/internal/store/user/main';
import {
  ArchiveExplorerCreateModalContext,
  useArchiveExplorerCreateModal,
} from '@/(cx)/(center)/(modals)/archive/explorer/create/main';
import { ExplorerModalView } from '@/(cx)/(center)/(modals)/archive/explorer/create/view';

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

export default insideVerse(Page);
