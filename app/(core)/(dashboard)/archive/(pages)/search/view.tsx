import { SearchController } from './view/main';
import { SearchBar } from './view/search-bar/main';
import { SearchContextObj } from './page';
import { SearchResults } from './view/results/main';
import { SearchResult } from './view/results/element/main';
import SearchBarInput from './view/search-bar/input/main';
import { SearchBarButton } from './view/search-bar/button/main';
import { useContext } from 'react';

export function SearchView() {
  const { searchResults, searchResourceHandler } = useContext(SearchContextObj);

  return (
    <SearchController>
      <SearchBar>
        <SearchBarInput
          onChange={(e) => searchResourceHandler.updateQuery(e.target.value)}
        />
        <SearchBarButton onClick={() => searchResourceHandler.searchQuery()} />
      </SearchBar>
      <SearchResults>
        {searchResults.map((result, index) => (
          <SearchResult result={result} index={index} key={result.id}/>
        ))}
      </SearchResults>
    </SearchController>
  );
}
