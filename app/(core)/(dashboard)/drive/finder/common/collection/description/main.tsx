import { driveMap } from '@/(core)/(dashboard)/drive/map';
import { ContextForGalleryCollectionMain } from '@/architecture/controller/gallery/collection/main';
import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { FileElementVariant } from '@/architecture/model/elements/file/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import { ContextForGalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { ContextForDriveFinderModals } from '../../../modals/controller/main';

export function DriveFinderCollectionDescription() {
  const collectionObj = useContext(ContextForGalleryCollectionObj);
  const collectionControllerMain = useContext(ContextForGalleryCollectionMain);
  const resourceListController = useContext(ContextForCollectionResourceList);
  const resources = resourceListController.state.objs;
  const driveFinderModalsController = useContext(ContextForDriveFinderModals);

  const visualResources = resources?.filter(
    (resource) =>
      resource.fileElem?.variant === FileElementVariant.IMAGE ||
      resource.fileElem?.variant === FileElementVariant.VIDEO,
  );

  return (
    <div
      className='flex w-full flex-grow cursor-pointer flex-col p-[1rem]'
      onClick={() => {
        window.location.href = driveMap.drive.finder.collection.id.link(
          collectionObj.id,
        );
      }}
    >
      <div className='flex w-full flex-row justify-between space-x-[1rem]'>
        <div className='text-2xl font-bold text-slate-300'>
          {collectionControllerMain.state?.obj.title?.trim() || 'Untitled'}
        </div>
        <AstralMoreVertIcon
          onClick={(e) => {
            e.stopPropagation();
            driveFinderModalsController.editCollectionController.open();
          }}
        />
      </div>
      <div className='mb-[1rem] text-sm font-light text-slate-300'>
        {getFormattedDate(new Date(collectionControllerMain.state.obj.created))}
      </div>
      <div className='grid w-full grid-cols-3 gap-[1rem]'>
        {visualResources
          .filter((resource) => resource.variant === ElementVariant.FILE)
          .filter(
            (resource) =>
              resource.fileElem?.variant === FileElementVariant.IMAGE,
          )
          .slice(0, 6)
          .map((resource) => (
            <div className='w-full'>
              {resource.fileElem?.variant === FileElementVariant.IMAGE && (
                <img
                  alt='thumbnail'
                  className='h-full w-full object-contain'
                  src={resource?.fileElem?.src}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
