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
      </SearchController>
      <Layer
        backgroundStyle={backgroundStyles["glass-5"]}
        sizeStyle="w-[500px] h-full"
      >
      </Layer>
    </SearchWrapper>
  );
}
