"use client";
import { useState } from "react";
import { CraftExploreView } from "./view";
import { ExploreElementObj } from "../../../../tables/resource/explore/element/main";
import { resourceTable } from "@/(pages)/(cosmos)/tables/resource/table";
import { ResourceObj } from "@/(pages)/(cosmos)/tables/resource/main";

interface SearchHandler {
  searchQuery: (query: string) => void;
  updateResult: (i: number, data: any) => void;
}
export interface CraftSearchViewProps {
  searchHandler: SearchHandler;
  results: ExploreElementObj[];
}

export default function Page() {
  const [results, changeResults] = useState(resourceTable.explore.example.results);

  const searchHandler : SearchHandler = {
    searchQuery: (query: string) => {
      if (query === "") {
        changeResults(resourceTable.explore.example.results);
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
