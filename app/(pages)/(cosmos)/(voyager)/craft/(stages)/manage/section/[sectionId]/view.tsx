"use client";

import { DriveWrapper } from "../../drive-epic/wrapper/main";
import { DriveController } from "../../drive-epic/main";
import { DriveBreadcrumbs } from "../../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../(common)/breadcrumb/divider/main";
import { craftModel } from "../../../../model/main";
import { DriveSectionGrid } from "./section-epic/grid/main";
import { CraftFolder } from "../../../../model/drive/section/folder/type";
import { CraftSection } from "../../../../model/drive/section/type";
import { craftMap } from "../../../../map";
import { DriveFolder } from "./section-epic/grid/section/main";
import { DriveSectionAdd } from "./section-epic/grid/add/main";
import { DriveSectionSidebar } from "./section-epic/sidebar/main";
import { SidebarBody } from "./section-epic/sidebar/body/main";
import { SidebarCover } from "./section-epic/sidebar/cover/main";
import { SidebarInfo } from "./section-epic/sidebar/info/main";

interface DriveSectionViewProps {
  section: CraftSection;
  addFolder: (folder: CraftFolder) => void;
}

export function DriveSectionView({
  section,
  addFolder,
}: DriveSectionViewProps) {
  return (
    <DriveWrapper>
      <DriveController>
        <DriveBreadcrumbs>
          <DriveBreadcrumbItem href={craftMap.craft.manage.link} active={false}>
            Drive
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem
            active={true}
            href={craftMap.craft.manage.section.id.link(section.id)}
          >
            {section.name}
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
        </DriveBreadcrumbs>
        {section !== null && (
          <DriveSectionGrid>
            {section.folders.map((folder) => (
              <DriveFolder
                folder={folder}
                href={craftMap.craft.manage.folder.id.link(folder.id)}
              />
            ))}
            <DriveSectionAdd
              onClick={() => {
                addFolder(
                  craftModel.drive.sections.section.folders.folder.example
                );
              }}
            />
          </DriveSectionGrid>
        )}
      </DriveController>
      <DriveSectionSidebar>
        <SidebarBody>
          <SidebarCover/>
          <SidebarInfo/>
        </SidebarBody>
      </DriveSectionSidebar>
    </DriveWrapper>
  );
}
