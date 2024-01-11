"use client";
import { useState } from "react";
import { ExploreView } from "./view";
import { resourceTable } from "@/tables/resource/table";
import { ResourceObj } from "@/tables/resource/main";
import isAuth from "@/utils/isAuth";
import { ExploreElementObj } from "@/tables/resource/explore/element/main";

interface SearchHandler {
  searchQuery: (query: string) => void;
  updateResult: (i: number, data: any) => void;
}
export interface CraftSearchViewProps {
  searchHandler: SearchHandler;
  results: ExploreElementObj[];
}

function Page() {
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

  return <ExploreView results={results} searchHandler={searchHandler} />;
}

export default isAuth(Page);