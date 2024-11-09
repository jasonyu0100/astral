import { ContextForDriveFinderModals } from '@/(core)/(dashboard)/drive/finder/modals/controller/main';
import { driveMap } from '@/(core)/(dashboard)/drive/map';
import { ContextForGalleryObj } from '@/architecture/model/gallery/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function DriveFinderContainerDescription() {
  const galleryObj = useContext(ContextForGalleryObj);
  const driveFinderModalsController = useContext(ContextForDriveFinderModals);

  return (
    <div
      className='flex w-full flex-grow cursor-pointer flex-col p-[1rem]'
      onClick={() => {
        window.location.href = driveMap.drive.finder.gallery.id.link(
          galleryObj.id,
        );
      }}
    >
      <div className='flex w-full flex-row justify-between space-x-[1rem]'>
        <div className='font-extraBold text-2xl text-slate-300'>
          {galleryObj.title?.trim() || 'Untitled'}
        </div>
        <AstralMoreVertIcon
          onClick={(e) => {
            e.stopPropagation();
            driveFinderModalsController.editGalleryController.open();
          }}
        />
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
