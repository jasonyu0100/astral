import { CollectionObj } from "@/tables/collection/main";

export function CollectionCover({
  collection,
}: {
  collection: CollectionObj;
}) {
  return (
    <div className="h-full aspect-square bg-black">
      <div className="w-full h-full flex flex-row flex-wrap">
        {collection.files.slice(0, 4).map((file) => (
          <img className="h-1/2 aspect-square" src={file.src} />
        ))}
      </div>
    </div>
  );
}
