import { CollectionObj } from "@/(pages)/(cosmos)/tables/collection/main";

interface LibraryElementThumbnailProps {
  folder: CollectionObj;
}

export function SectionFolderThumbnail({
  folder,
}: LibraryElementThumbnailProps) {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        {folder.files.slice(0, 4).map((file) => (
          <img className="w-[60px] h-[60px] object-fill" src={file.src} />
        ))}
      </div>
    </>
  );
}
