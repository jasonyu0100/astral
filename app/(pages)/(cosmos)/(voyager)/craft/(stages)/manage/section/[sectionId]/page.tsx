"use client";
import { useState } from "react";
import { CraftFolder } from "../../../../model/drive/section/folder/main";
import { CraftSection } from "../../../../model/drive/section/main";
import { craftModel } from "../../../../model/main";
import { DriveSectionView } from "./view";

export default function Page() {
  const [section, changeSection] = useState<CraftSection>(
    craftModel.drive.sections.section.example
  );

  const addFolder = (folder: CraftFolder) => {
    changeSection((prev) => {
      return {
        ...prev,
        folders: [...prev.folders, folder],
      };
    });
  };

  return <DriveSectionView section={section} addFolder={addFolder} />;
}
