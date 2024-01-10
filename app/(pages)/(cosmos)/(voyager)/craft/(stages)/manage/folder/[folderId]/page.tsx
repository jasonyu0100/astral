"use client";

import { useState } from "react";
import { craftModel } from "../../../../model/main";
import DriveFolderView from "./view";
import { GalleryObj } from "../../../../../../tables/gallery/main";
import { FileObj } from "../../../../../../tables/collection/file/main";
import { CollectionModel } from "../../../../../../tables/collection/main";

export interface DriveFolderViewProps {
  section: GalleryObj;
  folder: CollectionModel;
  files: FileObj[];
  fileHandler: FileHandler;
}
interface FileHandler {
    addFile: (file: FileObj) => void;
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
    addFile: (file: FileObj) => {
      changeFiles(prev => [file, ...prev])
    }
  }



  return <DriveFolderView section={section} folder={folder} files={files} fileHandler={fileHandler}/>;
}
