'use client';
import { createContext } from 'react';
import { GalleryObj } from '@/(logic)/model/gallery/main';
import { ExploreGallerysView } from './view';
import insideCosmos from '@/(logic)/utils/isAuth';
import { useGlobalUser } from '@/(logic)/store/user/main';
import {
  GallerysModalContext,
  useGallerysModal,
} from '../../../../../../(modals)/gallerys-modal/main';
import {
  GalleryHandler,
  useGallerys,
} from '@/(logic)/handler/explorer/gallerys/main';
import { GallerysModalView } from '@/(modals)/gallerys-modal/view';

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
