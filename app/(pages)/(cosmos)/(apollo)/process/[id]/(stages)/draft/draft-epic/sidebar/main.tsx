import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";
import { CollectionModel } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/gallery/collection/type";
import { GalleryObj } from "@/(pages)/(cosmos)/tables/gallery/main";
import { craftModel } from "@/(pages)/(cosmos)/(voyager)/craft/model/main";
import { useState } from "react";
import { SidebarView } from "./view";

export enum SidebarMode {
  Drive = "Drive",
  Section = "Section",
  Folder = "Folder",
}

interface FileHandler {
  addMedia: (media: FileObj) => void;
}
interface SidebarViewHandler {
  goToDriveView: () => void;
  goToSectionView: () => void;
  goToFolderView: () => void;
  goToSection: (section: GalleryObj) => void;
  goToFolder: (section: CollectionModel) => void;
}
export interface SidebarViewProps {
  sidebarMode: SidebarMode;
  sections: GalleryObj[];
  sectionId: string;
  folders: CollectionModel[];
  folderId: string;
  files: FileObj[];
  sidebarViewHandler: SidebarViewHandler;
  fileHandler: FileHandler;
}

export function Sidebar() {
  const [sidebarMode, changeSidebarMode] = useState(SidebarMode.Drive);
  const [sections, changeSections] = useState<GalleryObj[]>(
    craftModel.drive.sections.example
  );
  const [sectionId, changeSectionId] = useState<string>("");
  const [folders, changeFolders] = useState<CollectionModel[]>(
    craftModel.drive.sections.section.folders.example
  );
  const [folderId, changeFolderId] = useState<string>("");
  const [files, changeFiles] = useState<FileObj[]>(
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
    goToSection: (section: GalleryObj) => {
      changeSectionId(section.id);
      changeSidebarMode(SidebarMode.Section);
    },
    goToFolder: (folder: CollectionModel) => {
      changeFolderId(folder.id);
      changeSidebarMode(SidebarMode.Folder);
    },
  };

  const fileHandler = {
    addMedia: (media: FileObj) => {
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
