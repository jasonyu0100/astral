import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { createGalleryObj } from '@/graphql/mutations';
import { listGalleryObjs } from '@/graphql/queries';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { GalleryObj } from '@/(logic)/internal/data/infra/model/gallery/main';
import { useMemo, useState } from 'react';
import { gqlHelper } from '../../../gql/gallerys/main';

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

  const _galleryHandler: GalleryHandler = {
    goToGallery: (gallery: GalleryObj) => {
      changeGalleryId(gallery.id);
      return gallery;
    },
    queryListGallerys: async () => {
      const gallerys = await gqlHelper.queryListGallerys(userId);
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
        userId,
        title,
        description,
        thumbnail,
      );
      changeGallerys((prev) => [...prev, gallery]);
      changeGalleryId(gallery.id);
      return gallery;
    },
  };

  useMemo(() => {
    if (!userId) {
      changeGallerys([]);
      return;
    }
    _galleryHandler.queryListGallerys();
  }, [userId]);

  return {
    gallery,
    galleryId,
    gallerys,
    _galleryHandler,
  };
};
