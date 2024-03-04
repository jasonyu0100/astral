'use client';
import { createContext } from 'react';
import { GalleryObj } from '@/(logic)/internal/data/infra/model/gallery/main';
import { GallerysView } from './view';
import insideCosmos from '@/(logic)/utils/isAuth';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';
import {
  GalleryActions,
  useGallerysHandler,
} from '@/(logic)/internal/handler/explorer/gallerys/main';

interface ExplorerHomeContextObj {
  gallerys: GalleryObj[];
  galleryHandler: GalleryActions;
}

export const ExplorerHomeContext = createContext<ExplorerHomeContextObj>(
  {} as ExplorerHomeContextObj,
);

function Page() {
  const user = useGlobalUser((state) => state.user);
  const { gallerys, galleryActions: galleryHandler } = useGallerysHandler(user.id);

  const context: ExplorerHomeContextObj = {
    gallerys,
    galleryHandler,
  };

  return (
    <ExplorerHomeContext.Provider value={context}>
      <GallerysView />
    </ExplorerHomeContext.Provider>
  );
}

export default insideCosmos(Page);
