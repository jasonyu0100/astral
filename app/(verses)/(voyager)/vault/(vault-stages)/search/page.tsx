'use client';
import { createContext } from 'react';
import { SearchView } from './view';
import { ResourceObj } from '@/(ouros)/(model)/resource/main';
import insideCosmos from '@/utils/isAuth';
import {
  SearchResourceHandler,
  useSearchResource,
} from '@/(verses)/(handler)/explorer/search-resources/main';
import { useGlobalUser } from '@/(store)/user/main';

export interface SearchViewProps {
  searchResults: ResourceObj[];
  resources: ResourceObj[];
  searchResourceHandler: SearchResourceHandler;
}

export const SearchContextObj = createContext({} as SearchViewProps);

function Page() {
    const user = useGlobalUser((state) => state.user);
  const { searchResults, resources, _searchResourceHandler } =
    useSearchResource(user.id);

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
