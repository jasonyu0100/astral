import { CollectionObj } from "@/(pages)/(cosmos)/tables/collection/main";

interface LibraryElementThumbnailProps {
  collection: CollectionObj;
}

export function GalleryFolderThumbnail({
  collection: collection,
}: LibraryElementThumbnailProps) {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        {collection.files.slice(0, 4).map((file) => (
          <img className="w-[60px] h-[60px] object-fill" src={file.src} />
        ))}
      </div>
    </>
  );
}
