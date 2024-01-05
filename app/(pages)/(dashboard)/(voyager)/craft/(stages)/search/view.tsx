import { SearchController } from "./search-epic/main";
import { SearchBar } from "./search-epic/search-bar/main";
import { SearchResults } from "./search-epic/results/main";
import { StoreMasonryMedia } from "./search-epic/results/media/main";
import { SearchWrapper } from "./search-epic/wrapper/main";
import { CraftFile } from "../../model/drive/section/folder/file/main";
import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";
import { Divider } from "@/(pages)/(common)/divider/main";

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
      <Layer
        backgroundStyle={backgroundStyles["glass-5"]}
        sizeStyle="w-[500px] h-full"
      >
        {/* <div className="flex flex-col space-y-[2rem] w-full p-[20px]">
          <div className="w-full h-[300px] p-[20px] bg-white">
            <img
              className="object-fit w-full h-full"
              src="/voyager/craft/themes/symbols/land.png"
            />
          </div>
          <div className="w-full text-white text-base font-normal leading-normal">
            Lorem ipsum dolor sit amet consectetur. Non viverra turpis proin
            molestie enim eros. Dolor duis fringilla id leo leo duis. Tortor dui
            quis sagittis nibh blandit. Commodo nibh adipiscing et phasellus.
            Nunc egestas pulvinar dui sapien praesent pretium eu. Purus amet sed
            sed lorem mauris aliquet donec sit in. Consequat eleifend ut quam
            ut. Tristique at imperdiet eget dui netus facilisis massa urna.
            Fermentum leo nascetur at proin donec morbi dui. Quisque consectetur
            varius tempor elit. Est.
          </div>
        </div> */}
      </Layer>
    </SearchWrapper>
  );
}
