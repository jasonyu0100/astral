import { ArchiveGalleryObj } from '@/(model)/archive/gallery/main';
import { useState, useMemo } from 'react';
import { gallerysGqlHelper } from '@/(db)/(archive-db)/gallerys/main';

export const useGalleryHandler = (galleryId: string) => {
  const [gallery, changeGallery] = useState({} as ArchiveGalleryObj);

  const queryGetGallery = async (galleryId: string) => {
    const gallery: ArchiveGalleryObj = await gallerysGqlHelper.get(galleryId);
    changeGallery(gallery);
    return gallery;
  };

  useMemo(() => {
    if (!galleryId) {
      changeGallery({} as ArchiveGalleryObj);
      return;
    }
    queryGetGallery(galleryId);
  }, [galleryId]);

  return { gallery };
};
