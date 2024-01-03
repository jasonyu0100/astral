"use client";

import { DriveWrapper } from "../../drive-epic/wrapper/main";
import { DriveController } from "../../drive-epic/main";
import { DriveBreadcrumbs } from "../../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../(common)/breadcrumb/divider/main";
import { DriveSection } from "./section-epic/section/main";
import { DriveSectionCoverImage } from "./section-epic/section/cover-image/main";
import { DriveSectionTitle } from "./section-epic/section/title/main";
import { DriveSectionDescription } from "./section-epic/section/description/main";
import { craftModel } from "../../../../model/main";
import { DriveSectionGrid } from "./section-epic/folders-grid/main";
import { DriveSectionFolder } from "./section-epic/folders-grid/folder/main";
import { DriveSectionFolderAdd } from "./section-epic/folders-grid/folder/add/main";
import { CraftFolder } from "../../../../model/drive/section/folder/main";
import { CraftSection } from "../../../../model/drive/section/main";
import { craftMap } from "../../../../map";

interface DriveSectionViewProps {
  section: CraftSection;
  addFolder: (folder: CraftFolder) => void;
}

export function DriveSectionView({
  section,
  addFolder,
}: DriveSectionViewProps) {
  return (
    <DriveWrapper>
      <DriveController>
        <DriveBreadcrumbs>
          <DriveBreadcrumbItem href={craftMap.craft.manage.link}>
            Drive
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem
            href={craftMap.craft.manage.section.id.link(section.id)}
          >
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
          <DriveSectionGrid>
            {section.folders.map((folder) => (
              <DriveSectionFolder
                folder={folder}
                href={craftMap.craft.manage.folder.id.link(folder.id)}
              />
            ))}
            <DriveSectionFolderAdd
              onClick={() => {
                addFolder(
                  craftModel.drive.sections.section.folders.folder.example
                );
              }}
            />
          </DriveSectionGrid>
        )}
      </DriveController>
    </DriveWrapper>
  );
}
