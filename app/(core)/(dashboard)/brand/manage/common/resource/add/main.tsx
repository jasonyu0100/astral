import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForBrandManageModals } from '../../../modals/controller/main';
import { BrandManageResourceContainer } from '../container/main';

export function BrandManageCollectionResourceAdd() {
  const driveFinderModalsController = useContext(ContextForBrandManageModals);
  return (
    <div
      className='flex aspect-square w-full cursor-pointer flex-col justify-between space-y-[1rem]'
      onClick={() => {
        driveFinderModalsController.createResourceController.open();
      }}
    >
      <BrandManageResourceContainer>
        <div className='flex h-full w-full items-center justify-center p-[1rem]'>
          <AstralAddIcon className='h-1/2 w-1/2' />
        </div>
      </BrandManageResourceContainer>
    </div>
  );
}
