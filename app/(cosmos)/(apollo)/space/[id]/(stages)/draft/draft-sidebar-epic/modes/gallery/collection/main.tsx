import { Layer } from "@/(common)/layer/main";
import { backgroundStyles, borderStyles } from "@/(common)/styles/data";
import { GalleryCollectionInfo } from "./info/main";
import { GalleryCollectionThumbnail } from "./thumbnail/main";
import { CollectionObj } from "@/tables/gallery/collection/main";

export function GalleryCollection({
  collection,
}: {
  collection: CollectionObj;
}) {
  return (
    <Layer
      displayName={GalleryCollection.name}
      sizeStyle="w-full aspect-[32/16]"
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={`${borderStyles.rounded} ${borderStyles["border-all"]}`}
    >
      <div className="flex flex-row items-center w-full h-full">
        <GalleryCollectionThumbnail collection={collection} />
        <GalleryCollectionInfo collection={collection} />
      </div>
    </Layer>
  );
}
