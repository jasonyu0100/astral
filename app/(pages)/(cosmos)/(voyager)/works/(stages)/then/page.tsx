"use client";

import { useState } from "react";
import { WorkTabStages } from "../../tabs/main";
import { WorksView } from "../../view";
import { SpaceObj } from "@/(pages)/(cosmos)/tables/space/main";
import { spaceTable } from "@/(pages)/(cosmos)/tables/space/table";

export interface WorkViewProps {
  type: WorkTabStages;
  spaces: SpaceObj[];
  addSpace: (space: SpaceObj) => void
}

export default function Page() {
  const [spaces, changeSpaces] = useState<SpaceObj[]>(spaceTable.examples);

  const addSpace = (space: SpaceObj) => {
    changeSpaces((prev) => [...prev, space]);
  };

  return <WorksView type={WorkTabStages.Then} spaces={spaces} addSpace={addSpace}/>;
}
