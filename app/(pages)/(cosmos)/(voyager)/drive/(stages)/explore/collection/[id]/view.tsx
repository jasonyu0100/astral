"use client";

import { DriveWrapper } from "../../drive-epic/wrapper/main";
import { DriveController } from "../../drive-epic/main";
import { DriveBreadcrumbs } from "../../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../(common)/breadcrumb/divider/main";
import { driveMap } from "../../../../map";
import { CraftFolderGrid } from "./collection-epic/grid/main";
import { CraftFolderGridElement } from "./collection-epic/grid/element/main";
import { DriveFolderSidebar } from "./collection-epic/sidebar/main";
import { SidebarBody } from "./collection-epic/sidebar/body/main";
import { SidebarCover } from "./collection-epic/sidebar/cover/main";
import { SidebarInfo } from "./collection-epic/sidebar/info/main";
import { CraftFolderGridAdd } from "./collection-epic/grid/add/main";
import { DriveFolderViewProps } from "./page";
import { collectionTable } from "@/tables/collection/table";

export default function DriveFolderView({
  gallery,
  collection,
  files,
  fileHandler,
}: DriveFolderViewProps) {
  return (
    <DriveWrapper>
      <DriveController>
        <DriveBreadcrumbs>
          <DriveBreadcrumbItem href={driveMap.drive.collect.link} active={false}>
            Home
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem
            active={false}
            href={driveMap.drive.collect.gallery.id.link(gallery.id)}
          >
            {gallery.name}
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem
            active={true}
            href={driveMap.drive.collect.collection.id.link(collection.id)}
          >
            {collection.name}
          </DriveBreadcrumbItem>
        </DriveBreadcrumbs>
        <CraftFolderGrid>
          <CraftFolderGridAdd
            onClick={() =>
              fileHandler.addFile(
                collectionTable.file.example
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
