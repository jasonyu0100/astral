import { ContextForGalleryObj } from "@/(model)/gallery/main";
import { useContext } from "react";

export function GalleryBackTitle() {
  const gallery = useContext(ContextForGalleryObj);
  
  return (
    <div className='animate-pulse font-extraBold text-xl text-slate-300'>
      {gallery.title}
    </div>
  );
}
