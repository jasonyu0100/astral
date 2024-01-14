"use client";
import { useState } from "react";
import { SearchView } from "./view";
import { ResourceObj } from "@/tables/resource/main";
import { searchObject } from "@/tables/resource/table";
import isAuth from "@/utils/isAuth";

interface SearchHandler {
  updateQuery: (query: string) => void;
  searchQuery: () => void;
}

export interface SearchViewProps {
  searchHandler: SearchHandler;
  results: ResourceObj[];
}

function Page() {
  const [results, changeResults] = useState(
    searchObject.example.results
  );
  const [query, changeQuery] = useState("");

  const searchHandler: SearchHandler = {
    updateQuery: (query: string) => {
      changeQuery(query);
    },
    searchQuery: () => {
      if (query === "") {
        changeResults(
          searchObject.example.results
        );
      } else {
        changeResults([]);
      }
    },
  };

  return <SearchView results={results} searchHandler={searchHandler} />;
}

export default isAuth(Page);