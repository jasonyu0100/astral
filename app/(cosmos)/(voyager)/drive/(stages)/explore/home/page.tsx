'use client';
import { createContext, useEffect, useState } from 'react';
import { GalleryObj } from '@/tables/gallery/main';
import { ExploreView } from './view';
import insideCosmos from '@/utils/isAuth';
import { amplifyClient } from '@/client';
import { listGalleryObjs } from '@/graphql/queries';
import { useUser } from '@/state/main';
import { createGalleryObj } from '@/graphql/mutations';
import { FileObj } from '@/tables/file/main';

interface ExploreHomeContextObj {
  gallerys: GalleryObj[];
  addGallery: (
    title: string,
    description: string,
    thumbnail: FileObj,
  ) => Promise<void>;
}

export const ExploreHomeContext = createContext<ExploreHomeContextObj>({
} as ExploreHomeContextObj);

function Page() {
  const [state, actions] = useUser();
  const [gallerys, changeGallerys] = useState<GalleryObj[]>([]);

  useEffect(() => {
    getGallerys();
  }, []);

  const getGallerys = async () => {
    const payload = await amplifyClient.graphql({
      query: listGalleryObjs,
      variables: {
        filter: {
          userId: {
            eq: state.user.id,
          },
        },
      },
    });
    const gallerys = payload?.data?.listGalleryObjs?.items as GalleryObj[];
    changeGallerys(gallerys);
    return gallerys;
  };

  const addGallery = async (
    title: string,
    description: string,
    thumbnail: FileObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createGalleryObj,
      variables: {
        input: {
          title,
          description,
          userId: state.user.user.id,
          thumbnail: thumbnail,
        },
      },
    });

    const gallery = payload?.data?.createGalleryObj as GalleryObj;
    changeGallerys((prev) => {
      return [...prev, gallery];
    });
  };

  const context: ExploreHomeContext = {
    gallerys,
    addGallery,
  };

  return (
    <ExploreHomeContext.Provider value={context}>
      <ExploreView />
    </ExploreHomeContext.Provider>
  );
}

export default insideCosmos(Page);
