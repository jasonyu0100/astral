import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import {
  ResourceObj,
  ResourceVariant,
} from '@/(logic)/internal/data/infra/model/resource/main';
import { createResourceObj } from '@/graphql/mutations';
import { listResourceObjs } from '@/graphql/queries';

export interface ResourcesGqlHelper {
  queryListCollectionResources: (
    collectionId: string,
  ) => Promise<ResourceObj[]>;
  queryCreateFileResource: (
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    file: FileObj,
  ) => Promise<ResourceObj>;
  queryListUserResources: (userId: string) => Promise<ResourceObj[]>;
}

export const gqlHelper = {
  queryListResources: async (collectionId: string) => {
    const payload = await amplifyClient.graphql({
      query: listResourceObjs,
      variables: {
        filter: {
          collectionId: {
            eq: collectionId,
          },
        },
      },
    });

    const resources =
      (payload?.data.listResourceObjs?.items as ResourceObj[]) || [];
    return resources;
  },
  queryListUserResources: async (userId: string) => {
    const payload = await amplifyClient.graphql({
      query: listResourceObjs,
      variables: {
        filter: {
          userId: {
            eq: userId,
          },
        },
      },
    });

    const resources =
      (payload?.data.listResourceObjs?.items as ResourceObj[]) || [];
    return resources;
  },
  queryCreateFileResource: async (
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    file: FileObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createResourceObj,
      variables: {
        input: {
          title: title,
          description: description,
          collectionId: collectionId,
          file: file,
          variant: ResourceVariant.FILE,
          userId: userId,
        },
      },
    });
    const resource = payload?.data?.createResourceObj as ResourceObj;
    return resource;
  },
};
