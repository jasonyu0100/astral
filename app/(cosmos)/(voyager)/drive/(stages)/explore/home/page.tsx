'use client';
import { createContext } from 'react';
import { GalleryObj } from '@/tables/gallery/main';
import { ExploreHomeView } from './view';
import insideCosmos from '@/utils/isAuth';
import { useUser } from '@/state/main';
import {
  GalleryHandler,
  useGallerys,
} from '@/(cosmos)/(apollo)/space/[id]/handler/gallerys/main';
import { HomeModalContext, useHomeModalContext } from './home-epic/modal/main';

interface ExploreHomeContextObj {
  gallerys: GalleryObj[];
  galleryHandler: GalleryHandler;
}

export const ExploreHomeContext = createContext<ExploreHomeContextObj>(
  {} as ExploreHomeContextObj,
);

function Page() {
  const [state, actions] = useUser();
  const { gallerys, _galleryHandler: galleryHandler } = useGallerys(
    state.user.id,
  );
  const modalContext = useHomeModalContext();

  const context: ExploreHomeContextObj = {
    gallerys,
    galleryHandler,
  };

  return (
    <ExploreHomeContext.Provider value={context}>
      <HomeModalContext.Provider value={modalContext}>
        <ExploreHomeView />
      </HomeModalContext.Provider>
    </ExploreHomeContext.Provider>
  );
}

export default insideCosmos(Page);
