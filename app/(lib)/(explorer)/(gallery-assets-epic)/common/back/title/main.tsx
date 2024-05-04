import { GalleryContext } from "@/(types)/model/gallery/main";
import { useContext } from "react";

export function GalleryBackTitle() {
  const gallery = useContext(GalleryContext);
  
  return (
    <div className='animate-pulse font-extraBold text-xl text-slate-300'>
      {gallery.title}
    </div>
  );
}
