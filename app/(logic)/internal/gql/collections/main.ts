import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { CollectionObj } from '@/(logic)/internal/model/gallery/collection/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import {
  ResourceObj,
  ResourceVariant,
} from '@/(logic)/internal/model/resource/main';
import { gqlArgs } from '@/(logic)/utils/clean';
import {
  createCollectionObj,
  createResourceObj,
  deleteCollectionObj,
  updateCollectionObj,
} from '@/graphql/mutations';
import {
  getCollectionObj,
  listCollectionObjs,
  listResourceObjs,
} from '@/graphql/queries';

export interface CollectionGqlHelper {
  gqlGetCollection: (id: string) => Promise<CollectionObj>;
  gqlListCollectionResources: (collectionId: string) => Promise<ResourceObj[]>;
  gqlListCollections: (galleryId: string) => Promise<CollectionObj[]>;
  gqlCreateCollection: (
    galleryId: string,
    title: string,
    description: string,
  ) => Promise<CollectionObj>;
  gqlCreateCollectionResources: (
    userId: string,
    collection: CollectionObj,
    files: FileObj[],
  ) => Promise<ResourceObj[]>;
  gqlUpdateCollection: (
    collectionId: string,
    updatedCollectionObj: CollectionObj,
  ) => Promise<CollectionObj>;
  gqlDeleteCollection: (collectionId: string) => Promise<CollectionObj>;
}

export const gqlHelper: CollectionGqlHelper = {
  gqlGetCollection: async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getCollectionObj,
      variables: {
        id: id,
      },
    });

    const collectionObj = payload?.data?.getCollectionObj as CollectionObj;
    return collectionObj;
  },
  gqlListCollectionResources: async (collectionId: string) => {
    const payload = await amplifyClient.graphql({
      query: listResourceObjs,
      variables: {
        filter: {
          userId: {
            eq: collectionId,
          },
        },
      },
    });
    const resourceObjs = payload?.data?.listResourceObjs?.items as ResourceObj[];
    return resourceObjs;
  },
  gqlListCollections: async (galleryId: string) => {
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
  gqlCreateCollection: async (
    galleryId: string,
    title: string,
    description: string,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createCollectionObj,
      variables: {
        input: gqlArgs({
          title: title,
          galleryId: galleryId,
          description: description,
        }),
      },
    });
    const collectionObj = payload?.data?.createCollectionObj as CollectionObj;
    return collectionObj;
  },
  gqlCreateCollectionResources: async (
    userId: string,
    collection: CollectionObj,
    files: FileObj[],
  ) => {
    const resourceObjs = [];
    for (let file of files) {
      const payload = await amplifyClient.graphql({
        query: createResourceObj,
        variables: {
          input: gqlArgs({
            title: file.title,
            description: file.title,
            collectionId: collection.id,
            file: file,
            variant: ResourceVariant.FILE,
            userId: userId,
          }),
        },
      });
      const resourceObj = payload?.data?.createResourceObj as ResourceObj;
      resourceObjs.push(resourceObj);
    }
    return resourceObjs;
  },
  gqlUpdateCollection: async (
    collectionId: string,
    updatedCollectionObj: CollectionObj,
  ) => {
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
  gqlDeleteCollection: async (collectionId: string) => {
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
