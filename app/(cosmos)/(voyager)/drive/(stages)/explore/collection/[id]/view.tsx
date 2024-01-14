"use client";

import { DriveController } from "../../home/home-epic/main";
import { DriveBreadcrumbs } from "../../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../(common)/breadcrumb/divider/main";
import { driveMap } from "../../../../map";
import { CollectionResourceGrid } from "./collection-epic/grid/main";
import { CollectionResource } from "./collection-epic/grid/file/main";
import { CollectionResourceAdd } from "./collection-epic/grid/add/main";
import { ExploreCollectionContext } from "./page";
import { resourceTable } from "@/tables/resource/table";
import { useContext } from "react";

export default function DriveFolderView() {
  const { gallery, collection, resources, resourceHandler } = useContext(
    ExploreCollectionContext
  );
  
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
      <CollectionResourceGrid>
        <CollectionResourceAdd
          onClick={() => resourceHandler.addResource(resourceTable.example)}
        />
        {resources.map((resource) => (
          <CollectionResource resource={resource} />
        ))}
      </CollectionResourceGrid>
    </DriveController>
  );
}
