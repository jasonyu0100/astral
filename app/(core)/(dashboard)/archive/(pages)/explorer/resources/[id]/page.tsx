'use client';
import { createContext } from 'react';
import {
  GalleryContext,
  GalleryObj,
} from '@/(model)/gallery/main';
import {
  GalleryCollectionContext,
  GalleryCollectionObj,
} from '@/(model)/gallery/resource/collection/main';
import isVerseAuth from '@/(utils)/isAuth';
import { CollectionResourceObj } from '@/(model)/gallery/resource/main';
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
import { DashboardContent } from '@/(components)/(dashboard)/content/main';
import { CraftTabs, CraftTabStage } from '@/(core)/(dashboard)/archive/(tabs)/main';
import { archiveMap } from '@/(core)/(dashboard)/archive/map';

function Page({ params }: { params: { id: string } }) {
  const { collection } = useCollectionHandler(params.id);
  const { gallery } = useGalleryHandler(collection.galleryId);
  const user = useGlobalUser((state) => state.user);
  const resourcesHandler = useResourcesHandler(params.id, user?.id);
  const modalContext = useArchiveExplorerCreateModal();

  return (
    <ArchiveExplorerCreateModalContext.Provider value={modalContext}>
      <GalleryContext.Provider value={gallery}>
        <GalleryCollectionContext.Provider value={collection}>
          <ResourcesHandlerContext.Provider value={resourcesHandler}>
              <CraftTabs tab={CraftTabStage.Explorer} 
                backUrl={archiveMap.archive.explorer.collections.id.link(gallery.id)}
              />
              <DashboardContent>
                <ExplorerModalView />
                <ResourcesView />
              </DashboardContent>
          </ResourcesHandlerContext.Provider>
        </GalleryCollectionContext.Provider>
      </GalleryContext.Provider>
    </ArchiveExplorerCreateModalContext.Provider>
  );
}

export default isVerseAuth(Page);
