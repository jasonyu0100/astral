import { Divider } from "@/(pages)/(common)/divider/main";
import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { craftModel } from "@/(pages)/(dashboard)/(voyager)/craft/model/main";
import { draftModel } from "../../model/main";
import { TopRowAddButton } from "./archive/header/button-row/button/add/main";
import { DraftLoomButton } from "./archive/header/button-row/button/loom/main";
import { DraftSidebarHeader } from "./archive/header/main";
import { DraftSidebarBody } from "./body/main";
import { BreadcrumbsLink } from "./breadcrumbs/breadcrumb/main";
import { BreadcrumbsDivider } from "./breadcrumbs/divider/main";
import { DraftSidebarBreadcrumbs } from "./breadcrumbs/main";
import { SidebarDriveSections } from "./drive/main";
import { DriveSectionInfo } from "./drive/section/info/main";
import { DriveSectionElement } from "./drive/section/main";
import { DriveSectionThumbanil } from "./drive/section/thumbnail/main";
import { DriveSectionThumbnailWrapper } from "./drive/section/thumbnail/wrapper/main";
import { LibraryElementInfo } from "./folder/file/info/main";
import { LibraryElement } from "./folder/file/main";
import { LibraryElementThumbnail } from "./folder/file/thumbnail/main";
import { LibraryElementThumbnailWrapper } from "./folder/file/thumbnail/wrapper/main";
import { LibraryHeader } from "./folder/header/main";
import { LibraryHeaderSearch } from "./folder/header/search/main";
import LibraryHeaderTools from "./folder/header/tools/main";
import { SidebarLibrary } from "./folder/main";
import { FoldersElementInfo } from "./section/folder/info/main";
import { FoldersElement } from "./section/folder/main";
import { FoldersElementThumbnail } from "./section/folder/thumbnail/main";
import { FoldersElementThumbnailWrapper } from "./section/folder/thumbnail/wrapper/main";
import { SectionCoverImage } from "./section/header/cover-image/main";
import DraftSidebarDescription from "./section/header/description/main";
import { DraftSidebarSectionHeader } from "./section/header/main";
import { SidebarSectionFolders } from "./section/main";
import { DraftSidebarViewProps, SidebarDriveView } from "./main";
import { useContext, useState } from "react";
import { DraftContext } from "../../page";

export function DraftSidebarView({
  sidebarViewHandler,
  sidebarView,
  sections,
  sectionId,
  folders,
  folderId,
  files,
  fileHandler,
}: DraftSidebarViewProps) {
  const draftContext = useContext(DraftContext);
  const folder = folders.filter((folder) => folder.id === folderId).at(0);
  const section = sections.filter((section) => section.id === sectionId).at(0);
  const [query, changeQuery] = useState("");

  const filteredFiles = files.filter((file) => {
    const regex = new RegExp(query, "i");
    return regex.test(file.name);
  });

  return (
    <Layer
      displayName={DraftSidebarView.name}
      sizeStyle="max-w-[500px] min-w-[250px] w-1/4 h-full"
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      contentStyle={"py-[2rem] px-[1rem] space-y-[1rem]"}
    >
      <DraftSidebarBreadcrumbs>
        <>
          <BreadcrumbsLink
            active={sidebarView === SidebarDriveView.Drive}
            onClick={() => sidebarViewHandler.goToDriveView()}
          >
            Drive
          </BreadcrumbsLink>
          <BreadcrumbsDivider />
          {(sidebarView === SidebarDriveView.Section ||
            sidebarView === SidebarDriveView.Folder) && (
            <>
              <BreadcrumbsLink
                active={sidebarView === SidebarDriveView.Section}
                onClick={() => sidebarViewHandler.goToSectionView()}
              >
                {section?.name}
              </BreadcrumbsLink>
              <BreadcrumbsDivider />
            </>
          )}
          {sidebarView === SidebarDriveView.Folder && (
            <BreadcrumbsLink
              active={sidebarView === SidebarDriveView.Folder}
              onClick={() => sidebarViewHandler.goToFolderView()}
            >
              {folder?.name}
            </BreadcrumbsLink>
          )}
        </>
      </DraftSidebarBreadcrumbs>
      <Divider />
      <DraftSidebarBody>
        {sidebarView === SidebarDriveView.Drive && (
          <>
            <SidebarDriveSections>
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
            </SidebarDriveSections>
          </>
        )}
        {sidebarView === SidebarDriveView.Section && (
          <>
            <SidebarSectionFolders>
              <DraftSidebarHeader>
                <DraftSidebarSectionHeader>
                  <SectionCoverImage
                    src={
                      craftModel.drive.sections.section.example.thumbnail.src
                    }
                  />
                  <DraftSidebarDescription />
                </DraftSidebarSectionHeader>
              </DraftSidebarHeader>
              {folders.map((folder) => (
                <FoldersElement>
                  <FoldersElementThumbnailWrapper
                    onClick={() => {
                      sidebarViewHandler.goToFolder(folder);
                    }}
                  >
                    <FoldersElementThumbnail folder={folder} />
                  </FoldersElementThumbnailWrapper>
                  <FoldersElementInfo>
                    <p className="text-white font-extraBold">{folder.name}</p>
                    <p className="text-white font-bold">
                      123 drafts - 3 weeks ago
                    </p>
                  </FoldersElementInfo>
                </FoldersElement>
              ))}
            </SidebarSectionFolders>
          </>
        )}
        {sidebarView === SidebarDriveView.Folder && (
          <>
            <SidebarLibrary>
              <LibraryHeader>
                <LibraryHeaderSearch
                  onChange={(e) => changeQuery(e.target.value)}
                  value={query}
                />
                <LibraryHeaderTools>
                  <TopRowAddButton
                    onClick={() =>
                      fileHandler.addMedia(
                        draftModel.context.library.media.example
                      )
                    }
                  />
                  <DraftLoomButton />
                </LibraryHeaderTools>
              </LibraryHeader>
              {filteredFiles.map((draftMedia) => (
                <LibraryElement>
                  <LibraryElementThumbnailWrapper
                    onClick={() =>
                      draftContext.starHandler.spawnStar(draftMedia)
                    }
                  >
                    <LibraryElementThumbnail src={draftMedia.src} />
                  </LibraryElementThumbnailWrapper>
                  <LibraryElementInfo>
                    <p className="text-white font-extraBold">
                      {draftMedia.name}
                    </p>
                    <p className="text-white font-bold">
                      123 drafts - 3 weeks ago
                    </p>
                    <p className="text-white font-regular">
                      {draftMedia.description}
                    </p>
                  </LibraryElementInfo>
                </LibraryElement>
              ))}
            </SidebarLibrary>
          </>
        )}
      </DraftSidebarBody>
    </Layer>
  );
}
