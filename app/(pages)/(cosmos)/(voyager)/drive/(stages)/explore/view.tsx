"use client";
import { DriveSection } from "./drive-epic/grid/section/main";
import { DriveSectionAdd } from "./drive-epic/grid/add/main";
import { DriveWrapper } from "./drive-epic/wrapper/main";
import { DriveController } from "./drive-epic/main";
import { DriveBreadcrumbs } from "./(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "./(common)/breadcrumb/item/main";
import { DriveSectionGrid } from "./drive-epic/grid/main";
import { driveMap } from "../../map";
import { ExploreViewProps } from "./page";
import { galleryTable } from "@/tables/gallery/table";

export function ExploreView({ gallerys, addGallery }: ExploreViewProps) {
  return (
    <DriveWrapper>
      <DriveController>
        <DriveBreadcrumbs>
          <DriveBreadcrumbItem href={driveMap.drive.link} active={true}>
            Home
          </DriveBreadcrumbItem>
        </DriveBreadcrumbs>
        <DriveSectionGrid>
          {gallerys.map((gallery) => (
            <DriveSection
              section={gallery}
              href={driveMap.drive.collect.gallery.id.link(gallery.id)}
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
