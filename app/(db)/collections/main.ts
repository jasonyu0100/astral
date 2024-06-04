import { amplifyClient } from '@/(api)/aws/graphql/main';
import { CollectionObj } from '@/(model)/media/collection/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createCollectionObj,
  deleteCollectionObj,
  updateCollectionObj,
} from '@/graphql/mutations';
import { getCollectionObj, listCollectionObjs } from '@/graphql/queries';

export interface CollectionsGqlHelper {
  get: (id: string) => Promise<CollectionObj>;
  listFromGallery: (galleryId: string) => Promise<CollectionObj[]>;
  create: (
    galleryId: string,
    title: string,
    description: string,
  ) => Promise<CollectionObj>;
  update: (
    collectionId: string,
    updatedCollectionObj: CollectionObj,
  ) => Promise<CollectionObj>;
  delete: (collectionId: string) => Promise<CollectionObj>;
}

export const collectionsGqlHelper: CollectionsGqlHelper = {
  get: async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getCollectionObj,
      variables: {
        id: id,
      },
    });

    const collectionObj = payload?.data?.getCollectionObj as CollectionObj;
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
      (payload?.data?.listCollectionObjs?.items as CollectionObj[]) || [];
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
    const collectionObj = payload?.data?.createCollectionObj as CollectionObj;
    return collectionObj;
  },
  update: async (collectionId: string, updatedCollectionObj: CollectionObj) => {
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
    const collectionObj = payload?.data?.updateCollectionObj as CollectionObj;
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
    const collectionObj = payload?.data?.deleteCollectionObj as CollectionObj;
    return collectionObj;
  },
};
