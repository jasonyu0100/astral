"use client";

import { DriveController } from "../../home/home-epic/main";
import { DriveBreadcrumbs } from "../../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../(common)/breadcrumb/divider/main";
import { driveMap } from "../../../../map";
import { CollectionFileGrid } from "./collection-epic/grid/main";
import { CollectionFile } from "./collection-epic/grid/file/main";
import { CollectionFileAdd } from "./collection-epic/grid/add/main";
import { DriveFolderViewProps } from "./page";
import { galleryTable } from "@/tables/gallery/table";
import { resourceTable } from "@/tables/resource/table";

export default function DriveFolderView({
  gallery,
  collection,
  resources: files,
  resourceHandler: fileHandler,
}: DriveFolderViewProps) {
  return (
    <DriveController>
      <DriveBreadcrumbs>
        <DriveBreadcrumbItem href={driveMap.drive.explore.link} active={false}>
          Home
        </DriveBreadcrumbItem>
        <DriveBreadcrumbDivider />
        <DriveBreadcrumbItem
          active={false}
          href={driveMap.drive.explore.gallery.id.link(gallery.id)}
        >
          {gallery.title}
        </DriveBreadcrumbItem>
        <DriveBreadcrumbDivider />
        <DriveBreadcrumbItem
          active={true}
          href={driveMap.drive.explore.collection.id.link(collection.id)}
        >
          {collection.name}
        </DriveBreadcrumbItem>
      </DriveBreadcrumbs>
      <CollectionFileGrid>
        <CollectionFileAdd
          onClick={() => fileHandler.addResource(resourceTable.example)}
        />
        {files.map((file) => (
          <CollectionFile resource={file} />
        ))}
      </CollectionFileGrid>
    </DriveController>
  );
}
