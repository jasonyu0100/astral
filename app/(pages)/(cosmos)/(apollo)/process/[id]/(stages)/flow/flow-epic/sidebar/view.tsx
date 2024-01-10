import { Divider } from "@/(pages)/(common)/divider/main";
import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { craftModel } from "@/(pages)/(cosmos)/(voyager)/craft/model/main";
import { flowModel } from "../../../../../../../../../../model/main";
import { AddButton } from "./modes/folder/header/button-row/button/add/main";
import { DraftLoomButton as LoomButton } from "./modes/folder/header/button-row/button/loom/main";
import { SidebarBody } from "./modes/main";
import { BreadcrumbsLink } from "./header/breadcrumbs/breadcrumb/main";
import { BreadcrumbsDivider } from "./header/breadcrumbs/divider/main";
import { SidebarBreadcrumbs } from "./header/breadcrumbs/main";
import { DriveInterface } from "./modes/drive/main";
import { DriveSectionInfo } from "./modes/drive/section/info/main";
import { DriveSectionElement } from "./modes/drive/section/main";
import { DriveSectionThumbanil } from "./modes/drive/section/thumbnail/main";
import { DriveSectionThumbnailWrapper } from "./modes/drive/section/thumbnail/wrapper/main";
import { FolderFileInfo } from "./modes/folder/file/info/main";
import { FolderFile } from "./modes/folder/file/main";
import { FolderFileThumbnail } from "./modes/folder/file/thumbnail/main";
import { FolderFileThumbnailWrapper } from "./modes/folder/file/thumbnail/wrapper/main";
import { FolderHeader } from "./modes/folder/header/main";
import { FolderHeaderSearch } from "./modes/folder/header/search/main";
import { FolderHeaderTools } from "./modes/folder/header/tools/main";
import { FolderInterface } from "./modes/folder/main";
import { SectionFolderInfo } from "./modes/section/folder/info/main";
import { SectionFolder } from "./modes/section/folder/main";
import { SectionFolderThumbnail } from "./modes/section/folder/thumbnail/main";
import { SectionFolderThumbnailWrapper } from "./modes/section/folder/thumbnail/wrapper/main";
import { SectionCoverImage } from "./modes/section/header/cover-image/main";
import { SectionHeaderDescription } from "./modes/section/header/description/main";
import { SectionHeader } from "./modes/section/header/main";
import { SectionInterface } from "./modes/section/main";
import { SidebarViewProps, SidebarMode } from "./main";
import { useContext, useState } from "react";
import { FlowContext } from "../../page";

export function SidebarView({
  sidebarViewHandler,
  sidebarMode: sidebarView,
  sections,
  sectionId,
  folders,
  folderId,
  files,
  fileHandler,
}: SidebarViewProps) {
  const { momentHandler } = useContext(FlowContext);
  const folder = folders.filter((folder) => folder.id === folderId).at(0);
  const section = sections.filter((section) => section.id === sectionId).at(0);
  const [query, changeQuery] = useState("");

  const filteredFiles = files.filter((file) => {
    const regex = new RegExp(query, "i");
    return regex.test(file.name);
  });

  return (
    <Layer
      displayName={SidebarView.name}
      sizeStyle="max-w-[500px] min-w-[250px] w-1/4 h-full"
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      contentStyle={"py-[2rem] px-[1rem] space-y-[1rem]"}
    >
      <SidebarBreadcrumbs>
        <BreadcrumbsLink
          active={sidebarView === SidebarMode.Drive}
          onClick={() => sidebarViewHandler.goToDriveView()}
        >
          Drive
        </BreadcrumbsLink>
        <BreadcrumbsDivider />
        {(sidebarView === SidebarMode.Section ||
          sidebarView === SidebarMode.Folder) && (
          <>
            <BreadcrumbsLink
              active={sidebarView === SidebarMode.Section}
              onClick={() => sidebarViewHandler.goToSectionView()}
            >
              {section?.name}
            </BreadcrumbsLink>
            <BreadcrumbsDivider />
          </>
        )}
        {sidebarView === SidebarMode.Folder && (
          <BreadcrumbsLink
            active={sidebarView === SidebarMode.Folder}
            onClick={() => sidebarViewHandler.goToFolderView()}
          >
            {folder?.name}
          </BreadcrumbsLink>
        )}
      </SidebarBreadcrumbs>
      <Divider />
      <SidebarBody>
        {sidebarView === SidebarMode.Drive && (
          <>
            <DriveInterface>
              {sections.map((section) => (
                <DriveSectionElement>
                  <DriveSectionThumbnailWrapper
                    onClick={() => {
                      sidebarViewHandler.goToSection(section);
                    }}
                  >
                    <DriveSectionThumbanil src={section.thumbnail.src} />
                  </DriveSectionThumbnailWrapper>
                  <DriveSectionInfo>
                    <p className="text-white font-extraBold">{section.name}</p>
                    <p className="text-white font-bold">
                      {section.description}
                    </p>
                  </DriveSectionInfo>
                </DriveSectionElement>
              ))}
            </DriveInterface>
          </>
        )}
        {sidebarView === SidebarMode.Section && (
          <>
            <SectionInterface>
              <SectionHeader>
                <SectionCoverImage
                  src={craftModel.drive.sections.section.example.thumbnail.src}
                />
                <SectionHeaderDescription />
              </SectionHeader>
              <Divider/>
              {folders.map((folder) => (
                <SectionFolder>
                  <SectionFolderThumbnailWrapper
                    onClick={() => {
                      sidebarViewHandler.goToFolder(folder);
                    }}
                  >
                    <SectionFolderThumbnail folder={folder} />
                  </SectionFolderThumbnailWrapper>
                  <SectionFolderInfo>
                    <p className="text-white font-extraBold">{folder.name}</p>
                    <p className="text-white font-bold">
                      123 drafts - 3 weeks ago
                    </p>
                  </SectionFolderInfo>
                </SectionFolder>
              ))}
            </SectionInterface>
          </>
        )}
        {sidebarView === SidebarMode.Folder && (
          <>
            <FolderInterface>
              <FolderHeader>
                <FolderHeaderSearch
                  onChange={(e: any) => changeQuery(e.target.value)}
                  value={query}
                />
                <FolderHeaderTools>
                  <AddButton
                    onClick={() =>
                      fileHandler.addMedia(
                        flowModel.context.gallery.snapshot.example
                      )
                    }
                  />
                  <LoomButton />
                </FolderHeaderTools>
              </FolderHeader>
              {filteredFiles.map((file) => (
                <FolderFile>
                  <FolderFileThumbnailWrapper
                    onClick={() => momentHandler.addSnapshotToMoment(file)}
                  >
                    <FolderFileThumbnail src={file.src} />
                  </FolderFileThumbnailWrapper>
                  <FolderFileInfo>
                    <p className="text-white font-extraBold">
                      {file.name}
                    </p>
                    <p className="text-white font-bold">
                      123 drafts - 3 weeks ago
                    </p>
                    <p className="text-white font-regular">
                      {file.description}
                    </p>
                  </FolderFileInfo>
                </FolderFile>
              ))}
            </FolderInterface>
          </>
        )}
      </SidebarBody>
    </Layer>
  );
}
