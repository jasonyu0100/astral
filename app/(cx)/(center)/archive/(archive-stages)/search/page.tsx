'use client';
import { createContext } from 'react';
import { SearchView } from './view';
import { ResourceObj } from '@/(lgx)/internal/model/resource/main';
import insideVerse from '@/(lgx)/utils/isAuth';
import {
  SearchActions,
  useSearchResource,
} from '@/(lgx)/internal/handler/explorer/resources/search/main';
import { useGlobalUser } from '@/(lgx)/internal/store/user/main';

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

export default insideVerse(Page);
