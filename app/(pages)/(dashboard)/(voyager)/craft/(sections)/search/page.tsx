"use client";

import CraftStoreController from "./(common)/controller/main";
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

export default function Page() {
  return (
    <Layer
      sizeStyle="w-full h-full"
      containerStyle={containerStyles.row}
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
    >
      <CraftStoreController>
        <StoreSearch />
        <CraftStoreMasonry>
          {craftSearch.results.map((craftFile) => (
            <StoreMasonryMedia src={craftFile.src} />
          ))}
        </CraftStoreMasonry>
      </CraftStoreController>
      <CraftCart />
    </Layer>
  );
}
