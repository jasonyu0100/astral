"use client";

import { TableContainer } from "./table-epic/container/main";
import { TableRow } from "./table-epic/row/main";
import { useState } from "react";
import { DriveWrapper } from "../../../../drive-epic/wrapper/main";
import { DriveController } from "../../../../drive-epic/main";
import { DriveBreadcrumbs } from "../../../../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../../../(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../../../(common)/breadcrumb/divider/main";
import { craftModel } from "../../../../../../model/main";

export default function DriveFolderView() {
  const [folder, changeFolder] = useState(
    craftModel.drive.sections.section.folders.folder.example
  );
  return (
    <DriveWrapper>
      <DriveController>
        <DriveBreadcrumbs>
          <DriveBreadcrumbItem href="/craft/drive">Drive</DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem href="/craft/drive/section/12">
            Section
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem href="/craft/drive/section/12/folder/13">
            Folder
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
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
