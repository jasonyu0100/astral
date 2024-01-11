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
import { ManageViewProps } from "./page";
import { galleryTable } from "@/tables/gallery/table";

export function ManageView({ gallerys, addGallery }: ManageViewProps) {
  return (
    <DriveWrapper>
      <DriveController>
        <DriveBreadcrumbs>
          <DriveBreadcrumbItem href={craftMap.craft.link} active={true}>
            Home
          </DriveBreadcrumbItem>
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
    </DriveWrapper>
  );
}
