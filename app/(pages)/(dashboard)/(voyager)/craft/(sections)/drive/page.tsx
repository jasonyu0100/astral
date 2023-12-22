"use client";

import CraftTableController from "./table/main";
import CraftTableContainer from "./table/container/main";
import CraftTableRow from "./table/row/main";
import CraftCart from "../../(common)/cart/main";
import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import CraftDriveFolder from "./(common)/folder/main";
import CraftDriveFolderAdd from "./(common)/folder/add/main";
import { useState } from "react";
import { CraftFolder, CraftSection } from "../../data";
import { brandSection } from "../../data/brand/main";

export default function Page() {
  const [section, changeSection] = useState<CraftSection | null>(brandSection);
  const [folder, changeFolder] = useState<CraftFolder | null>(null);

  return (
    <Layer
      sizeStyle="w-full h-full"
      containerStyle={containerStyles.row}
      contentStyle={"space-x-[4rem]"}
    >
      <CraftTableController>
        <div className="flex flex-col space-y-[2rem]">
          <div className="flex flex-col">
            <Layer
              backgroundStyle={backgroundStyles["glass-10"]}
            >

            </Layer>
            <div className="text-white text-xl font-extraBold font-['Creato Display'] leading-7">
              Craft / {section?.name} / Logo
            </div>
            <div className="w-full mt-[1rem] h-[0px] border border-slate-400 border-opacity-30"></div>
          </div>
          <div className="w-full text-white text-base font-normal leading-normal">
            {section?.description}
          </div>
        </div>
        {section === null && folder === null && (
          <>No Section or Folder Selected</>
        )}
        {(section !== null && folder === null) && (
          <>
            <div className="w-full flex flex-row flex-wrap items-center py-[50px] gap-[50px]">
              {section.folders.map((folder) => (
                <CraftDriveFolder onClick={() => changeFolder(folder)} />
              ))}
              <CraftDriveFolderAdd
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
