import { GalleryContext } from '@/(ouros)/(model)/gallery/main';
import { useContext } from 'react';

export function GalleryInfo() {
  const gallery = useContext(GalleryContext);
  return (
    <div className='flex w-full flex-grow flex-col space-y-[1rem] p-[1rem]'>
      <div className='text-xl font-bold text-slate-400'>{gallery.title}</div>
      <div className='font-normal text-slate-500'>{gallery.description}</div>
    </div>
  );
}
