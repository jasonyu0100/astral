"use client";
import { DriveSection } from "./drive-epic/grid/section/main";
import { DriveSectionAdd } from "./drive-epic/grid/add/main";
import { DriveWrapper } from "./drive-epic/wrapper/main";
import { DriveController } from "./drive-epic/main";
import { DriveBreadcrumbs } from "./(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "./(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "./(common)/breadcrumb/divider/main";
import { DriveSectionGrid } from "./drive-epic/grid/main";
import { CraftDrive } from "../../model/drive/type";
import { GalleryObj } from "../../../../tables/gallery/main";
import { craftModel } from "../../model/main";
import { craftMap } from "../../map";
import { SidebarBody } from "./drive-epic/sidebar/body/main";
import { SidebarCover } from "./drive-epic/sidebar/cover/main";
import { SidebarInfo } from "./drive-epic/sidebar/info/main";
import { DriveManageSidebar } from "./drive-epic/sidebar/main";

interface DriveViewProps {
  drive: CraftDrive;
  addSection: (section: GalleryObj) => void;
}

export function DriveView({ drive, addSection }: DriveViewProps) {
  return (
    <DriveWrapper>
      <DriveController>
        <DriveBreadcrumbs>
          <DriveBreadcrumbItem href={craftMap.craft.link} active={true}>
            Drive
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
        </DriveBreadcrumbs>
        <DriveSectionGrid>
          {drive.sections.map((section) => (
            <DriveSection
              section={section}
              href={craftMap.craft.manage.section.id.link(section.id)}
            />
          ))}
          <DriveSectionAdd
            onClick={() => {
              addSection(craftModel.drive.sections.section.example);
            }}
          />
        </DriveSectionGrid>
      </DriveController>
      <DriveManageSidebar>
        <SidebarBody>
          <SidebarCover/>
          <SidebarInfo/>
        </SidebarBody>
      </DriveManageSidebar>
    </DriveWrapper>
  );
}
