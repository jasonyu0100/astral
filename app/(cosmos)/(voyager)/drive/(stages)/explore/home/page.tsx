'use client';
import { createContext } from 'react';
import { GalleryObj } from '@/tables/gallery/main';
import { ExploreView } from './view';
import insideCosmos from '@/utils/isAuth';
import { useUser } from '@/state/main';
import { GalleryHandler, useGallerys } from '@/(cosmos)/(apollo)/space/[id]/handler/gallerys/main';

interface ExploreHomeContextObj {
  gallerys: GalleryObj[];
  galleryHandler: GalleryHandler
}

export const ExploreHomeContext = createContext<ExploreHomeContextObj>(
  {} as ExploreHomeContextObj,
);

function Page() {
  const [state, actions] = useUser();
  const { gallerys, galleryHandler } = useGallerys(state.user.id);

  const context: ExploreHomeContextObj = {
    gallerys,
    galleryHandler,
  };

  return (
    <ExploreHomeContext.Provider value={context}>
      <ExploreView />
    </ExploreHomeContext.Provider>
  );
}

export default insideCosmos(Page);
