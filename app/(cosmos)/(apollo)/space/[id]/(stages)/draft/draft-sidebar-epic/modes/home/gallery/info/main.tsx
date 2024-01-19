import { GalleryObj } from "@/tables/gallery/main";

export function HomeGalleryInfo({ gallery }: { gallery: GalleryObj }) {
  return (
    <div className='flex flex-col flex-grow p-[1rem]'>
      <p className='text-slate-400 font-extraBold'>{gallery.title}</p>
      <p className='text-slate-500 font-bold'>{gallery.description}</p>
    </div>
  );
}
