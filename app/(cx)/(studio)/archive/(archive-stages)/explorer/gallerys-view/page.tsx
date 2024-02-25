'use client';
import { createContext } from 'react';
import { GalleryObj } from '@/(logic)/internal/data/infra/model/gallery/main';
import { ExploreGallerysView } from './view';
import insideCosmos from '@/(logic)/utils/isAuth';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';
import {
  GallerysModalContext,
  useGallerysModal,
} from '../../../../../../(modals)/studio/gallery/gallerys-modal/main';
import {
  GalleryHandler,
  useGallerys,
} from '@/(logic)/internal/handler/explorer/gallerys/main';
import { GallerysModalView } from '@/(modals)/studio/gallery/gallerys-modal/view';

interface ExploreHomeContextObj {
  gallerys: GalleryObj[];
  galleryHandler: GalleryHandler;
}

export const ExploreHomeContext = createContext<ExploreHomeContextObj>(
  {} as ExploreHomeContextObj,
);

function Page() {
  const user = useGlobalUser((state) => state.user);
  const { gallerys, _galleryHandler: galleryHandler } = useGallerys(user.id);
  const modalContext = useGallerysModal();

  const context: ExploreHomeContextObj = {
    gallerys,
    galleryHandler,
  };

  return (
    <ExploreHomeContext.Provider value={context}>
      <GallerysModalContext.Provider value={modalContext}>
        <GallerysModalView />
        <ExploreGallerysView />
      </GallerysModalContext.Provider>
    </ExploreHomeContext.Provider>
  );
}

export default insideCosmos(Page);
