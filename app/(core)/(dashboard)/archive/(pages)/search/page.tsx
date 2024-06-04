'use client';
import { createContext } from 'react';
import { SearchView } from './view';
import { ResourceObj } from '@/(model)/media/resource/main';
import isVerseAuth from '@/(utils)/isAuth';
import {
  SearchActions,
  useSearchResource,
} from '@/(controller)/explorer/resources/search/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';

export interface SearchViewProps {
  searchResults: ResourceObj[];
  resources: ResourceObj[];
  searchResourceHandler: SearchActions;
}

export const SearchContextObj = createContext({} as SearchViewProps);

function Page() {
    const user = useGlobalUser((state) => state.user);
  const { searchResults, resources, searchActions: _searchResourceHandler } =
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

export default isVerseAuth(Page);
