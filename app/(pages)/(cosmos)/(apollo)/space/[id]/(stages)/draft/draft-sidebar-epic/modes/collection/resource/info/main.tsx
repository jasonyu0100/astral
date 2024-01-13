import { ResourceObj } from "@/tables/resource/main";

export function CollectionResourceInfo({ resource }: { resource: ResourceObj }) {
  return (
    <div className="flex flex-col flex-grow">
      <p className="text-slate-400 font-extraBold">{resource.label}</p>
      <p className="text-slate-500 font-regular">{resource.description}</p>
    </div>
  );
}
