"use client";

import SearchController from "./search-epic/main";
import SearchBar from "./search-epic/search-bar/main";
import SearchResults from "./search-epic/results/main";
import StoreMasonryMedia from "./search-epic/results/media/main";
import CartSidebar from "../../cart-sidebar-epic/main";
import { useState } from "react";
import { craftSearch } from "../../data/main";
import SearchWrapper from "./search-epic/wrapper/main";

export default function Page() {
  const [cartActive, changeCartActive] = useState(true);

  return (
    <SearchWrapper>
      <SearchController>
        <SearchBar />
        <SearchResults>
          {craftSearch.results.map((craftFile) => (
            <StoreMasonryMedia src={craftFile.src} />
          ))}
        </SearchResults>
      </SearchController>
      {cartActive && <CartSidebar />}
    </SearchWrapper>
  );
}
