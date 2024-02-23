import { amplifyClient } from '@/(logic)/aws/graphql/main';
import { createResourceObj } from '@/graphql/mutations';
import { listResourceObjs } from '@/graphql/queries';
import { useGlobalUser } from '@/(logic)/store/user/main';
import { FileObj } from '@/(logic)/model/resource/file/main';
import { ResourceObj, ResourceVariant } from '@/(logic)/model/resource/main';
import { useState, useEffect } from 'react';

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
): useCollectionResourcesInterface => {
  const user = useGlobalUser((state) => state.user);
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

  const gqlHelper = {
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
    queryCreateFileResource: async (
      title: string,
      description: string,
      file: FileObj,
    ) => {
      const payload = await amplifyClient.graphql({
        query: createResourceObj,
        variables: {
          input: {
            title: title,
            description,
            collectionId,
            file,
            variant: ResourceVariant.FILE,
            userId: user?.id,
          },
        },
      });
      const resource = payload?.data?.createResourceObj as ResourceObj;
      return resource;
    },
  };

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
