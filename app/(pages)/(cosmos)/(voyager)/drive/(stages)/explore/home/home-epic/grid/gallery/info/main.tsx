import { GalleryObj } from "@/tables/gallery/main";

export function GalleryInfo({ gallery }: { gallery: GalleryObj }) {
  return (
    <div className="flex flex-col w-full space-y-[1rem] flex-grow p-[1rem]">
      <div className="text-xl font-bold text-slate-400">
        {gallery.title}
      </div>
      <div className="font-normal text-slate-500">
        {gallery.collectionIds.length} collections
      </div>
      <div className="font-normal text-slate-500">
        {gallery.description}
      </div>
    </div>
  );
}
