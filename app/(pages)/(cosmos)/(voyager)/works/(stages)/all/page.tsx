"use client";

import { useState } from "react";
import { worksModel } from "../../model/main";
import { WorkTabStages } from "../../tabs/main";
import { WorksView } from "../../view";
import { Work } from "../../model/work/main";

export default function Page() {
  const [works, changeWorks] = useState<Work[]>(worksModel.works.example);

  const addWork = (work: Work) => {
    changeWorks((prev) => [...prev, work]);
  };

  return <WorksView type={WorkTabStages.All} works={works} addWork={addWork}/>;
}
