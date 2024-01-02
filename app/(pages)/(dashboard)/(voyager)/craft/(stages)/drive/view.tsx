"use client";
import { DriveFolder } from "./drive-epic/folder/main";
import { DriveFolderAdd } from "./drive-epic/folder/add/main";
import { DriveWrapper } from "./drive-epic/wrapper/main";
import { DriveController } from "./drive-epic/main";
import { DriveBreadcrumbs } from "./drive-epic/breadcrumb/main";
import { DriveBreadcrumbItem } from "./drive-epic/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "./drive-epic/breadcrumb/divider/main";
import { DriveFolders } from "./drive-epic/folders/main";
import { craftModel } from "../../model/main";

export function DriveView() {
  return (
    <DriveWrapper>
      <DriveController>
        <DriveBreadcrumbs>
          <DriveBreadcrumbItem href="/craft/drive">Drive</DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
        </DriveBreadcrumbs>
        <DriveFolders>
          <DriveFolder />
          <DriveFolder />
          <DriveFolder />
          <DriveFolder />
          <DriveFolder />
          <DriveFolder />
          <DriveFolder />
          <DriveFolder />
          <DriveFolder />
          <DriveFolder />
          <DriveFolder />
          <DriveFolderAdd />
        </DriveFolders>
      </DriveController>
      {/* {cartActive && <CartSidebar />} */}
    </DriveWrapper>
  );
}
