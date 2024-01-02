"use client";

import { CraftTableController } from "../../../../table-epic/main";
import { TableContainer } from "../../../../table-epic/container/main";
import { TableRow } from "../../../../table-epic/row/main";
import { CartSidebar } from "../../../../../../cart-sidebar-epic/main";
import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { DriveFolder } from "../../../../drive-epic/folder/main";
import { DriveFolderAdd } from "../../../../drive-epic/folder/add/main";
import { useState } from "react";
import { DriveWrapper } from "../../../../drive-epic/wrapper/main";
import { DriveController } from "../../../../drive-epic/main";
import { DriveBreadcrumbs } from "../../../../drive-epic/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../../../drive-epic/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../../../drive-epic/breadcrumb/divider/main";
import { DriveSection } from "../../../../drive-epic/section/main";
import { DriveSectionCoverImage } from "../../../../drive-epic/section/cover-image/main";
import { DriveSectionTitle } from "../../../../drive-epic/section/title/main";
import { DriveSectionDescription } from "../../../../drive-epic/section/description/main";
import { DriveFolders } from "../../../../drive-epic/folders/main";
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
      {/* {cartActive && <CartSidebar />} */}
    </DriveWrapper>
  );
}
