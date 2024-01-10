import { CollectionModel } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/gallery/collection/type";

interface LibraryElementThumbnailProps {
  folder: CollectionModel;
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
