import { SearchController } from "./search-epic/main";
import { SearchBar } from "./search-epic/search-bar/main";
import { SearchResults } from "./search-epic/results/main";
import { StoreMasonryMedia } from "./search-epic/results/media/main";
import { SearchWrapper } from "./search-epic/wrapper/main";
import { CraftFile } from "../../model/drive/section/folder/file/main";

interface CraftSearchViewProps {
  results: CraftFile[];
  updateSearch: (query: string) => void;
}

export function CraftSearchView({
  results,
  updateSearch,
}: CraftSearchViewProps) {
  return (
    <SearchWrapper>
      <SearchController>
        <SearchBar onChange={(e) => updateSearch(e.target.value)} />
        <SearchResults>
          {results.map((craftFile) => (
            <StoreMasonryMedia src={craftFile.src} />
          ))}
        </SearchResults>
      </SearchController>
    </SearchWrapper>
  );
}
