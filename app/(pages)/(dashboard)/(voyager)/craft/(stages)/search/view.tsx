import { SearchController } from "./search-epic/main";
import { SearchBar } from "./search-epic/search-bar/main";
import { SearchWrapper } from "./search-epic/wrapper/main";
import { CraftSearchViewProps } from "./page";
import { SearchResults } from "./search-epic/results/main";
import { SearchResult } from "./search-epic/results/element/main";

export function CraftSearchView({
  results,
  searchHandler,
}: CraftSearchViewProps) {
  return (
    <SearchWrapper>
      <SearchController>
        <SearchBar
          onChange={(e) => searchHandler.searchQuery(e.target.value)}
        />
        <SearchResults>
          {results.map((file) => (
            <SearchResult src={file.src} />
          ))}
        </SearchResults>
      </SearchController>
    </SearchWrapper>
  );
}
