"use client";

import { TableContainer } from "./table-epic/container/main";
import { TableRow } from "./table-epic/row/main";
import { DriveWrapper } from "../../drive-epic/wrapper/main";
import { DriveController } from "../../drive-epic/main";
import { DriveBreadcrumbs } from "../../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../(common)/breadcrumb/divider/main";
import { craftMap } from "../../../../map";
import { CraftSection } from "../../../../model/drive/section/main";
import { CraftFolder } from "../../../../model/drive/section/folder/main";

interface DriveFolderViewProps {
  section: CraftSection;
  folder: CraftFolder;
}

export default function DriveFolderView({
  section,
  folder,
}: DriveFolderViewProps) {
  return (
    <DriveWrapper>
      <DriveController>
        <DriveBreadcrumbs>
          <DriveBreadcrumbItem href={craftMap.craft.manage.link}>
            Drive
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem
            href={craftMap.craft.manage.section.id.link(folder.sectionId)}
          >
            {section.name}
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem
            href={craftMap.craft.manage.folder.id.link(folder.id)}
          >
            {folder.name}
          </DriveBreadcrumbItem>
        </DriveBreadcrumbs>
        {folder !== null && (
          <TableContainer>
            {folder.files.map((data) => (
              <TableRow {...data} />
            ))}
          </TableContainer>
        )}
      </DriveController>
    </DriveWrapper>
  );
}
