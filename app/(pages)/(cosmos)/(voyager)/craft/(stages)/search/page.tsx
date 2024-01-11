"use client";
import { useState } from "react";
import { CraftSearchView } from "./view";
import { ResourceObj } from "@/tables/resource/main";
import { resourceTable } from "@/tables/resource/table";
import isAuth from "@/utils/isAuth";

interface SearchHandler {
  updateQuery: (query: string) => void;
  searchQuery: () => void;
}

export interface CraftSearchViewProps {
  searchHandler: SearchHandler;
  results: ResourceObj[];
}

function Page() {
  const [results, changeResults] = useState(
    resourceTable.search.example.results
  );
  const [query, changeQuery] = useState("");

  const searchHandler: SearchHandler = {
    updateQuery: (query: string) => {
      changeQuery(query);
    },
    searchQuery: () => {
      if (query === "") {
        changeResults(resourceTable.search.example.results);
      } else {
        changeResults([]);
      }
    },
  };

  return <CraftSearchView results={results} searchHandler={searchHandler} />;
}

export default isAuth(Page);