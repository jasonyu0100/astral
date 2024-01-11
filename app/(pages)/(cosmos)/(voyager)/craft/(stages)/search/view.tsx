import { SearchController } from "./search-epic/main";
import { SearchBar } from "./search-epic/search-bar/main";
import { CraftSearchViewProps } from "./page";
import { SearchResults } from "./search-epic/results/main";
import { SearchResult } from "./search-epic/results/element/main";
import SearchBarInput from "./search-epic/search-bar/input/main";
import { SearchBarButton } from "./search-epic/search-bar/button/main";

export function CraftSearchView({
  results,
  searchHandler,
}: CraftSearchViewProps) {
  return (
    <SearchController>
      <SearchBar>
        <SearchBarInput
          onChange={(e) => searchHandler.updateQuery(e.target.value)}
        />
        <SearchBarButton
          onClick={() => searchHandler.searchQuery()}
        />
      </SearchBar>
      <SearchResults>
        {results.map((result, index) => (
          <SearchResult result={result} index={index} />
        ))}
      </SearchResults>
    </SearchController>
  );
}
