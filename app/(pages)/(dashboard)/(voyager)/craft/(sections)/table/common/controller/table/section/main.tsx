"use client";

import { CraftSection } from "../row/main";
import SectionDescription from "./description/main";
import SectionTitle from "./title/main";

export default function CraftSection({ title, description } : CraftSection) {
  return (
    <div className="flex flex-col space-y-[2rem]">
      <SectionTitle title={title}/>
      <SectionDescription description={description}/>
    </div>
  );
}
