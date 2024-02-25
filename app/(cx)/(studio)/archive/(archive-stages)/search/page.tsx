'use client';
import { createContext } from 'react';
import { SearchView } from './view';
import { ResourceObj } from '@/(logic)/internal/data/infra/model/resource/main';
import insideCosmos from '@/(logic)/utils/isAuth';
import {
  SearchResourceHandler,
  useSearchResource,
} from '@/(logic)/internal/handler/explorer/search-resources/main';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';

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
