import { amplifyClient } from '@/client';
import { getGalleryObj } from '@/graphql/queries';
import { GalleryObj } from '@/tables/gallery/main';
import { useState, useEffect } from 'react';

export const useGallery = (galleryId: string) => {
  const [gallery, changeGallery] = useState({} as GalleryObj);

  useEffect(() => {
    if (!galleryId) {
      changeGallery({} as GalleryObj);
      return;
    }
    queryGetGallery(galleryId);
  }, [galleryId]);

  const queryGetGallery = async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getGalleryObj,
      variables: {
        id: id,
      },
    });

    const gallery: GalleryObj = payload?.data.getGalleryObj as GalleryObj;
    changeGallery(gallery);
    return gallery;
  };

  return { gallery };
};
