import { CollectionObj } from "@/tables/gallery/collection/main";
import { resourceTable } from "@/tables/resource/table";
import { useContext, useState } from "react";
import { DraftSidebarContext } from "../../../../main";

export function GalleryCollectionThumbnail({
  collection,
}: {
  collection: CollectionObj;
}) {
  const { sidebarHandler } = useContext(DraftSidebarContext);
  const [resource, changeResources] = useState(resourceTable.examples);

  return (
    <div
      className="h-full aspect-square bg-black"
      onClick={() => {
        sidebarHandler.goToCollection(collection);
      }}
    >
      <div className="w-full h-full flex flex-row flex-wrap">
        {resource.slice(0, 4).map((resource) => (
          <img className="h-1/2 aspect-square" src={resource.file.src} />
        ))}
      </div>
    </div>
  );
}
