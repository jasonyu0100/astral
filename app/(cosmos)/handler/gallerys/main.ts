import { amplifyClient } from '@/client';
import { createGalleryObj } from '@/graphql/mutations';
import { listGalleryObjs } from '@/graphql/queries';
import { FileObj } from '@/tables/file/main';
import { GalleryObj } from '@/tables/gallery/main';
import { useEffect, useState } from 'react';

export interface useGallerysInterface {
  gallery: GalleryObj | undefined;
  galleryId: string;
  gallerys: GalleryObj[];
  _galleryHandler: GalleryHandler;
}

export interface GalleryHandler {
  queryListGallerys: () => Promise<GalleryObj[]>;
  queryCreateGallery: (
    title: string,
    description: string,
    thumbnail: FileObj,
  ) => Promise<GalleryObj>;
  goToGallery: (gallery: GalleryObj) => GalleryObj;
}

export const useGallerys = (userId: string): useGallerysInterface => {
  const [gallerys, changeGallerys] = useState<GalleryObj[]>([]);
  const [galleryId, changeGalleryId] = useState<string>('');
  const gallery = gallerys.find((gallery) => gallery.id === galleryId);

  useEffect(() => {
    if (!userId) {
      changeGallerys([]);
      return;
    }
    _galleryHandler.queryListGallerys();
  }, [userId]);

  const gqlHelper = {
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
      return gallery;
    },
  };

  const _galleryHandler: GalleryHandler = {
    goToGallery: (gallery: GalleryObj) => {
      changeGalleryId(gallery.id);
      return gallery;
    },
    queryListGallerys: async () => {
      const gallerys = await gqlHelper.queryListGallerys();
      changeGallerys(gallerys);
      changeGalleryId(gallerys[0]?.id || '');
      return gallerys;
    },
    queryCreateGallery: async (
      title: string,
      description: string,
      thumbnail: FileObj,
    ) => {
      const gallery = await gqlHelper.queryCreateGallery(
        title,
        description,
        thumbnail,
      );
      changeGallerys((prev) => [...prev, gallery]);
      changeGalleryId(gallery.id);
      return gallery;
    },
  };

  return {
    gallery,
    galleryId,
    gallerys,
    _galleryHandler,
  };
};
