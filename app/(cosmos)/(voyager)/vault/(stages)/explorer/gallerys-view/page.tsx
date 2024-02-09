'use client';
import { createContext } from 'react';
import { GalleryObj } from '@/tables/gallery/main';
import { ExploreGallerysView } from './view';
import insideCosmos from '@/utils/isAuth';
import { useGlobalUser } from '@/state/main';
import { GallerysModalContext, useGallerysModal } from '../../../../../(modals)/gallerys-modal/main';
import { GalleryHandler, useGallerys } from '@/handler/explorer/gallerys/main';

interface ExploreHomeContextObj {
  gallerys: GalleryObj[];
  galleryHandler: GalleryHandler;
}

export const ExploreHomeContext = createContext<ExploreHomeContextObj>(
  {} as ExploreHomeContextObj,
);

function Page() {
  const [state, actions] = useGlobalUser();
  const { gallerys, _galleryHandler: galleryHandler } = useGallerys(
    state.user.id,
  );
  const modalContext = useGallerysModal();

  const context: ExploreHomeContextObj = {
    gallerys,
    galleryHandler,
  };

  return (
    <ExploreHomeContext.Provider value={context}>
      <GallerysModalContext.Provider value={modalContext}>
        <ExploreGallerysView />
      </GallerysModalContext.Provider>
    </ExploreHomeContext.Provider>
  );
}

export default insideCosmos(Page);
