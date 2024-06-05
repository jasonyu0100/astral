import { amplifyClient } from '@/(api)/aws/graphql/main';
import { ArchiveGalleryObj } from '@/(model)/gallery/main';
import { FileElem } from '@/(model)/elements/file/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createGalleryObj,
  deleteGalleryObj,
  updateGalleryObj,
} from '@/graphql/mutations';
import { getGalleryObj, listGalleryObjs } from '@/graphql/queries';

export interface GallerysGqlHelper {
  get: (id: string) => Promise<ArchiveGalleryObj>;
  listFromUser: (userId: string) => Promise<ArchiveGalleryObj[]>;
  create: (
    userId: string,
    title: string,
    description: string,
    thumbnail: FileElem,
  ) => Promise<ArchiveGalleryObj>;
  update: (
    galleryId: string,
    updatedGalleryObj: ArchiveGalleryObj,
  ) => Promise<ArchiveGalleryObj>;
  delete: (galleryId: string) => Promise<ArchiveGalleryObj>;
}

export const gallerysGqlHelper: GallerysGqlHelper = {
  get: async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getGalleryObj,
      variables: {
        id: id,
      },
    });

    const galleryObj: ArchiveGalleryObj = payload?.data.getGalleryObj as ArchiveGalleryObj;
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
      (payload?.data?.listGalleryObjs?.items as ArchiveGalleryObj[]) || [];
    return galleryObjs;
  },
  create: async (
    userId: string,
    title: string,
    description: string,
    thumbnail: FileElem,
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
    const galleryObj = payload?.data?.createGalleryObj as ArchiveGalleryObj;
    return galleryObj;
  },
  update: async (
    galleryId: string,
    updatedGalleryObj: ArchiveGalleryObj,
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
    const galleryObj = payload?.data?.updateGalleryObj as ArchiveGalleryObj;
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
    const galleryObj = payload?.data?.deleteGalleryObj as ArchiveGalleryObj;
    return galleryObj;
  },
};
