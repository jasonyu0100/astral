"use client";

import { DriveFolder } from "../../drive-epic/folder/main";
import { DriveFolderAdd } from "../../drive-epic/folder/add/main";
import { useState } from "react";
import { DriveWrapper } from "../../drive-epic/wrapper/main";
import { DriveController } from "../../drive-epic/main";
import { DriveBreadcrumbs } from "../../drive-epic/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../drive-epic/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../drive-epic/breadcrumb/divider/main";
import { DriveSection } from "../../drive-epic/section/main";
import { DriveSectionCoverImage } from "../../drive-epic/section/cover-image/main";
import { DriveSectionTitle } from "../../drive-epic/section/title/main";
import { DriveSectionDescription } from "../../drive-epic/section/description/main";
import { DriveFolders } from "../../drive-epic/folders/main";
import { craftModel } from "../../../../model/main";

export function DriveSectionView() {
  const [section, changeSection] = useState(
    craftModel.drive.sections.section.example
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
        </DriveBreadcrumbs>
        <DriveSection>
          <DriveSectionCoverImage />
          <DriveSectionTitle />
          <DriveSectionDescription />
        </DriveSection>
        {section !== null && (
          <DriveFolders>
            {section.folders.map((folder) => (
              <DriveFolder />
            ))}
            <DriveFolderAdd
            // onClick={() => changeFolders((prev) => [...prev, 1])}
            />
          </DriveFolders>
        )}
      </DriveController>
      {/* {cartActive && <CartSidebar />} */}
    </DriveWrapper>
  );
}
