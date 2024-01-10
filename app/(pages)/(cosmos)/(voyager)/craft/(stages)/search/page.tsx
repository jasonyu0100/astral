"use client";
import { useState } from "react";
import { CraftSearchView } from "./view";
import { FileObj } from "../../../../tables/collection/file/main";
import { ResourceObj } from "@/(pages)/(cosmos)/tables/resource/main";
import { resourceTable } from "@/(pages)/(cosmos)/tables/resource/table";

interface SearchHandler {
  searchQuery: (query: string) => void;
}

export interface CraftSearchViewProps {
  searchHandler: SearchHandler;
  results: ResourceObj[];
}

export default function Page() {
  const [results, changeResults] = useState(resourceTable.search.example.results);

  const searchHandler : SearchHandler = {
    searchQuery: (query: string) => {
      if (query === "") {
        changeResults(resourceTable.search.example.results);
      } else {
        changeResults([]);
      }
    },
  }

  return <CraftSearchView results={results} searchHandler={searchHandler} />;
}
