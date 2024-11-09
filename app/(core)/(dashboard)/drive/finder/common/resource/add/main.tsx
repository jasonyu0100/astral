import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForDriveFinderModals } from '../../../modals/controller/main';
import { DriveFinderResourceContainer } from '../container/main';

export function DriveFinderCollectionResourceAdd() {
  const driveFinderModalsController = useContext(ContextForDriveFinderModals);
  return (
    <div
      className='flex aspect-square w-full cursor-pointer flex-col justify-between space-y-[1rem]'
      onClick={() => {
        driveFinderModalsController.createResourceController.open();
      }}
    >
      <DriveFinderResourceContainer>
        <div className='flex h-full w-full items-center justify-center p-[1rem]'>
          <AstralAddIcon className='h-1/2 w-1/2' />
        </div>
      </DriveFinderResourceContainer>
    </div>
  );
}
