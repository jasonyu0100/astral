import { AstralAddIcon } from '@/icons/add/main';
import { ContextForGalleryCollectionMain } from '@/server/controller/gallery/collection/main';
import { ContextForCollectionResourceList } from '@/server/controller/gallery/collection/resource/list';
import { FileElementVariant } from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function CollectionDescription({ empty }: { empty?: boolean }) {
  const collectionControllerMain = useContext(ContextForGalleryCollectionMain);
  const resourceListController = useContext(ContextForCollectionResourceList);
  const resources = resourceListController.state.objs;

  const visualResources = resources?.filter(
    (resource) =>
      resource.fileElem?.variant === FileElementVariant.IMAGE ||
      resource.fileElem?.variant === FileElementVariant.VIDEO,
  );

  return (
    <>
      {empty === true ? (
        <div className='flex h-full w-full items-center justify-center'>
          <AstralAddIcon className='h-1/2 w-1/2' />
        </div>
      ) : (
        <>
          <div className='text-2xl font-bold text-slate-300'>
            {collectionControllerMain.state?.obj.title?.trim() || 'Untitled'}
          </div>
          <div className='mb-[1rem] text-sm font-light text-slate-300'>
            {getFormattedDate(
              new Date(collectionControllerMain.state.obj.created),
            )}
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
        </>
      )}
    </>
  );
}
