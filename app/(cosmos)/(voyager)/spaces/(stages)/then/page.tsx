"use client";
import { useState } from "react";
import { SpaceTabStages } from "../../tabs/main";
import { SpacesView } from "../../view";
import { SpaceObj } from "@/tables/space/main";
import { spaceTable } from "@/tables/space/table";
import insideCosmos from "@/utils/isAuth";

function Page() {
  const [spaces, changeSpaces] = useState<SpaceObj[]>(spaceTable.examples);

  const addSpace = (space: SpaceObj) => {
    changeSpaces((prev) => [...prev, space]);
  };

  return <SpacesView type={SpaceTabStages.Then} spaces={spaces} addSpace={addSpace}/>;
}

export default insideCosmos(Page);