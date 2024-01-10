"use client";
import { DriveSection } from "./drive-epic/grid/section/main";
import { DriveSectionAdd } from "./drive-epic/grid/add/main";
import { DriveWrapper } from "./drive-epic/wrapper/main";
import { DriveController } from "./drive-epic/main";
import { DriveBreadcrumbs } from "./(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "./(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "./(common)/breadcrumb/divider/main";
import { DriveSectionGrid } from "./drive-epic/grid/main";
import { craftMap } from "../../map";
import { SidebarBody } from "./drive-epic/sidebar/body/main";
import { SidebarCover } from "./drive-epic/sidebar/cover/main";
import { SidebarInfo } from "./drive-epic/sidebar/info/main";
import { DriveManageSidebar } from "./drive-epic/sidebar/main";
import { ManageViewProps } from "./page";
import { galleryTable } from "@/(pages)/(cosmos)/tables/gallery/table";

export function ManageView({ gallerys, addGallery }: ManageViewProps) {
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
          {gallerys.map((gallery) => (
            <DriveSection
              section={gallery}
              href={craftMap.craft.manage.gallery.id.link(gallery.id)}
            />
          ))}
          <DriveSectionAdd
            onClick={() => {
              addGallery(galleryTable.example);
            }}
          />
        </DriveSectionGrid>
      </DriveController>
      <DriveManageSidebar>
        <SidebarBody>
          <SidebarCover />
          <SidebarInfo />
        </SidebarBody>
      </DriveManageSidebar>
    </DriveWrapper>
  );
}
