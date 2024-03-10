'use client';
import { createContext } from 'react';
import {
  GalleryContext,
  GalleryObj,
} from '@/(logic)/internal/data/infra/model/gallery/main';
import {
  CollectionContext,
  CollectionObj,
} from '@/(logic)/internal/data/infra/model/gallery/collection/main';
import insideVerses from '@/(logic)/utils/isAuth';
import { ResourceObj } from '@/(logic)/internal/data/infra/model/resource/main';
import {
  CollectionResourcesActions,
  CollectionResourcesHandlerContext,
  useCollectionResources,
} from '@/(logic)/internal/handler/explorer/resources/main';
import { useCollectionHandler } from '@/(logic)/internal/handler/explorer/collections/collection/main';
import { useGalleryHandler } from '@/(logic)/internal/handler/explorer/gallerys/gallery/main';
import { ResourcesView } from './view';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';
import {
  ArchiveExplorerCreateModalContext,
  useArchiveExplorerCreateModal,
} from '@/(modals)/(studio)/archive/explorer/create/main';
import { ArchiveExplorerModalView } from '@/(modals)/(studio)/archive/explorer/create/view';

function Page({ params }: { params: { id: string } }) {
  const { collection } = useCollectionHandler(params.id);
  const { gallery } = useGalleryHandler(collection.galleryId);
  const user = useGlobalUser((state) => state.user);
  const resourcesHandler = useCollectionResources(params.id, user?.id);
  const modalContext = useArchiveExplorerCreateModal();

  return (
    <ArchiveExplorerCreateModalContext.Provider value={modalContext}>
      <ArchiveExplorerModalView />
      <GalleryContext.Provider value={gallery}>
        <CollectionContext.Provider value={collection}>
          <CollectionResourcesHandlerContext.Provider value={resourcesHandler}>
            <ResourcesView />
          </CollectionResourcesHandlerContext.Provider>
        </CollectionContext.Provider>
      </GalleryContext.Provider>
    </ArchiveExplorerCreateModalContext.Provider>
  );
}

export default insideVerses(Page);
