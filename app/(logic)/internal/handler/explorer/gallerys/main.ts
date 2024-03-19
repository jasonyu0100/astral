import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { GalleryObj } from '@/(logic)/internal/model/gallery/main';
import { createContext, useMemo, useState } from 'react';
import { gqlHelper } from '../../../gql/gallerys/main';

export interface GallerysHandler {
  gallery: GalleryObj | undefined;
  galleryId: string;
  gallerys: GalleryObj[];
  galleryActions: GalleryActions;
}

export interface GalleryActions {
  queryListGallerys: () => Promise<GalleryObj[]>;
  queryCreateGallery: (
    title: string,
    description: string,
    thumbnail: FileObj,
  ) => Promise<GalleryObj>;
  goToGallery: (gallery: GalleryObj) => GalleryObj;
}

export const GallerysHandlerContext = createContext({} as GallerysHandler);

export const useGallerysHandler = (userId: string): GallerysHandler => {
  const [gallerys, changeGallerys] = useState<GalleryObj[]>([]);
  const [galleryId, changeGalleryId] = useState<string>('');
  const gallery = gallerys.find((gallery) => gallery.id === galleryId);

  const galleryActions: GalleryActions = {
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
    galleryActions.queryListGallerys();
  }, [userId]);

  return {
    gallery,
    galleryId,
    gallerys,
    galleryActions,
  };
};
