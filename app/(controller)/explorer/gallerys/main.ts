import { FileElem } from '@/(model)/elements/file/main';
import { ArchiveGalleryObj } from '@/(model)/archive/gallery/main';
import { createContext, useMemo, useState } from 'react';
import { gallerysGqlHelper } from '../../../(db)/gallerys/main';

export interface GallerysHandler {
  gallery: ArchiveGalleryObj | undefined;
  galleryId: string;
  gallerys: ArchiveGalleryObj[];
  galleryActions: GalleryActions;
}

export interface GalleryActions {
  listGallerys: () => Promise<ArchiveGalleryObj[]>;
  createGallery: (
    title: string,
    description: string,
    thumbnail: FileElem,
  ) => Promise<ArchiveGalleryObj>;
  goToGallery: (gallery: ArchiveGalleryObj) => ArchiveGalleryObj;
}

export const GallerysHandlerContext = createContext({} as GallerysHandler);

export const useGallerysHandler = (userId: string): GallerysHandler => {
  const [gallerys, changeGallerys] = useState<ArchiveGalleryObj[]>([]);
  const [galleryId, changeGalleryId] = useState<string>('');
  const gallery = gallerys.find((gallery) => gallery.id === galleryId);

  const galleryActions: GalleryActions = {
    goToGallery: (gallery: ArchiveGalleryObj) => {
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
      thumbnail: FileElem,
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
