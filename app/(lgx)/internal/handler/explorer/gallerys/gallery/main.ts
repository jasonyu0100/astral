import { GalleryObj } from '@/(lgx)/internal/model/gallery/main';
import { useState, useMemo } from 'react';
import { gallerysGqlHelper } from '@/(lgx)/internal/gql/gallerys/main';

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
