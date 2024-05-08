import { FileObj } from '@/(types)/model/resource/file/main';
import { ResourceObj } from '@/(types)/model/resource/main';
import { useState, useEffect as useMemo, createContext } from 'react';
import { resourcesGqlHelper } from '../../../gql/resources/main';

interface ResourcesHandler {
  resourceId: string;
  resource: ResourceObj | undefined;
  resources: ResourceObj[];
  searchResults: ResourceObj[];
  resourceActions: ResourcesActions;
}

export interface ResourcesActions {
  listResources: (id: string) => Promise<ResourceObj[]>;
  createResourceFromFile: (
    name: string,
    description: string,
    file: FileObj,
  ) => Promise<ResourceObj>;
  updateResource: (
    resourceId: string,
    updatedResourceObj: ResourceObj,
  ) => Promise<ResourceObj>;
  searchResources: (query: string) => ResourceObj[];
  deleteResource: (resourceId: string) => Promise<ResourceObj>;
}

export const ResourcesHandlerContext = createContext({} as ResourcesHandler);

export const useResourcesHandler = (
  collectionId: string,
  userId: string,
): ResourcesHandler => {
  const [resources, changeResources] = useState<ResourceObj[]>([]);
  const [resourceId, changeResourceId] = useState<string>('');
  const [searchResults, changeSearchResults] = useState<ResourceObj[]>([]);
  const resource = resources.find((resource) => resource.id === resourceId);

  useMemo(() => {
    changeSearchResults(resources);
  }, [resources]);

  const resourceActions: ResourcesActions = {
    deleteResource: async (resourceId: string) => {
      const resource = await resourcesGqlHelper.delete(resourceId);
      changeResources((prev) => prev.filter((r) => r.id !== resourceId));
      return resource;
    },
    listResources: async (collectionId: string) => {
      const resources =
        await resourcesGqlHelper.listFromCollection(collectionId);
      changeResources(resources);
      changeResourceId(resources[0]?.id || '');
      return resources;
    },
    createResourceFromFile: async (
      name: string,
      description: string,
      file: FileObj,
    ) => {
      const resource = await resourcesGqlHelper.createFromFile(
        userId,
        collectionId,
        name,
        description,
        file,
      );
      changeResources((prev) => [resource, ...prev]);
      changeResourceId(resource.id);
      return resource;
    },
    updateResource: async (
      resourceId: string,
      updatedResourceObj: ResourceObj,
    ) => {
      const resource = await resourcesGqlHelper.update(
        resourceId,
        updatedResourceObj
      );
      changeResources((prev) =>
        prev.map((r) => (r.id === resource.id ? resource : r)),
      );
      return resource;
    },
    searchResources: (query: string) => {
      if (query === '') {
        changeSearchResults(resources);
        return resources;
      }
      const results = resources.filter((resource) => {
        const regex = new RegExp(query, 'i');
        return regex.test(resource.title);
      });
      changeSearchResults(results);
      return results;
    },
  };

  useMemo(() => {
    if (!collectionId) {
      changeResources([]);
      return;
    }
    resourceActions.listResources(collectionId);
  }, [collectionId]);

  return {
    resource,
    resourceId,
    searchResults,
    resources,
    resourceActions,
  };
};
