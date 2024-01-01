"use client";

import SearchController from "./search-epic/main";
import SearchBar from "./search-epic/search-bar/main";
import SearchResults from "./search-epic/results/main";
import StoreMasonryMedia from "./search-epic/results/media/main";
import CartSidebar from "../../cart-sidebar-epic/main";
import { useState } from "react";
import SearchWrapper from "./search-epic/wrapper/main";
import { craftModel } from "../../model/main";

export default function Page() {
  const [cartActive, changeCartActive] = useState(true);

  return (
    <SearchWrapper>
      <SearchController>
        <SearchBar />
        <SearchResults>
          {craftModel.search.results.example.map((craftFile) => (
            <StoreMasonryMedia src={craftFile.src} />
          ))}
        </SearchResults>
      </SearchController>
      {cartActive && <CartSidebar />}
    </SearchWrapper>
  );
}
