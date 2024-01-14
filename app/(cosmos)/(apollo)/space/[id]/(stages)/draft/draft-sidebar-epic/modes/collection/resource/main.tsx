import { ResourceObj } from "@/tables/resource/main";
import { CollectionResourceInfo } from "./info/main";
import { CollectionResourceThumbnail } from "./thumbnail/main";

export function CollectionResource({ resource }: { resource: ResourceObj }) {
  return (
    <div className="flex flex-row items-center space-x-[2rem]">
      <CollectionResourceThumbnail resource={resource} />
      <CollectionResourceInfo resource={resource}/>
    </div>
  );
}
