import { GalleryContext } from "@/(logic)/internal/data/infra/model/gallery/main";
import { useContext } from "react";

export function GalleryBackDescription() {
  const gallery = useContext(GalleryContext);
  
  return (
    <div className='text-md mt-[1rem] font-normal text-slate-500'>
      {gallery.description}
    </div>
  );
}
