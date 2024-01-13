import { CollectionObj } from "@/tables/gallery/collection/main";

interface LibraryElementThumbnailProps
  extends React.ComponentPropsWithoutRef<"div"> {
  collection: CollectionObj;
}

export function GalleryFolderThumbnail({
  collection,
  ...props
}: LibraryElementThumbnailProps) {
  return (
    <div className="h-full aspect-square bg-black" {...props}>
      <div className="w-full h-full flex flex-row flex-wrap">
        {collection.resources.slice(0, 4).map((resource) => (
          <img className="h-1/2 aspect-square" src={resource.file.src} />
        ))}
      </div>
    </div>
  );
}
