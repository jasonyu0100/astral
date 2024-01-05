import { CraftFolder } from "@/(pages)/(dashboard)/(voyager)/craft/model/drive/section/folder/main";

interface LibraryElementThumbnailProps {
  folder: CraftFolder;
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
