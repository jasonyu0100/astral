"use client";
import { HomeGallery } from "./home-epic/grid/gallery/main";
import { HomeGalleryAdd } from "./home-epic/grid/add/main";
import { DriveWrapper } from "./home-epic/wrapper/main";
import { DriveController } from "./home-epic/main";
import { DriveBreadcrumbs } from "../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../(common)/breadcrumb/item/main";
import { HomeGalleryGrid } from "./home-epic/grid/main";
import { driveMap } from "../../../map";
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
        <HomeGalleryGrid>
          {gallerys.map((gallery) => (
            <HomeGallery
              gallery={gallery}
              href={driveMap.drive.explore.gallery.id.link(gallery.id)}
            />
          ))}
          <HomeGalleryAdd
            onClick={() => {
              addGallery(galleryTable.example);
            }}
          />
        </HomeGalleryGrid>
      </DriveController>
    </DriveWrapper>
  );
}
