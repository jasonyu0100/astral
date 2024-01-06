import { CraftFile } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/file/main";
import { CraftFolder } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/main";
import { CraftSection } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/main";
import { craftModel } from "@/(pages)/(cosmos)/(voyager)/craft/model/main";
import { useState } from "react";
import { SidebarView } from "./view";

export enum SidebarMode {
  Drive = "Drive",
  Section = "Section",
  Folder = "Folder",
}

interface FileHandler {
  addMedia: (media: CraftFile) => void;
}
interface SidebarViewHandler {
  goToDriveView: () => void;
  goToSectionView: () => void;
  goToFolderView: () => void;
  goToSection: (section: CraftSection) => void;
  goToFolder: (section: CraftFolder) => void;
}
export interface SidebarViewProps {
  sidebarMode: SidebarMode;
  sections: CraftSection[];
  sectionId: string;
  folders: CraftFolder[];
  folderId: string;
  files: CraftFile[];
  sidebarViewHandler: SidebarViewHandler;
  fileHandler: FileHandler;
}

export function Sidebar() {
  const [sidebarMode, changeSidebarMode] = useState(SidebarMode.Drive);
  const [sections, changeSections] = useState<CraftSection[]>(
    craftModel.drive.sections.example
  );
  const [sectionId, changeSectionId] = useState<string>("");
  const [folders, changeFolders] = useState<CraftFolder[]>(
    craftModel.drive.sections.section.folders.example
  );
  const [folderId, changeFolderId] = useState<string>("");
  const [files, changeFiles] = useState<CraftFile[]>(
    craftModel.drive.sections.section.folders.folder.files.example
  );
  const sidebarViewHandler: SidebarViewHandler = {
    goToDriveView: () => {
      changeSidebarMode(SidebarMode.Drive);
    },
    goToSectionView: () => {
      changeSidebarMode(SidebarMode.Section);
    },
    goToFolderView: () => {
      changeSidebarMode(SidebarMode.Folder);
    },
    goToSection: (section: CraftSection) => {
      changeSectionId(section.id);
      changeSidebarMode(SidebarMode.Section);
    },
    goToFolder: (folder: CraftFolder) => {
      changeFolderId(folder.id);
      changeSidebarMode(SidebarMode.Folder);
    },
  };

  const fileHandler = {
    addMedia: (media: CraftFile) => {
      changeFiles((prev) => [...prev, media]);
    },
  };

  return (
    <SidebarView
      sidebarViewHandler={sidebarViewHandler}
      sidebarMode={sidebarMode}
      sections={sections}
      sectionId={sectionId}
      folders={folders}
      folderId={folderId}
      files={files}
      fileHandler={fileHandler}
    />
  );
}
