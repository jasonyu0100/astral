"use client";

import { CraftTableController } from "./table-epic/main";
import { TableContainer } from "./table-epic/container/main";
import { TableRow } from "./table-epic/row/main";
import { CartSidebar } from "../../cart-sidebar-epic/main";
import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { DriveFolder } from "./drive-epic/folder/main";
import { DriveFolderAdd } from "./drive-epic/folder/add/main";
import { useState } from "react";
import { DriveWrapper } from "./drive-epic/wrapper/main";
import { DriveController } from "./drive-epic/main";
import { DriveBreadcrumb } from "./drive-epic/breadcrumb/main";
import { DriveBreadcrumbItem } from "./drive-epic/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "./drive-epic/breadcrumb/divider/main";
import { DriveSection } from "./drive-epic/section/main";
import { DriveSectionCoverImage } from "./drive-epic/section/cover-image/main";
import { DriveSectionTitle } from "./drive-epic/section/title/main";
import { DriveSectionDescription } from "./drive-epic/section/description/main";
import { DriveFolders } from "./drive-epic/folders/main";

export default function Page() {
  const [cartActive, changeCartActive] = useState(true);
  const [section, changeSection] = useState();
  const [folder, changeFolder] = useState(null);

  return (
    <DriveWrapper>
      <DriveController>
        <DriveBreadcrumb>
          <DriveBreadcrumbItem>Drive</DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem>Brand</DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem>Logo</DriveBreadcrumbItem>
        </DriveBreadcrumb>
        <DriveSection>
          <DriveSectionCoverImage />
          <DriveSectionTitle />
          <DriveSectionDescription />
        </DriveSection>
        {/* {section !== null && folder === null && (
          <DriveFolders>
            {section.folders.map((folder) => (
              <DriveFolder onClick={() => changeFolder(folder)} />
            ))}
            <DriveFolderAdd
            // onClick={() => changeFolders((prev) => [...prev, 1])}
            />
          </DriveFolders>
        )}
        {folder !== null && (
          <TableContainer>
            {folder.files.map((data) => (
              <TableRow {...data} />
            ))}
          </TableContainer>
        )} */}
      </DriveController>
      {cartActive && <CartSidebar />}
    </DriveWrapper>
  );
}
