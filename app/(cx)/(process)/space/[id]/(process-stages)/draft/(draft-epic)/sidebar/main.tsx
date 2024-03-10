import { GalleryObj } from '@/(logic)/internal/data/infra/model/gallery/main';
import { createContext, useState } from 'react';
import { DraftSidebarView } from './view';
import { CollectionObj } from '@/(logic)/internal/data/infra/model/gallery/collection/main';
import {
  GallerysHandlerContext,
  useGallerysHandler,
} from '@/(logic)/internal/handler/explorer/gallerys/main';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';
import {
  CollectionsHandlerContext,
  useCollectionsHandler,
} from '@/(logic)/internal/handler/explorer/collections/main';
import {
  CollectionResourcesHandlerContext,
  useCollectionResources,
} from '@/(logic)/internal/handler/explorer/resources/main';
import {
  ArchiveSidebarCreateModalContext,
  useArchiveSidebarCreateModal,
} from '@/(modals)/(studio)/archive/sidebar/create/main';
import { ArchiveSidebarCreateModalView } from '@/(modals)/(studio)/archive/sidebar/create/view';

export enum SidebarMode {
  Gallerys = 'Gallerys',
  Collections = 'Collections',
  Resources = 'Resources',
}
interface SidebarHandler {
  goToHomeView: () => void;
  goToGalleryView: () => void;
  goToCollectionView: () => void;
  goToGallery: (section: GalleryObj) => void;
  goToCollection: (section: CollectionObj) => void;
}
export interface DraftSidebarContextObject {
  sidebarMode: SidebarMode;
  sidebarHandler: SidebarHandler;
}

export const DraftSidebarContext = createContext<DraftSidebarContextObject>(
  {} as DraftSidebarContextObject,
);

export function DraftSidebar() {
  const [sidebarMode, changeSidebarMode] = useState(SidebarMode.Gallerys);
  const user = useGlobalUser((state) => state.user);
  const gallerysHandler = useGallerysHandler(user?.id);
  const collectionsHandler = useCollectionsHandler(
    gallerysHandler.galleryId,
    user?.id,
  );
  const resourcesHandler = useCollectionResources(
    collectionsHandler.collectionId,
    user?.id,
  );

  const sidebarHandler: SidebarHandler = {
    goToHomeView: () => {
      changeSidebarMode(SidebarMode.Gallerys);
    },
    goToGalleryView: () => {
      changeSidebarMode(SidebarMode.Collections);
    },
    goToCollectionView: () => {
      changeSidebarMode(SidebarMode.Resources);
    },
    goToGallery: (gallery: GalleryObj) => {
      gallerysHandler.galleryActions.goToGallery(gallery);
      changeSidebarMode(SidebarMode.Collections);
    },
    goToCollection: (collection: CollectionObj) => {
      collectionsHandler.collectionActions.goToCollection(collection);
      changeSidebarMode(SidebarMode.Resources);
    },
  };

  const draftContext: DraftSidebarContextObject = {
    sidebarMode,
    sidebarHandler,
  };

  const modalContext = useArchiveSidebarCreateModal();

  return (
    <DraftSidebarContext.Provider value={draftContext}>
      <GallerysHandlerContext.Provider value={gallerysHandler}>
        <CollectionsHandlerContext.Provider value={collectionsHandler}>
          <CollectionResourcesHandlerContext.Provider value={resourcesHandler}>
            <ArchiveSidebarCreateModalContext.Provider value={modalContext}>
              <ArchiveSidebarCreateModalView />
              <DraftSidebarView />
            </ArchiveSidebarCreateModalContext.Provider>
          </CollectionResourcesHandlerContext.Provider>
        </CollectionsHandlerContext.Provider>
      </GallerysHandlerContext.Provider>
    </DraftSidebarContext.Provider>
  );
}
