import { CollectionObj } from "@/tables/gallery/collection/main";
import { resourceTable } from "@/tables/resource/table";
import { useState } from "react";

interface LibraryElementThumbnailProps
  extends React.ComponentPropsWithoutRef<"div"> {
  collection: CollectionObj;
}

export function GalleryFolderThumbnail({
  collection,
  ...props
}: LibraryElementThumbnailProps) {
  const [resource, changeResources] = useState(resourceTable.examples)
  
  return (
    <div className="h-full aspect-square bg-black" {...props}>
      <div className="w-full h-full flex flex-row flex-wrap">
        {resource.slice(0, 4).map((resource) => (
          <img className="h-1/2 aspect-square" src={resource.file.src} />
        ))}
      </div>
    </div>
  );
}
