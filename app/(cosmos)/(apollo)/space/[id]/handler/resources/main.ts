import { amplifyClient } from '@/client';
import { createResourceObj } from '@/graphql/mutations';
import { listResourceObjs } from '@/graphql/queries';
import { FileObj } from '@/tables/file/main';
import { ResourceObj } from '@/tables/resource/main';
import { useState, useEffect } from 'react';

interface useResourcesInterface {
  resourceId: string;
  resource: ResourceObj | undefined;
  resources: ResourceObj[];
  searchResults: ResourceObj[];
  _resourceHandler: ResourceHandler;
}

export interface ResourceHandler {
  queryListResources: (id: string) => Promise<ResourceObj[]>;
  addResource: (
    name: string,
    description: string,
    file: FileObj,
  ) => Promise<void>;
  searchResources: (query: string) => ResourceObj[]
}

export const useResources = (collectionId: string): useResourcesInterface => {
  const [resources, changeResources] = useState<ResourceObj[]>([]);
  const [resourceId, changeResourceId] = useState<string>('');
  const [searchResults, changeSearchResults] = useState<ResourceObj[]>([]);
  const resource = resources.find((resource) => resource.id === resourceId);

  useEffect(() => {
    if (!collectionId) {
      changeResources([])
      return
    };
    _resourceHandler.queryListResources(collectionId);
  }, [collectionId]);

  useEffect(() => {
    changeSearchResults(resources);
  }, [resources])

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
      changeResourceId(resources[0]?.id || '')
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
      changeResourceId(resource.id);
    },
    searchResources: (query: string) => {
      if (query === '') {
        changeSearchResults(resources);
        return resources;
      }
      const results = resources.filter((resource) => {
        const regex = new RegExp(query, 'i');
        return regex.test(resource.name);
      });
      changeSearchResults(results);
      return results;
    },
  };

  return {
    resource,
    resourceId,
    searchResults,
    resources,
    _resourceHandler,
  };
};
