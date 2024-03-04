import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { ResourceObj } from '@/(logic)/internal/data/infra/model/resource/main';
import { useState, useEffect } from 'react';
import { gqlHelper } from '../../../gql/resources/main';

interface useCollectionResourcesInterface {
  resourceId: string;
  resource: ResourceObj | undefined;
  resources: ResourceObj[];
  searchResults: ResourceObj[];
  _resourceHandler: CollectionResourcesHandler;
}

export interface CollectionResourcesHandler {
  queryListResources: (id: string) => Promise<ResourceObj[]>;
  queryCreateFileResource: (
    name: string,
    description: string,
    file: FileObj,
  ) => Promise<ResourceObj>;
  searchResources: (query: string) => ResourceObj[];
  updateResource: (resource: ResourceObj) => ResourceObj;
}

export const useCollectionResources = (
  collectionId: string,
  userId: string,
): useCollectionResourcesInterface => {
  const [resources, changeResources] = useState<ResourceObj[]>([]);
  const [resourceId, changeResourceId] = useState<string>('');
  const [searchResults, changeSearchResults] = useState<ResourceObj[]>([]);
  const resource = resources.find((resource) => resource.id === resourceId);

  useEffect(() => {
    if (!collectionId) {
      changeResources([]);
      return;
    }
    _resourceHandler.queryListResources(collectionId);
  }, [collectionId]);

  useEffect(() => {
    changeSearchResults(resources);
  }, [resources]);

  const _resourceHandler: CollectionResourcesHandler = {
    queryListResources: async (collectionId: string) => {
      const resources = await gqlHelper.queryListResources(collectionId);
      changeResources(resources);
      changeResourceId(resources[0]?.id || '');
      return resources;
    },
    queryCreateFileResource: async (
      name: string,
      description: string,
      file: FileObj,
    ) => {
      const resource = await gqlHelper.queryCreateFileResource(
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
    updateResource: (resource: ResourceObj) => {
      changeResources((prev) =>
        prev.map((r) => (r.id === resource.id ? resource : r)),
      );
      return resource;
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
