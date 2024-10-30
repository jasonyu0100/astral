import { ContextForGalleryObj } from '@/server/model/gallery/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function ContainerDescription() {
  const galleryObj = useContext(ContextForGalleryObj);

  return (
    <div className='flex w-full flex-grow flex-col p-[1rem]'>
      <div className='font-extraBold text-2xl text-slate-300'>
        {galleryObj.title?.trim() || 'Untitled'}
      </div>
      <div className='font-extraBold text-2xl text-slate-300'>
        {galleryObj.description}
      </div>
      <div className='mt-[1rem] text-sm font-light text-slate-300'>
        {getFormattedDate(new Date(galleryObj.created))}
      </div>
    </div>
  );
}
