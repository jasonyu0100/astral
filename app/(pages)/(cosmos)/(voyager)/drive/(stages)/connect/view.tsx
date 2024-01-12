import { ExploreController } from "./connect-epic/main";
import { SearchBar } from "./connect-epic/search-bar/main";
import { SearchWrapper } from "./connect-epic/wrapper/main";
import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";
import { useRef } from "react";
import { ResultElement } from "./connect-epic/results/element/main";
import { motion } from "framer-motion";
import { CraftSearchViewProps } from "./page";
import { ElementLinks } from "./connect-epic/results/links/main";

export function ExploreView({
  results,
  searchHandler,
}: CraftSearchViewProps) {
  const constraintsRef = useRef(null);

  return (
    <SearchWrapper>
      <ExploreController>
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
      </ExploreController>
    </SearchWrapper>
  );
}
