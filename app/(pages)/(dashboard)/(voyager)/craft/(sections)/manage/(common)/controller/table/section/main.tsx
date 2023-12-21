"use client";

import { CraftSection } from "@/(pages)/(dashboard)/(voyager)/craft/data";
import CraftTableSectionDescription from "./description/main";
import CraftTableSectionTitle from "./title/main";

export default function CraftTableSection({ name, description } : CraftSection) {
  return (
    <div className="flex flex-col space-y-[2rem]">
      <CraftTableSectionTitle title={name}/>
      <CraftTableSectionDescription description={description}/>
    </div>
  );
}
