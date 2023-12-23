"use client";

import SearchController from "./search-epic/controller/main";
import StoreSearch from "./search-epic/controller/search/main";
import CraftStoreMasonry from "./search-epic/masonry/main";
import StoreMasonryMedia from "./search-epic/masonry/media/main";
import CraftCart from "../../cart-epic/main";
import Layer from "@/(pages)/(common)/layer/main";
import {
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { useState } from "react";
import { craftSearch } from "../../data/main";
import Image from "next/image";

export default function Page() {
  const [cartActive, changeCartActive] = useState(true);

  return (
    <Layer sizeStyle="w-full h-full" containerStyle={containerStyles.row}>
      <div className="w-full h-full">
        <SearchController>
          <StoreSearch />
          <CraftStoreMasonry>
            {craftSearch.results.map((craftFile) => (
              <StoreMasonryMedia src={craftFile.src} />
            ))}
          </CraftStoreMasonry>
        </SearchController>
      </div>
      {cartActive && <CraftCart />}
    </Layer>
  );
}
