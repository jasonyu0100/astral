"use client";
import { useState } from "react";
import { craftModel } from "../../model/main";
import { CraftSearchView } from "./view";
import { FileObj } from "../../../../tables/collection/file/main";

interface SearchHandler {
  searchQuery: (query: string) => void;
}

export interface CraftSearchViewProps {
  searchHandler: SearchHandler;
  results: FileObj[];
}

export default function Page() {
  const [results, changeResults] = useState(craftModel.search.results.example);

  const searchHandler : SearchHandler = {
    searchQuery: (query: string) => {
      if (query === "") {
        changeResults(craftModel.search.results.example);
      } else {
        changeResults([]);
      }
    },
  }

  return <CraftSearchView results={results} searchHandler={searchHandler} />;
}
