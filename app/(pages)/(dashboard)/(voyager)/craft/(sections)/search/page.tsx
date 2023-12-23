"use client";

import SearchController from "./search-epic/controller/main";
import StoreSearch from "./search-epic/controller/search/main";
import CraftStoreMasonry from "./search-epic/masonry/main";
import StoreMasonryMedia from "./search-epic/masonry/media/main";
import CraftCart from "../../cart-epic/main";
import { useState } from "react";
import { craftSearch } from "../../data/main";
import SearchWrapper from "./search-epic/wrapper/main";

export default function Page() {
  const [cartActive, changeCartActive] = useState(true);

  return (
    <SearchWrapper>
      <SearchController>
        <StoreSearch />
        <CraftStoreMasonry>
          {craftSearch.results.map((craftFile) => (
            <StoreMasonryMedia src={craftFile.src} />
          ))}
        </CraftStoreMasonry>
      </SearchController>
      {cartActive && <CraftCart />}
    </SearchWrapper>
  );
}
