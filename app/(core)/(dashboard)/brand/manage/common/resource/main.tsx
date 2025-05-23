import { ContextForCollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { ElementResource } from '@/components/element/resource/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { ContextForBrandManageModals } from '../../modals/controller/main';

export function BrandManageResource() {
  const resource = useContext(ContextForCollectionResourceObj);
  const driveFinderModalsController = useContext(ContextForBrandManageModals);

  return (
    <div className='flex w-full flex-col justify-between space-y-[1rem]'>
      <ElementResource />
      <div className='flex w-full flex-row justify-between space-x-[1rem]'>
        <div className='flex flex-col'>
          <p className='text-xl font-bold text-slate-300'>{resource.variant}</p>
          <p className='text-sm font-bold text-slate-300'>
            {getFormattedDate(new Date(resource.created))}
          </p>
        </div>
        <AstralMoreVertIcon
          onClick={() => {
            driveFinderModalsController.editResourceController.open();
          }}
        />
      </div>
    </div>
  );
}
