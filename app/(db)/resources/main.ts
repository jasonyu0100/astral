import { amplifyClient } from '@/(api)/aws/graphql/main';
import { FileObj } from '@/(model)/media/resource/file/main';
import {
  ResourceObj,
  ResourceVariant,
} from '@/(model)/media/resource/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createResourceObj,
  deleteResourceObj,
  updateResourceObj,
} from '@/graphql/mutations';
import { listResourceObjs } from '@/graphql/queries';
import { CollectionObj } from '../../(model)/media/collection/main';

export interface ResourcesGqlHelper {
  listFromCollection: (collectionId: string) => Promise<ResourceObj[]>;
  listFromUser: (userId: string) => Promise<ResourceObj[]>;
  createFromFile: (
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    file: FileObj,
  ) => Promise<ResourceObj>;
  createFromMultipleFiles: (
    userId: string,
    collectionId: string,
    files: FileObj[],
  ) => Promise<ResourceObj[]>;
  update: (
    resourceId: string,
    updatedResourceObj: ResourceObj,
  ) => Promise<ResourceObj>;
  delete: (resourceId: string) => Promise<ResourceObj>;
}

export const resourcesGqlHelper: ResourcesGqlHelper = {
  listFromCollection: async (collectionId: string) => {
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
  listFromUser: async (userId: string) => {
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
  createFromFile: async (
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
  createFromMultipleFiles: async (
    userId: string,
    collectionId: string,
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
            collectionId: collectionId,
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
  update: async (resourceId: string, updatedResourceObj: ResourceObj) => {
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
  delete: async (resourceId: string) => {
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
  },
};
