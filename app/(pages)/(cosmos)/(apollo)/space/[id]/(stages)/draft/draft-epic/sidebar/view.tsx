import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { SidebarBody } from "./modes/main";
import { BreadcrumbsLink } from "./header/breadcrumbs/breadcrumb/main";
import { BreadcrumbsDivider } from "./header/breadcrumbs/divider/main";
import { SidebarBreadcrumbs } from "./header/breadcrumbs/main";
import { DriveInterface } from "./modes/home/main";
import { DriveSectionInfo } from "./modes/home/section/info/main";
import { DriveSectionElement } from "./modes/home/section/main";
import { DriveSectionThumbanil } from "./modes/home/section/thumbnail/main";
import { CollectionFileInfo } from "./modes/collection/file/info/main";
import { CollectionFile } from "./modes/collection/file/main";
import { CollectionFileThumbnail } from "./modes/collection/file/thumbnail/main";
import { CollectionFileThumbnailWrapper } from "./modes/collection/file/thumbnail/wrapper/main";
import { CollectionHeader } from "./modes/collection/header/main";
import { CollectionHeaderSearch } from "./modes/collection/header/search/main";
import { CollectionInterface } from "./modes/collection/main";
import { GalleryFolderInfo } from "./modes/gallery/folder/info/main";
import { GalleryFolder } from "./modes/gallery/folder/main";
import { GalleryFolderThumbnail } from "./modes/gallery/folder/thumbnail/main";
import { GalleryInterface } from "./modes/gallery/main";
import { SidebarViewProps, SidebarMode } from "./main";
import { useContext, useState } from "react";
import { DraftContext } from "../../page";

export function SidebarView({
  sidebarViewHandler,
  sidebarMode,
  gallerys,
  galleryId,
  collections,
  collectionId,
  resources,
  fileHandler,
}: SidebarViewProps) {
  const { starHandler } = useContext(DraftContext);
  const collection = collections
    .filter((folder) => folder.id === collectionId)
    .at(0);
  const gallery = gallerys.filter((gallery) => gallery.id === galleryId).at(0);
  const [query, changeQuery] = useState("");

  const filteredResources = resources.filter((resource) => {
    const regex = new RegExp(query, "i");
    return regex.test(resource.file.name);
  });

  return (
    <Layer
      displayName={SidebarView.name}
      sizeStyle="max-w-[500px] min-w-[250px] w-1/4 h-full"
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      contentStyle={"p-[1rem] space-y-[1rem]"}
    >
      <SidebarBreadcrumbs>
        <BreadcrumbsLink
          active={sidebarMode === SidebarMode.Home}
          onClick={() => sidebarViewHandler.goToHomeView()}
        >
          Home
        </BreadcrumbsLink>
        {(sidebarMode === SidebarMode.Gallery ||
          sidebarMode === SidebarMode.Collection) && (
          <>
            <BreadcrumbsDivider />
            <BreadcrumbsLink
              active={sidebarMode === SidebarMode.Gallery}
              onClick={() => sidebarViewHandler.goToGalleryView()}
            >
              {gallery?.title}
            </BreadcrumbsLink>
          </>
        )}
        {sidebarMode === SidebarMode.Collection && (
          <>
            <BreadcrumbsDivider />
            <BreadcrumbsLink
              active={sidebarMode === SidebarMode.Collection}
              onClick={() => sidebarViewHandler.goToCollectionView()}
            >
              {collection?.name}
            </BreadcrumbsLink>
          </>
        )}
      </SidebarBreadcrumbs>
      <SidebarBody>
        {sidebarMode === SidebarMode.Home && (
          <>
            <DriveInterface>
              {gallerys.map((gallery) => (
                <DriveSectionElement>
                  <DriveSectionThumbanil
                    src={gallery.thumbnail.src}
                    onClick={() => {
                      sidebarViewHandler.goToGallery(gallery);
                    }}
                  />
                  <DriveSectionInfo>
                    <p className="text-slate-400 font-extraBold">
                      {gallery.title}
                    </p>
                    <p className="text-slate-500 font-bold">
                      {gallery.description}
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
              {collections.map((collection) => (
                <GalleryFolder>
                  <GalleryFolderThumbnail
                    collection={collection}
                    onClick={() => {
                      sidebarViewHandler.goToCollection(collection);
                    }}
                  />
                  <GalleryFolderInfo>
                    <p className="text-slate-400 font-extraBold">
                      {collection.name}
                    </p>
                    <p className="text-slate-500 font-bold">
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
              </CollectionHeader>
              {filteredResources.map((resource) => (
                <CollectionFile>
                  <CollectionFileThumbnailWrapper
                    onClick={() => starHandler.spawnStar(resource)}
                  >
                    <CollectionFileThumbnail src={resource.file.src} />
                  </CollectionFileThumbnailWrapper>
                  <CollectionFileInfo>
                    <p className="text-slate-400 font-extraBold">
                      {resource.file.name}
                    </p>
                    <p className="text-slate-500 font-bold">
                      123 drafts - 3 weeks ago
                    </p>
                    <p className="text-slate-500 font-regular">
                      {resource.file.description}
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
