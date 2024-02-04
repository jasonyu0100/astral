import { amplifyClient } from '@/client';
import { listResourceObjs } from '@/graphql/queries';
import { ResourceObj } from '@/tables/resource/main';
import { useState, useEffect } from 'react';

interface useSearchResourcesInterface {
  resourceId: string;
  resource: ResourceObj | undefined;
  resources: ResourceObj[];
  searchResults: ResourceObj[];
  _searchResourceHandler: SearchResourceHandler;
}

export interface SearchResourceHandler {
  queryListResources: (id: string) => Promise<ResourceObj[]>;
  updateQuery: (query: string) => void;
  searchQuery: () => ResourceObj[];
}

export const useSearchResource = (userId: string): useSearchResourcesInterface => {
  const [resources, changeResources] = useState<ResourceObj[]>([]);
  const [resourceId, changeResourceId] = useState<string>('');
  const [searchResults, changeSearchResults] = useState<ResourceObj[]>([]);
  const [query, changeQuery] = useState("")
  const resource = resources.find((resource) => resource.id === resourceId);

  useEffect(() => {
    if (!userId) {
      changeResources([])
      return
    };
    _searchResourceHandler.queryListResources(userId);
  }, [userId]);

  useEffect(() => {
    changeSearchResults(resources);
  }, [resources])

  const _searchResourceHandler: SearchResourceHandler = {
    queryListResources: async (id: string) => {
      const payload = await amplifyClient.graphql({
        query: listResourceObjs,
        variables: {
          filter: {
            userId: {
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
    updateQuery: (query: string) => {
        changeQuery(query)
    },
    searchQuery: () => {
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
    _searchResourceHandler,
  };
};
