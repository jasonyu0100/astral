import { Layer } from "@/(pages)/(common)/layer/main";
import { borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import { SearchBarButton } from "./button/main";
import SearchBarInput from "./input/main";
import { useContext, useState } from "react";
import { DraftSidebarContext } from "../../../../main";

export function CollectionHeaderSearch() {
  const { resourceHandler} = useContext(DraftSidebarContext);
  const [query, changeQuery] = useState(""); 

  return (
    <Layer
      displayName={CollectionHeaderSearch.name}
      sizeStyle="flex-grow h-[3rem]"
      borderStyle={`${borderStyles["border-b"]}`}
      containerStyle={containerStyles.row}
    >
      <SearchBarInput
        onChange={(e: any) => {
          changeQuery(e.target.value)
        }}
        value={query}
      />
      <SearchBarButton onClick={
        () => {
          resourceHandler.queryResources(query)
          changeQuery("")
        }
      }/>
    </Layer>
  );
}
