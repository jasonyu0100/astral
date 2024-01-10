"use client";

import { useState } from "react";
import { worksModel } from "../../../../tables/other/works/main";
import { WorkTabStages } from "../../tabs/main";
import { WorksView } from "../../view";
import { Work } from "../../../../tables/other/works/work/type";

export default function Page() {
  const [works, changeWorks] = useState<Work[]>(worksModel.works.example);

  const addWork = (work: Work) => {
    changeWorks((prev) => [...prev, work]);
  };

  return <WorksView type={WorkTabStages.All} works={works} addWork={addWork}/>;
}
