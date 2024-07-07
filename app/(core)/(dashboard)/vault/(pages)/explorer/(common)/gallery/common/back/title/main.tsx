import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { useContext } from 'react';

export function GalleryBackTitle() {
  const gallery = useContext(ContextForGalleryObj);

  return (
    <div className='animate-pulse font-extraBold text-xl text-slate-700'>
      {gallery.title}
    </div>
  );
}
