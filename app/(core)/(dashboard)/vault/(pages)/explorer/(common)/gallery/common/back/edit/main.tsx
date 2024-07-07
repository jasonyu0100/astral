import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useContext } from 'react';

export function GalleryBackEdit() {
  const openable = useContext(ContextForOpenable);

  return (
    <button
      className='mt-auto flex w-full items-center justify-center bg-black p-[1rem] font-bold text-slate-700'
      onClick={(e) => {
        e.stopPropagation();
        openable.open();
      }}
    >
      EDIT
    </button>
  );
}
