import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import {
  ResourceObj,
  ResourceVariant,
} from '@/(logic)/internal/model/resource/main';
import { gqlArgs } from '@/(logic)/utils/clean';
import { createResourceObj, deleteResourceObj, updateResourceObj } from '@/graphql/mutations';
import { listResourceObjs } from '@/graphql/queries';

export interface ResourcesGqlHelper {
  gqlListCollectionResources: (collectionId: string) => Promise<ResourceObj[]>;
  gqlCreateFileResource: (
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    file: FileObj,
  ) => Promise<ResourceObj>;
  gqlListUserResources: (userId: string) => Promise<ResourceObj[]>;
  gqlUpdateResource: (resourceId: string, updatedResourceObj: ResourceObj) => Promise<ResourceObj>
  gqlDeleteResource: (resourceId: string) => Promise<ResourceObj>;
}

export const gqlHelper: ResourcesGqlHelper = {
  gqlListCollectionResources: async (collectionId: string) => {
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

    const resourceObjs =
      (payload?.data.listResourceObjs?.items as ResourceObj[]) || [];
    return resourceObjs;
  },
  gqlListUserResources: async (userId: string) => {
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

    const resourceObjs =
      (payload?.data.listResourceObjs?.items as ResourceObj[]) || [];
    return resourceObjs;
  },
  gqlCreateFileResource: async (
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    file: FileObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createResourceObj,
      variables: {
        input: gqlArgs({
          title: title,
          description: description,
          collectionId: collectionId,
          file: file,
          variant: ResourceVariant.FILE,
          userId: userId,
        }),
      },
    });
    const resourceObj = payload?.data?.createResourceObj as ResourceObj;
    return resourceObj;
  },
  gqlUpdateResource: async (
    resourceId: string,
    updatedResourceObj: ResourceObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: updateResourceObj,
      variables: {
        input: gqlArgs({
          id: resourceId,
          title: updatedResourceObj.title,
          description: updatedResourceObj.description,
          file: updatedResourceObj.file,
          log: updatedResourceObj.log,
          link: updatedResourceObj.link,
          note: updatedResourceObj.note,
        }),
      },
    });
    const resourceObj = payload?.data?.updateResourceObj as ResourceObj;
    return resourceObj;
  },
  gqlDeleteResource: async (resourceId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteResourceObj,
      variables: {
        input: {
          id: resourceId,
        },
      },
    });
    const resourceObj = payload?.data?.deleteResourceObj as ResourceObj;
    return resourceObj;
  }
};
