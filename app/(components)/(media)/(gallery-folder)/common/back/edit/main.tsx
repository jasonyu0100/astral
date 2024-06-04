import { EditGalleryModalContext } from "@/(core)/(dashboard)/(modals)/archive/explorer/edit/gallery/main";
import { useContext } from "react";

export function GalleryBackEdit() {
  const modalContext = useContext(EditGalleryModalContext);
  return (
    <button
      className='mt-auto flex w-full items-center justify-center bg-black p-[1rem] font-bold text-slate-300'
      onClick={(e) => {
        e.stopPropagation();
        modalContext.editGallery.open();
      }}
    >
      EDIT
    </button>
  );
}
