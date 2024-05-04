import { amplifyClient } from '@/(lgx)/external/aws/graphql/main';
import { GalleryObj } from '@/(types)/model/gallery/main';
import { FileObj } from '@/(types)/model/resource/file/main';
import { gqlArgs } from '@/(lgx)/utils/clean';
import {
  createGalleryObj,
  deleteGalleryObj,
  updateGalleryObj,
} from '@/graphql/mutations';
import { getGalleryObj, listGalleryObjs } from '@/graphql/queries';

export interface GallerysGqlHelper {
  get: (id: string) => Promise<GalleryObj>;
  listFromUser: (userId: string) => Promise<GalleryObj[]>;
  create: (
    userId: string,
    title: string,
    description: string,
    thumbnail: FileObj,
  ) => Promise<GalleryObj>;
  update: (
    galleryId: string,
    updatedGalleryObj: GalleryObj,
  ) => Promise<GalleryObj>;
  delete: (galleryId: string) => Promise<GalleryObj>;
}

export const gallerysGqlHelper: GallerysGqlHelper = {
  get: async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getGalleryObj,
      variables: {
        id: id,
      },
    });

    const galleryObj: GalleryObj = payload?.data.getGalleryObj as GalleryObj;
    return galleryObj;
  },
  listFromUser: async (userId: string) => {
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
  create: async (
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
  update: async (
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
  delete: async (galleryId: string) => {
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
