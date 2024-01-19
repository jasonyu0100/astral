import { amplifyClient } from '@/client';
import { createGalleryObj } from '@/graphql/mutations';
import { listGalleryObjs } from '@/graphql/queries';
import { FileObj } from '@/tables/file/main';
import { GalleryObj } from '@/tables/gallery/main';
import { useEffect, useState } from 'react';

export interface useGallerysInterface {
  gallerys: GalleryObj[];
  galleryHandler: GalleryHandler;
}

export interface GalleryHandler {
  queryListGallerys: () => Promise<GalleryObj[]>;
  queryCreateGallery: (
    title: string,
    description: string,
    thumbnail: FileObj,
  ) => Promise<void>;
}

export const useGallerys = (userId: string): useGallerysInterface => {
  const [gallerys, changeGallerys] = useState<GalleryObj[]>([]);

  useEffect(() => {
    if (!userId) return;
    _galleryHandler.queryListGallerys();
  }, [userId]);

  const _galleryHandler: GalleryHandler = {
    queryListGallerys: async () => {
      const payload = await amplifyClient.graphql({
        query: listGalleryObjs,
        variables: {
          filter: {
            userId: {
              eq: userId,
            },
          },
        },
      });
      const gallerys = payload?.data?.listGalleryObjs?.items as GalleryObj[];
      changeGallerys(gallerys);
      return gallerys;
    },

    queryCreateGallery: async (
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
            userId: userId,
            thumbnail: thumbnail,
          },
        },
      });

      const gallery = payload?.data?.createGalleryObj as GalleryObj;
      changeGallerys((prev) => {
        return [...prev, gallery];
      });
    },
  };

  return {
    gallerys,
    galleryHandler: _galleryHandler,
  };
};
