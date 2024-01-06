import { SearchController } from "./explore-epic/main";
import { SearchBar } from "./explore-epic/search-bar/main";
import { SearchWrapper } from "./explore-epic/wrapper/main";
import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";
import { useRef } from "react";
import { ResultElement } from "./explore-epic/results/element/main";
import { motion } from "framer-motion";
import { CraftSearchViewProps } from "./page";
import { ElementLinks } from "./explore-epic/results/links/main";

export function CraftExploreView({
  results,
  searchHandler,
}: CraftSearchViewProps) {
  const constraintsRef = useRef(null);

  return (
    <SearchWrapper>
      <SearchController>
        <SearchBar
          onChange={(e) => searchHandler.searchQuery(e.target.value)}
        />
        <div className="w-full relative" style={{ height: "100%" }}>
          <ElementLinks elements={results}/>
          <motion.div
            className="absolute top-0 left- 0 w-full h-full"
            ref={constraintsRef}
          >
            {results.map((result, i) => (
              <ResultElement
                result={result}
                constraintsRef={constraintsRef}
                updateStar={(data) => searchHandler.updateResult(i, data)}
              />
            ))}
          </motion.div>
        </div>
        {/* <SearchResults>
          {results.map((craftFile) => (
            <StoreMasonryMedia src={craftFile.src} />
          ))}
        </SearchResults> */}
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
