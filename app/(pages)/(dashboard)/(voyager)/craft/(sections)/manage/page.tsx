"use client";

import CraftTableController from "./(common)/controller/main";
import CraftTableContainer from "./(common)/controller/table/container/main";
import CraftTableRow from "./(common)/controller/table/row/main";
import CraftTableSection from "./(common)/controller/table/section/main";
import { wordsSection } from "../../data/words/main";
import CraftCart from "../../(common)/cart/main";
import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import CraftManageFolder from "./(common)/folder/main";
import CraftManageFolderAdd from "./(common)/folder/add/main";
import { useState } from "react";
import { CraftFolder, CraftSection } from "../../data";
import { brandSection } from "../../data/brand/main";
import { logoFolder } from "../../data/brand/logo/main";

export default function Page() {
  const [section, changeSection] = useState<CraftSection | null>(brandSection);
  const [folder, changeFolder] = useState<CraftFolder | null>(logoFolder);

  return (
    <Layer
      sizeStyle="w-full h-full"
      containerStyle={containerStyles.row}
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
    >
      <CraftTableController>
        {section === null && folder === null && (
          <>No Section or Folder Selected</>
        )}
        {section !== null && (
          <>
            <CraftTableSection {...section} />
            <div className="w-full flex flex-row flex-wrap items-center py-[50px] gap-[50px]">
              {section.folders.map((folder) => (
                <CraftManageFolder />
              ))}
              <CraftManageFolderAdd
              // onClick={() => changeFolders((prev) => [...prev, 1])}
              />
            </div>
          </>
        )}
        {folder !== null && (
          <CraftTableContainer>
            {folder.files.map((data) => (
              <CraftTableRow {...data} />
            ))}
          </CraftTableContainer>
        )}
      </CraftTableController>
      <CraftCart />
    </Layer>
  );
}
