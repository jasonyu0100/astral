"use client";

import { DriveWrapper } from "../../home/home-epic/wrapper/main";
import { DriveController } from "../../home/home-epic/main";
import { DriveBreadcrumbs } from "../../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../(common)/breadcrumb/divider/main";
import { GalleryCollectionGrid } from "./gallery-epic/grid/main";
import { driveMap } from "../../../../map";
import { GalleryCollection } from "./gallery-epic/grid/collection/main";
import { GalleryCollectionAdd } from "./gallery-epic/grid/add/main";
import { DriveSectionViewProps } from "./page";
import { collectionTable } from "@/tables/collection/table";

export function DriveSectionView({
  gallery,
  collections,
  addCollection,
}: DriveSectionViewProps) {
  return (
    <DriveWrapper>
      <DriveController>
        <DriveBreadcrumbs>
          <DriveBreadcrumbItem
            href={driveMap.drive.explore.link}
            active={false}
          >
            Home
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem
            active={true}
            href={driveMap.drive.explore.gallery.id.link(gallery.id)}
          >
            {gallery.title}
          </DriveBreadcrumbItem>
        </DriveBreadcrumbs>
        {gallery !== null && (
          <GalleryCollectionGrid>
            {collections.map((collection) => (
              <GalleryCollection
                collection={collection}
                href={driveMap.drive.explore.collection.id.link(collection.id)}
              />
            ))}
            <GalleryCollectionAdd
              onClick={() => {
                addCollection(collectionTable.example);
              }}
            />
          </GalleryCollectionGrid>
        )}
      </DriveController>
    </DriveWrapper>
  );
}
