import { SearchController } from './search-epic/main';
import { SearchBar } from './search-epic/search-bar/main';
import { SearchContextObj } from './page';
import { SearchResults } from './search-epic/results/main';
import { SearchResult } from './search-epic/results/element/main';
import SearchBarInput from './search-epic/search-bar/input/main';
import { SearchBarButton } from './search-epic/search-bar/button/main';
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
          <SearchResult result={result} index={index} />
        ))}
      </SearchResults>
    </SearchController>
  );
}
