import { CollectionResourceObj } from '@/(model)/archive/resource/main';
import { useState, useEffect, createContext } from 'react';
import { resourcesGqlHelper } from '../../../../(db)/(archive-db)/resources/main';

interface SearchResourcesHandler {
  resourceId: string;
  resource: CollectionResourceObj | undefined;
  resources: CollectionResourceObj[];
  searchResults: CollectionResourceObj[];
  searchActions: SearchActions;
}

export interface SearchActions {
  listResources: (id: string) => Promise<CollectionResourceObj[]>;
  updateQuery: (query: string) => void;
  searchQuery: () => CollectionResourceObj[];
}

export const SearchResourcesHandlerContext = createContext({} as SearchResourcesHandler);

export const useSearchResource = (
  userId: string,
): SearchResourcesHandler => {
  const [resources, changeResources] = useState<CollectionResourceObj[]>([]);
  const [resourceId, changeResourceId] = useState<string>('');
  const [searchResults, changeSearchResults] = useState<CollectionResourceObj[]>([]);
  const [query, changeQuery] = useState('');
  const resource = resources.find((resource) => resource.id === resourceId);

  useEffect(() => {
    if (!userId) {
      changeResources([]);
      return;
    }
    searchActions.listResources(userId);
  }, [userId]);

  useEffect(() => {
    changeSearchResults(resources);
  }, [resources]);

  const searchActions: SearchActions = {
    listResources: async (userId: string) => {
      const resources = await resourcesGqlHelper.listFromUser(userId);
      changeResources(resources);
      changeResourceId(resources[0]?.id || '');
      return resources;
    },
    updateQuery: (query: string) => {
      changeQuery(query);
    },
    searchQuery: () => {
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

  return {
    resource,
    resourceId,
    searchResults,
    resources,
    searchActions,
  };
};
