"use client";

import { DriveWrapper } from "../../drive-epic/wrapper/main";
import { DriveController } from "../../drive-epic/main";
import { DriveBreadcrumbs } from "../../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../(common)/breadcrumb/divider/main";
import { DriveSectionGrid } from "./gallery-epic/grid/main";
import { craftMap } from "../../../../map";
import { DriveFolder } from "./gallery-epic/grid/section/main";
import { DriveSectionAdd } from "./gallery-epic/grid/add/main";
import { DriveSectionSidebar } from "./gallery-epic/sidebar/main";
import { SidebarBody } from "./gallery-epic/sidebar/body/main";
import { SidebarCover } from "./gallery-epic/sidebar/cover/main";
import { SidebarInfo } from "./gallery-epic/sidebar/info/main";
import { DriveSectionViewProps } from "./page";
import { collectionTable } from "@/(pages)/(cosmos)/tables/collection/table";

export function DriveSectionView({
  gallery,
  collections,
  addCollection,
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
            href={craftMap.craft.manage.gallery.id.link(gallery.id)}
          >
            {gallery.name}
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
        </DriveBreadcrumbs>
        {gallery !== null && (
          <DriveSectionGrid>
            {collections.map((collection) => (
              <DriveFolder
                collection={collection}
                href={craftMap.craft.manage.collection.id.link(collection.id)}
              />
            ))}
            <DriveSectionAdd
              onClick={() => {
                addCollection(
                  collectionTable.example
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
