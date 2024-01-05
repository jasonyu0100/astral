"use client";

import { DriveWrapper } from "../../drive-epic/wrapper/main";
import { DriveController } from "../../drive-epic/main";
import { DriveBreadcrumbs } from "../../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../(common)/breadcrumb/divider/main";
import { craftMap } from "../../../../map";
import { CraftSection } from "../../../../model/drive/section/main";
import { CraftFolder } from "../../../../model/drive/section/folder/main";
import { CraftFolderGrid } from "./folder-epic/grid/main";
import { CraftFolderGridElement } from "./folder-epic/grid/element/main";
import { DriveFolderSidebar } from "./folder-epic/sidebar/main";
import { SidebarBody } from "./folder-epic/sidebar/body/main";
import { SidebarCover } from "./folder-epic/sidebar/cover/main";
import { SidebarInfo } from "./folder-epic/sidebar/info/main";

interface DriveFolderViewProps {
  section: CraftSection;
  folder: CraftFolder;
}

export default function DriveFolderView({
  section,
  folder,
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
        {folder !== null && (
          <CraftFolderGrid>
            {folder.files.map((file) => (
              <CraftFolderGridElement file={file} />
            ))}
          </CraftFolderGrid>
        )}
      </DriveController>
      <DriveFolderSidebar>
        <SidebarBody>
          <SidebarCover/>
          <SidebarInfo/>
        </SidebarBody>
      </DriveFolderSidebar>
    </DriveWrapper>
  );
}
