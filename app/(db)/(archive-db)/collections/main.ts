import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GalleryCollectionObj } from '@/(model)/archive/collection/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createCollectionObj,
  deleteCollectionObj,
  updateCollectionObj,
} from '@/graphql/mutations';
import { getCollectionObj, listCollectionObjs } from '@/graphql/queries';

export interface CollectionsGqlHelper {
  get: (id: string) => Promise<GalleryCollectionObj>;
  listFromGallery: (galleryId: string) => Promise<GalleryCollectionObj[]>;
  create: (
    galleryId: string,
    title: string,
    description: string,
  ) => Promise<GalleryCollectionObj>;
  update: (
    collectionId: string,
    updatedCollectionObj: GalleryCollectionObj,
  ) => Promise<GalleryCollectionObj>;
  delete: (collectionId: string) => Promise<GalleryCollectionObj>;
}

export const collectionsGqlHelper: CollectionsGqlHelper = {
  get: async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getCollectionObj,
      variables: {
        id: id,
      },
    });

    const collectionObj = payload?.data?.getCollectionObj as GalleryCollectionObj;
    return collectionObj;
  },
  listFromGallery: async (galleryId: string) => {
    const payload = await amplifyClient.graphql({
      query: listCollectionObjs,
      variables: {
        filter: {
          galleryId: {
            eq: galleryId,
          },
        },
      },
    });
    const collectionObjs =
      (payload?.data?.listCollectionObjs?.items as GalleryCollectionObj[]) || [];
    return collectionObjs;
  },
  create: async (galleryId: string, title: string, description: string) => {
    const payload = await amplifyClient.graphql({
      query: createCollectionObj,
      variables: {
        input: gqlArgs({
          galleryId: galleryId,
          title: title,
          description: description,
        }),
      },
    });
    const collectionObj = payload?.data?.createCollectionObj as GalleryCollectionObj;
    return collectionObj;
  },
  update: async (collectionId: string, updatedCollectionObj: GalleryCollectionObj) => {
    const payload = await amplifyClient.graphql({
      query: updateCollectionObj,
      variables: {
        input: gqlArgs({
          id: collectionId,
          galleryId: updatedCollectionObj.galleryId,
          title: updatedCollectionObj.title,
          description: updatedCollectionObj.description,
        }),
      },
    });
    const collectionObj = payload?.data?.updateCollectionObj as GalleryCollectionObj;
    return collectionObj;
  },
  delete: async (collectionId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteCollectionObj,
      variables: {
        input: {
          id: collectionId,
        },
      },
    });
    const collectionObj = payload?.data?.deleteCollectionObj as GalleryCollectionObj;
    return collectionObj;
  },
};
