"use client";

import { useState } from "react";
import { worksModel } from "../../model/main";
import { Work } from "../../model/work/type";
import { WorkTabStages } from "../../tabs/main";
import { WorksView } from "../../view";

export default function Page() {
  const [works, changeWorks] = useState<Work[]>(worksModel.works.example);

  const addWork = (work: Work) => {
    changeWorks((prev) => [...prev, work]);
  };

  return <WorksView type={WorkTabStages.Now} works={works} addWork={addWork} />;
}
