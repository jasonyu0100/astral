import { ArchiveGalleryContext } from "@/(model)/gallery/main";
import { useContext } from "react";

export function GalleryBackDescription() {
  const gallery = useContext(ArchiveGalleryContext);
  
  return (
    <div className='text-md mt-[1rem] font-normal text-slate-500'>
      {gallery.description}
    </div>
  );
}
