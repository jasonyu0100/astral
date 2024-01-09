"use client";
import { useState } from "react";
import { craftModel } from "../../model/main";
import { CraftExploreView } from "./view";
import { CraftExploreElement } from "../../model/explore/element/type";

interface SearchHandler {
  searchQuery: (query: string) => void;
  updateResult: (i: number, data: any) => void;
}

export interface CraftSearchViewProps {
  searchHandler: SearchHandler;
  results: CraftExploreElement[];
}

export default function Page() {
  const [results, changeResults] = useState(craftModel.explore.results.example);

  const searchHandler : SearchHandler = {
    searchQuery: (query: string) => {
      if (query === "") {
        changeResults(craftModel.explore.results.example);
      } else {
        changeResults([]);
      }
    },
    updateResult: (i: number, data: any) => {
      changeResults((prev: any[]) =>
        prev.map((o: any, j: number) => (j === i ? { ...o, ...data } : o))
      );
    }
  }

  return <CraftExploreView results={results} searchHandler={searchHandler} />;
}
