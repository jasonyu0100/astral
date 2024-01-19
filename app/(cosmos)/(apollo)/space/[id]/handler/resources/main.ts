import { amplifyClient } from '@/client';
import { createResourceObj } from '@/graphql/mutations';
import { listResourceObjs } from '@/graphql/queries';
import { FileObj } from '@/tables/file/main';
import { ResourceObj } from '@/tables/resource/main';
import { useState, useEffect } from 'react';

interface useResourcesInterface {
  resources: ResourceObj[];
  _resourceHandler: ResourceHandler;
}

export interface ResourceHandler {
  queryListResources: (id: string) => Promise<ResourceObj[]>;
  addResource: (
    name: string,
    description: string,
    file: FileObj,
  ) => Promise<void>;
}

export const useResources = (collectionId: string): useResourcesInterface => {
  const [resources, changeResources] = useState<ResourceObj[]>([]);

  useEffect(() => {
    if (!collectionId) return;
    _resourceHandler.queryListResources(collectionId);
  }, [collectionId]);

  const _resourceHandler: ResourceHandler = {
    queryListResources: async (id: string) => {
      const payload = await amplifyClient.graphql({
        query: listResourceObjs,
        variables: {
          filter: {
            collectionId: {
              eq: id,
            },
          },
        },
      });

      const resources = payload?.data.listResourceObjs?.items as ResourceObj[];
      changeResources(resources);
      return resources;
    },
    addResource: async (name: string, description: string, file: FileObj) => {
      const payload = await amplifyClient.graphql({
        query: createResourceObj,
        variables: {
          input: {
            name,
            description,
            collectionId,
            file,
          },
        },
      });
      const resource = payload?.data?.createResourceObj as ResourceObj;

      changeResources((prev) => [resource, ...prev]);
    },
  };

  return {
    resources,
    _resourceHandler,
  };
};
