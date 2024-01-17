import { CollectionObj } from "@/tables/gallery/collection/main";

export function GalleryCollectionInfo({
  collection,
}: {
  collection: CollectionObj;
}) {
  return (
    <div className="flex flex-col space-y-[1rem] flex-grow h-full p-[1rem] items-center justify-center">
      <p className="text-slate-400 font-extraBold">{collection.name}</p>
    </div>
  );
}
