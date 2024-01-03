"use client";
import { useState } from "react";
import { craftModel } from "../../model/main";
import { CraftSearchView } from "./view";

export default function Page() {
  const [results, changeResults] = useState(craftModel.search.results.example);

  const updateSearch = (query: string) => {
    if (query === "") {
      changeResults(craftModel.search.results.example);
    } else {
      changeResults([]);
    }
  };

  return <CraftSearchView results={results} updateSearch={updateSearch} />;
}
