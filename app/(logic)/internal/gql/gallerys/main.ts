import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { GalleryObj } from '@/(logic)/internal/data/infra/model/gallery/main';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { createGalleryObj } from '@/graphql/mutations';
import { getGalleryObj, listGalleryObjs } from '@/graphql/queries';

export interface GallerysGqlHelper {
  queryGetGallery: (id: string) => Promise<GalleryObj>;
  queryListGallerys: (userId: string) => Promise<GalleryObj[]>;
  queryCreateGallery: (
    userId: string,
    title: string,
    description: string,
    thumbnail: FileObj,
  ) => Promise<GalleryObj>;
}

export const gqlHelper: GallerysGqlHelper = {
  queryGetGallery: async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getGalleryObj,
      variables: {
        id: id,
      },
    });

    const gallery: GalleryObj = payload?.data.getGalleryObj as GalleryObj;
    return gallery;
  },
  queryListGallerys: async (userId: string) => {
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
    const gallerys =
      (payload?.data?.listGalleryObjs?.items as GalleryObj[]) || [];
    return gallerys;
  },
  queryCreateGallery: async (
    userId: string,
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
    console.log(payload);
    const gallery = payload?.data?.createGalleryObj as GalleryObj;
    return gallery;
  },
};
