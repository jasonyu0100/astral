import { useContext } from 'react';
import { GalleryContext } from '@/(ouros)/(model)/gallery/main';

export function SidebarHomeGalleryInfo() {
  const gallery = useContext(GalleryContext);

  return (
    <div className='flex flex-grow flex-col p-[1rem]'>
      <p className='font-extraBold text-slate-400'>{gallery.title}</p>
      <p className='font-bold text-slate-500'>{gallery.description}</p>
    </div>
  );
}
