'use client';
import { createContext } from 'react';
import { SearchView } from './view';
import { ResourceObj } from '@/tables/resource/main';
import insideCosmos from '@/utils/isAuth';
import { SearchResourceHandler, useSearchResource } from '@/(cosmos)/handler/search-resources/main';
import { useGlobalUser } from '@/state/main';

export interface SearchViewProps {
  searchResults: ResourceObj[];
  resources: ResourceObj[];
  searchResourceHandler: SearchResourceHandler;
}

export const SearchContextObj = createContext({} as SearchViewProps);

function Page() {
  const [state, actions] = useGlobalUser();
  const {
    searchResults,
    resources,
    _searchResourceHandler,
  } = useSearchResource(state.user.id);

  const context = {
    searchResults,
    resources,
    searchResourceHandler: _searchResourceHandler,
  };

  return (
    <SearchContextObj.Provider value={context}>
      <SearchView />
    </SearchContextObj.Provider>
  );
}

export default insideCosmos(Page);
