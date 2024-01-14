import { CollectionObj } from "@/tables/gallery/collection/main";
import { resourceTable } from "@/tables/resource/table";
import { useState } from "react";

export function CollectionCover({
  collection,
}: {
  collection: CollectionObj;
}) {
  const [resources, changeResources] = useState(resourceTable.examples)

  return (
    <div className="h-full aspect-square bg-black">
      <div className="w-full h-full flex flex-row flex-wrap">
        {resources.slice(0, 4).map((resource) => (
          <img className="h-1/2 aspect-square" src={resource.file.src} />
        ))}
      </div>
    </div>
  );
}
