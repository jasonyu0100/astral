import { Divider } from "@/(pages)/(common)/divider/main";
import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { AddButton } from "./modes/collection/header/button-row/button/add/main";
import { DraftLoomButton as LoomButton } from "./modes/collection/header/button-row/button/loom/main";
import { SidebarBody } from "./modes/main";
import { BreadcrumbsLink } from "./header/breadcrumbs/breadcrumb/main";
import { BreadcrumbsDivider } from "./header/breadcrumbs/divider/main";
import { SidebarBreadcrumbs } from "./header/breadcrumbs/main";
import { DriveInterface } from "./modes/drive/main";
import { DriveSectionInfo } from "./modes/drive/section/info/main";
import { DriveSectionElement } from "./modes/drive/section/main";
import { DriveSectionThumbanil } from "./modes/drive/section/thumbnail/main";
import { DriveSectionThumbnailWrapper } from "./modes/drive/section/thumbnail/wrapper/main";
import { CollectionFileInfo } from "./modes/collection/file/info/main";
import { CollectionFile } from "./modes/collection/file/main";
import { CollectionFileThumbnail } from "./modes/collection/file/thumbnail/main";
import { CollectionFileThumbnailWrapper } from "./modes/collection/file/thumbnail/wrapper/main";
import { CollectionHeader } from "./modes/collection/header/main";
import { CollectionHeaderSearch } from "./modes/collection/header/search/main";
import { CollectionHeaderTools } from "./modes/collection/header/tools/main";
import { CollectionInterface } from "./modes/collection/main";
import { GalleryFolderInfo } from "./modes/gallery/folder/info/main";
import { GalleryFolder } from "./modes/gallery/folder/main";
import { GalleryFolderThumbnail } from "./modes/gallery/folder/thumbnail/main";
import { GalleryFolderThumbnailWrapper } from "./modes/gallery/folder/thumbnail/wrapper/main";
import { GalleryCoverImage } from "./modes/gallery/header/cover-image/main";
import { GalleryHeaderDescription } from "./modes/gallery/header/description/main";
import { GalleryHeader } from "./modes/gallery/header/main";
import { GalleryInterface } from "./modes/gallery/main";
import { SidebarViewProps, SidebarMode } from "./main";
import { useContext, useState } from "react";
import { FlowContext } from "../../page";
import { collectionTable } from "@/(pages)/(cosmos)/tables/collection/table";

export function SidebarView({
  sidebarViewHandler,
  sidebarMode,
  gallerys,
  galleryId,
  collections,
  collectionId,
  files,
  fileHandler,
}: SidebarViewProps) {
  const { sessionHandler } = useContext(FlowContext);
  const collection = collections.filter((folder) => folder.id === collectionId).at(0);
  const gallery = gallerys.filter((section) => section.id === galleryId).at(0);
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
          active={sidebarMode === SidebarMode.Drive}
          onClick={() => sidebarViewHandler.goToDrvieView()}
        >
          Drive
        </BreadcrumbsLink>
        <BreadcrumbsDivider />
        {(sidebarMode === SidebarMode.Gallery ||
          sidebarMode === SidebarMode.Collection) && (
          <>
            <BreadcrumbsLink
              active={sidebarMode === SidebarMode.Gallery}
              onClick={() => sidebarViewHandler.goToGalleryView()}
            >
              {gallery?.name}
            </BreadcrumbsLink>
            <BreadcrumbsDivider />
          </>
        )}
        {sidebarMode === SidebarMode.Collection && (
          <BreadcrumbsLink
            active={sidebarMode === SidebarMode.Collection}
            onClick={() => sidebarViewHandler.goToCollectionView()}
          >
            {collection?.name}
          </BreadcrumbsLink>
        )}
      </SidebarBreadcrumbs>
      <Divider />
      <SidebarBody>
        {sidebarMode === SidebarMode.Drive && (
          <>
            <DriveInterface>
              {gallerys.map((section) => (
                <DriveSectionElement>
                  <DriveSectionThumbnailWrapper
                    onClick={() => {
                      sidebarViewHandler.goToGallery(section);
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
        {sidebarMode === SidebarMode.Gallery && (
          <>
            <GalleryInterface>
              <GalleryHeader>
                <GalleryCoverImage
                  src={collectionTable.file.example.src}
                />
                <GalleryHeaderDescription />
              </GalleryHeader>
              <Divider/>
              {collections.map((collection) => (
                <GalleryFolder>
                  <GalleryFolderThumbnailWrapper
                    onClick={() => {
                      sidebarViewHandler.goToCollection(collection);
                    }}
                  >
                    <GalleryFolderThumbnail collection={collection} />
                  </GalleryFolderThumbnailWrapper>
                  <GalleryFolderInfo>
                    <p className="text-white font-extraBold">{collection.name}</p>
                    <p className="text-white font-bold">
                      123 drafts - 3 weeks ago
                    </p>
                  </GalleryFolderInfo>
                </GalleryFolder>
              ))}
            </GalleryInterface>
          </>
        )}
        {sidebarMode === SidebarMode.Collection && (
          <>
            <CollectionInterface>
              <CollectionHeader>
                <CollectionHeaderSearch
                  onChange={(e: any) => changeQuery(e.target.value)}
                  value={query}
                />
                <CollectionHeaderTools>
                  <AddButton
                    onClick={() =>
                      fileHandler.addFile(
                        collectionTable.file.example
                      )
                    }
                  />
                  <LoomButton />
                </CollectionHeaderTools>
              </CollectionHeader>
              {filteredFiles.map((file) => (
                <CollectionFile>
                  <CollectionFileThumbnailWrapper
                    onClick={() => sessionHandler.addSnapshotToSession(file)}
                  >
                    <CollectionFileThumbnail src={file.src} />
                  </CollectionFileThumbnailWrapper>
                  <CollectionFileInfo>
                    <p className="text-white font-extraBold">
                      {file.name}
                    </p>
                    <p className="text-white font-bold">
                      123 drafts - 3 weeks ago
                    </p>
                    <p className="text-white font-regular">
                      {file.description}
                    </p>
                  </CollectionFileInfo>
                </CollectionFile>
              ))}
            </CollectionInterface>
          </>
        )}
      </SidebarBody>
    </Layer>
  );
}

