"use client";

import { useState } from "react";
import { craftModel } from "../../../../model/main";
import DriveFolderView from "./view";
import { CraftSection } from "../../../../model/drive/section/main";
import { CraftFile } from "../../../../model/drive/section/folder/file/main";
import { CraftFolder } from "../../../../model/drive/section/folder/main";

export interface DriveFolderViewProps {
  section: CraftSection;
  folder: CraftFolder;
  files: CraftFile[];
  fileHandler: FileHandler;
}
interface FileHandler {
    addFile: (file: CraftFile) => void;
}

export default function Page() {
  const [section, changeSection] = useState(
    craftModel.drive.sections.section.example
  );
  const [folder, changeFolder] = useState(
    craftModel.drive.sections.section.folders.folder.example
  );
  const [files, changeFiles] = useState(
    craftModel.drive.sections.section.folders.folder.files.example
  )

  const fileHandler = {
    addFile: (file: CraftFile) => {
      changeFiles(prev => [file, ...prev])
    }
  }



  return <DriveFolderView section={section} folder={folder} files={files} fileHandler={fileHandler}/>;
}
