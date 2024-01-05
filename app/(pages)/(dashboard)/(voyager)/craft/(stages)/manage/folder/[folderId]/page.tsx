"use client";

import { useState } from "react";
import { craftModel } from "../../../../model/main";
import DriveFolderView from "./view";

export default function Page() {
  const [section, changeSection] = useState(
    craftModel.drive.sections.section.example
  );
  const [folder, changeFolder] = useState(
    craftModel.drive.sections.section.folders.folder.example
  );

  return <DriveFolderView section={section} folder={folder}/>;
}
