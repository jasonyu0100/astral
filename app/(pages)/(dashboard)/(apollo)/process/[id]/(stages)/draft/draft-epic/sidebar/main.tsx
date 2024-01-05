import { CraftFile } from "@/(pages)/(dashboard)/(voyager)/craft/model/drive/section/folder/file/main";
import { CraftFolder } from "@/(pages)/(dashboard)/(voyager)/craft/model/drive/section/folder/main";
import { CraftSection } from "@/(pages)/(dashboard)/(voyager)/craft/model/drive/section/main";
import { craftModel } from "@/(pages)/(dashboard)/(voyager)/craft/model/main";
import { useState } from "react";
import { DraftSidebarView } from "./view";

export enum SidebarDriveView {
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
export interface DraftSidebarViewProps {
  sidebarView: SidebarDriveView;
  sections: CraftSection[];
  sectionId: string;
  folders: CraftFolder[];
  folderId: string;
  files: CraftFile[];
  sidebarViewHandler: SidebarViewHandler;
  fileHandler: FileHandler;
}

export function DraftSidebar() {
  const [sidebarView, changeSidebarView] = useState(SidebarDriveView.Folder);
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
      changeSidebarView(SidebarDriveView.Drive);
    },
    goToSectionView: () => {
      () => changeSidebarView(SidebarDriveView.Section);
    },
    goToFolderView: () => {
      () => changeSidebarView(SidebarDriveView.Folder);
    },
    goToSection: (section: CraftSection) => {
      changeSectionId(section.id);
      changeSidebarView(SidebarDriveView.Section);
    },
    goToFolder: (folder: CraftFolder) => {
      changeFolderId(folder.id);
      changeSidebarView(SidebarDriveView.Folder);
    },
  };

  const fileHandler = {
    addMedia: (media: CraftFile) => {
      changeFiles((prev) => [...prev, media]);
    },
  };

  return (
    <DraftSidebarView
      sidebarViewHandler={sidebarViewHandler}
      sidebarView={sidebarView}
      sections={sections}
      sectionId={sectionId}
      folders={folders}
      folderId={folderId}
      files={files}
      fileHandler={fileHandler}
    />
  );
}
