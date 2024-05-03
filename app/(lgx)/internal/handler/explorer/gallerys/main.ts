import { FileObj } from '@/(lgx)/internal/model/resource/file/main';
import { GalleryObj } from '@/(lgx)/internal/model/gallery/main';
import { createContext, useMemo, useState } from 'react';
import { gallerysGqlHelper } from '../../../gql/gallerys/main';

export interface GallerysHandler {
  gallery: GalleryObj | undefined;
  galleryId: string;
  gallerys: GalleryObj[];
  galleryActions: GalleryActions;
}

export interface GalleryActions {
  listGallerys: () => Promise<GalleryObj[]>;
  createGallery: (
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
    listGallerys: async () => {
      const gallerys = await gallerysGqlHelper.listFromUser(userId);
      changeGallerys(gallerys);
      changeGalleryId(gallerys[0]?.id || '');
      return gallerys;
    },
    createGallery: async (
      title: string,
      description: string,
      thumbnail: FileObj,
    ) => {
      const gallery = await gallerysGqlHelper.create(
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
    galleryActions.listGallerys();
  }, [userId]);

  return {
    gallery,
    galleryId,
    gallerys,
    galleryActions,
  };
};
