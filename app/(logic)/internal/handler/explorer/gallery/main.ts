import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { getGalleryObj } from '@/graphql/queries';
import { GalleryObj } from '@/(logic)/internal/data/infra/model/gallery/main';
import { useState, useMemo } from 'react';

export const useGallery = (galleryId: string) => {
  const [gallery, changeGallery] = useState({} as GalleryObj);

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

  useMemo(() => {
    if (!galleryId) {
      changeGallery({} as GalleryObj);
      return;
    }
    queryGetGallery(galleryId);
  }, [galleryId]);

  return { gallery };
};
