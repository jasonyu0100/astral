"use client";
import { useState } from "react";
import { SpaceTabStages } from "../../tabs/main";
import { SpacesView } from "../../view";
import { SpaceObj } from "@/tables/space/main";
import { spaceTable } from "@/tables/space/table";
import isAuth from "@/utils/isAuth";

export interface SpaceViewProps {
  type: SpaceTabStages;
  spaces: SpaceObj[];
  addSpace: (space: SpaceObj) => void
}

function Page() {
  const [spaces, changeSpaces] = useState<SpaceObj[]>(spaceTable.examples);

  const addSpace = (space: SpaceObj) => {
    changeSpaces((prev) => [...prev, space]);
  };

  return <SpacesView type={SpaceTabStages.Then} spaces={spaces} addSpace={addSpace}/>;
}

export default isAuth(Page);