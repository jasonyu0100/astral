"use client";

import SearchController from "./(common)/controller/main";
import StoreSearchFilter from "./(common)/controller/search/filter/main";
import StoreSearch from "./(common)/controller/search/main";
import CraftStoreMasonry from "./(common)/masonry/main";
import StoreMasonryMedia from "./(common)/masonry/media/main";
import CraftCart from "../../(common)/cart/main";
import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
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
