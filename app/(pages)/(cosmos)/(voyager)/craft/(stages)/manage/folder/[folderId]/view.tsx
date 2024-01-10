"use client";

import { DriveWrapper } from "../../drive-epic/wrapper/main";
import { DriveController } from "../../drive-epic/main";
import { DriveBreadcrumbs } from "../../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../(common)/breadcrumb/divider/main";
import { craftMap } from "../../../../map";
import { GalleryObj } from "../../../../../../tables/gallery/main";
import { CollectionModel } from "../../../../../../tables/collection/main";
import { CraftFolderGrid } from "./folder-epic/grid/main";
import { CraftFolderGridElement } from "./folder-epic/grid/element/main";
import { DriveFolderSidebar } from "./folder-epic/sidebar/main";
import { SidebarBody } from "./folder-epic/sidebar/body/main";
import { SidebarCover } from "./folder-epic/sidebar/cover/main";
import { SidebarInfo } from "./folder-epic/sidebar/info/main";
import { CraftFolderGridAdd } from "./folder-epic/grid/add/main";
import { DriveFolderViewProps } from "./page";
import { craftModel } from "../../../../model/main";

export default function DriveFolderView({
  section,
  folder,
  files,
  fileHandler,
}: DriveFolderViewProps) {
  return (
    <DriveWrapper>
      <DriveController>
        <DriveBreadcrumbs>
          <DriveBreadcrumbItem href={craftMap.craft.manage.link} active={false}>
            Drive
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem
            active={false}
            href={craftMap.craft.manage.section.id.link(folder.sectionId)}
          >
            {section.name}
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem
            active={true}
            href={craftMap.craft.manage.folder.id.link(folder.id)}
          >
            {folder.name}
          </DriveBreadcrumbItem>
        </DriveBreadcrumbs>
        <CraftFolderGrid>
          <CraftFolderGridAdd
            onClick={() =>
              fileHandler.addFile(
                craftModel.drive.sections.section.folders.folder.files.file
                  .example
              )
            }
          />
          {files.map((file) => (
            <CraftFolderGridElement file={file} />
          ))}
        </CraftFolderGrid>
      </DriveController>
      <DriveFolderSidebar>
        <SidebarBody>
          <SidebarCover />
          <SidebarInfo />
        </SidebarBody>
      </DriveFolderSidebar>
    </DriveWrapper>
  );
}
