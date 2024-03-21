import { GalleryObj } from '@/(logic)/internal/model/gallery/main';
import { useState, useMemo } from 'react';
import { gallerysGqlHelper } from '@/(logic)/internal/gql/gallerys/main';

export const useGalleryHandler = (galleryId: string) => {
  const [gallery, changeGallery] = useState({} as GalleryObj);

  const queryGetGallery = async (galleryId: string) => {
    const gallery: GalleryObj = await gallerysGqlHelper.get(galleryId);
    changeGallery(gallery);
    return gallery;
  };

  useMemo(() => {
    if (!galleryId) {
      changeGallery({} as GalleryObj);
      return;
    }
    queryGetGallery(galleryId);
  }, [galleryId]);

  return { gallery };
};
