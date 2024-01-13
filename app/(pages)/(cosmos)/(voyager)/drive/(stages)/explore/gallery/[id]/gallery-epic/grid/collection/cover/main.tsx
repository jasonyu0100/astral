import { CollectionObj } from "@/tables/gallery/collection/main";

export function CollectionCover({
  collection,
}: {
  collection: CollectionObj;
}) {
  return (
    <div className="h-full aspect-square bg-black">
      <div className="w-full h-full flex flex-row flex-wrap">
        {collection.resources.slice(0, 4).map((resource) => (
          <img className="h-1/2 aspect-square" src={resource.file.src} />
        ))}
      </div>
    </div>
  );
}
