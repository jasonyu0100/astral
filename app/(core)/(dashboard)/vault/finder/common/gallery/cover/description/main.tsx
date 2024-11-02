import { ContextForVaultFinderModals } from '@/(core)/(dashboard)/vault/finder/modals/controller/main';
import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForGalleryObj } from '@/architecture/model/gallery/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function ContainerDescription() {
  const galleryObj = useContext(ContextForGalleryObj);
  const vaultFinderModalsController = useContext(ContextForVaultFinderModals);

  return (
    <div
      className='flex w-full flex-grow cursor-pointer flex-col p-[1rem]'
      onClick={() => {
        window.location.href = vaultMap.vault.finder.gallery.id.link(
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
            vaultFinderModalsController.editGalleryController.open();
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
