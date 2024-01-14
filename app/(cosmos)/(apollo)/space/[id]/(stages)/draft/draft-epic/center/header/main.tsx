import { Layer } from "@/(common)/layer/main";
import { containerStyles, borderStyles } from "@/(common)/styles/data";
import { constellationTable, draftTable } from "@/tables/draft/table";
import { DraftHeaderAddButton } from "./add/main";
import { DraftHeaderListButton } from "./left/list/main";
import DraftHeaderTitle from "./title/main";
import { DraftHeaderLeft } from "./left/main";
import { DraftHeaderRight } from "./right/main";
import { useContext } from "react";
import { DraftContext } from "../../../page";

export function DraftHeader() {
  const {
    chapter, constellation,
    constellationHandler
  } = useContext(DraftContext);

  const headerTitle = constellation && chapter ? `${constellation.title} - ${chapter.title}` : "None";
  
  return (
    <Layer
      displayName={DraftHeader.name}
      sizeStyle="h-[50px] w-full flex-shrink-0"
      containerStyle={containerStyles["row-center"]}
      borderStyle={borderStyles["border-b"]}
      contentStyle="px-[1rem] space-x-[1rem] justify-between"
    >
      <DraftHeaderLeft>
        <DraftHeaderListButton />
      </DraftHeaderLeft>
      <div className="flex flex-row justify-center w-1/3">
        <DraftHeaderTitle>{headerTitle}</DraftHeaderTitle>
      </div>
      <DraftHeaderRight>
        <DraftHeaderAddButton
          onClick={() => {
            constellationHandler.addConstellation(
              constellationTable.example
            );
          }}
        />
      </DraftHeaderRight>
    </Layer>
  );
}
