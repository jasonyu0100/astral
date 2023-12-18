"use client";

import { CraftSection } from "../row/main";
import CraftTableSectionDescription from "./description/main";
import CraftTableSectionTitle from "./title/main";

export default function CraftTableSection({ title, description } : CraftSection) {
  return (
    <div className="flex flex-col space-y-[2rem]">
      <CraftTableSectionTitle title={title}/>
      <CraftTableSectionDescription description={description}/>
    </div>
  );
}
