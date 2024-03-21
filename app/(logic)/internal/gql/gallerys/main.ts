import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { GalleryObj } from '@/(logic)/internal/model/gallery/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { gqlArgs } from '@/(logic)/utils/clean';
import {
  createGalleryObj,
  deleteGalleryObj,
  updateGalleryObj,
} from '@/graphql/mutations';
import { getGalleryObj, listGalleryObjs } from '@/graphql/queries';

export interface GallerysGqlHelper {
  gqlGetGallery: (id: string) => Promise<GalleryObj>;
  gqlListGallerys: (userId: string) => Promise<GalleryObj[]>;
  gqlCreateGallery: (
    userId: string,
    title: string,
    description: string,
    thumbnail: FileObj,
  ) => Promise<GalleryObj>;
  gqlUpdateGallery: (
    galleryId: string,
    updatedGalleryObj: GalleryObj,
  ) => Promise<GalleryObj>;
  gqlDeleteGallery: (galleryId: string) => Promise<GalleryObj>;
}

export const gqlHelper: GallerysGqlHelper = {
  gqlGetGallery: async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getGalleryObj,
      variables: {
        id: id,
      },
    });

    const galleryObj: GalleryObj = payload?.data.getGalleryObj as GalleryObj;
    return galleryObj;
  },
  gqlListGallerys: async (userId: string) => {
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
    const galleryObjs =
      (payload?.data?.listGalleryObjs?.items as GalleryObj[]) || [];
    return galleryObjs;
  },
  gqlCreateGallery: async (
    userId: string,
    title: string,
    description: string,
    thumbnail: FileObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createGalleryObj,
      variables: {
        input: gqlArgs({
          title,
          description,
          userId: userId,
          thumbnail: thumbnail,
        }),
      },
    });
    const galleryObj = payload?.data?.createGalleryObj as GalleryObj;
    return galleryObj;
  },
  gqlUpdateGallery: async (
    galleryId: string,
    updatedGalleryObj: GalleryObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: updateGalleryObj,
      variables: {
        input: gqlArgs({
          id: galleryId,
          title: updatedGalleryObj.title,
          description: updatedGalleryObj.description,
          userId: updatedGalleryObj.userId,
          thumbnail: updatedGalleryObj.thumbnail,
        }),
      },
    });
    const galleryObj = payload?.data?.updateGalleryObj as GalleryObj;
    return galleryObj;
  },
  gqlDeleteGallery: async (galleryId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteGalleryObj,
      variables: {
        input: {
          id: galleryId,
        },
      },
    });
    const galleryObj = payload?.data?.deleteGalleryObj as GalleryObj;
    return galleryObj;
  },
};
