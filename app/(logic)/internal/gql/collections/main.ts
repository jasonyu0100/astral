import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { CollectionObj } from '@/(logic)/internal/model/gallery/collection/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import {
  ResourceObj,
  ResourceVariant,
} from '@/(logic)/internal/model/resource/main';
import { createCollectionObj, createResourceObj } from '@/graphql/mutations';
import {
  getCollectionObj,
  listCollectionObjs,
  listResourceObjs,
} from '@/graphql/queries';

export interface CollectionGqlHelper {
  queryGetCollection: (id: string) => Promise<CollectionObj>;
  queryCollectionResources: (collectionId: string) => Promise<ResourceObj[]>;
  queryListCollections: (galleryId: string) => Promise<CollectionObj[]>;
  queryCreateCollection: (
    galleryId: string,
    title: string,
    description: string,
  ) => Promise<CollectionObj>;
  queryCreateCollectionResources: (
    userId: string,
    collection: CollectionObj,
    files: FileObj[],
  ) => Promise<ResourceObj[]>;
}

export const gqlHelper = {
  queryGetCollection: async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getCollectionObj,
      variables: {
        id: id,
      },
    });

    const collection = payload?.data?.getCollectionObj as CollectionObj;
    return collection;
  },
  queryCollectionResources: async (collectionId: string) => {
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
    const resources = payload?.data?.listResourceObjs?.items as ResourceObj[];
    return resources;
  },
  queryListCollections: async (galleryId: string) => {
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
    const collections =
      (payload?.data?.listCollectionObjs?.items as CollectionObj[]) || [];
    return collections;
  },
  queryCreateCollection: async (
    galleryId: string,
    title: string,
    description: string,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createCollectionObj,
      variables: {
        input: {
          title: title,
          galleryId: galleryId,
          description: description,
        },
      },
    });
    const collection = payload?.data?.createCollectionObj as CollectionObj;
    return collection;
  },
  queryCreateCollectionResources: async (
    userId: string,
    collection: CollectionObj,
    files: FileObj[],
  ) => {
    const resources = [];
    for (let file of files) {
      const payload = await amplifyClient.graphql({
        query: createResourceObj,
        variables: {
          input: {
            title: file.title || '',
            description: file.title || '',
            collectionId: collection.id,
            file: file,
            variant: ResourceVariant.FILE,
            userId: userId,
          },
        },
      });
      const resource = payload?.data?.createResourceObj as ResourceObj;
      resources.push(resource);
    }
    return resources;
  },
};
