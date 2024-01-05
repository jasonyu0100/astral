"use client";
import { DriveSection } from "./drive-epic/grid/section/main";
import { DriveSectionAdd } from "./drive-epic/grid/add/main";
import { DriveWrapper } from "./drive-epic/wrapper/main";
import { DriveController } from "./drive-epic/main";
import { DriveBreadcrumbs } from "./(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "./(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "./(common)/breadcrumb/divider/main";
import { DriveSectionGrid } from "./drive-epic/grid/main";
import { CraftDrive } from "../../model/drive/main";
import { CraftSection } from "../../model/drive/section/main";
import { craftModel } from "../../model/main";
import { craftMap } from "../../map";

interface DriveViewProps {
  drive: CraftDrive;
  addSection: (section: CraftSection) => void;
}

export function DriveView({ drive, addSection }: DriveViewProps) {
  return (
    <DriveWrapper>
      <DriveController>
        <DriveBreadcrumbs>
          <DriveBreadcrumbItem href={craftMap.craft.link}>Drive</DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
        </DriveBreadcrumbs>
        <DriveSectionGrid>
          {drive.sections.map((section) => (
            <DriveSection section={section} href={craftMap.craft.manage.section.id.link(section.id)}/>
          ))}
          <DriveSectionAdd onClick={() => {
            addSection(craftModel.drive.sections.section.example)
          }}/>
        </DriveSectionGrid>
      </DriveController>
    </DriveWrapper>
  );
}
