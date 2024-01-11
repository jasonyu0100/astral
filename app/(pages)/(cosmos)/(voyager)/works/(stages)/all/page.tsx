"use client";

import { useState } from "react";
import { WorkTabStages } from "../../tabs/main";
import { WorksView } from "../../view";
import { SpaceObj } from "@/(pages)/(cosmos)/tables/space/main";
import { spaceTable } from "@/(pages)/(cosmos)/tables/space/table";
import isAuth from "@/utils/isAuth";

export interface WorkViewProps {
  type: WorkTabStages;
  spaces: SpaceObj[];
  addSpace: (space: SpaceObj) => void
}

function Page() {
  const [spaces, changeSpaces] = useState<SpaceObj[]>(spaceTable.examples);

  const addSpace = (space: SpaceObj) => {
    changeSpaces((prev) => [...prev, space]);
  };

  return <WorksView type={WorkTabStages.All} spaces={spaces} addSpace={addSpace}/>;
}

export default isAuth(Page);