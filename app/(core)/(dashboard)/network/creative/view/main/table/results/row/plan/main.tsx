import { getPlanName } from '@/(core)/(stripe)/pricing/page';
import { useControllerForSpaceList } from '@/architecture/controller/space/list';
import { ContextForUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';

export function NetworkCreativeRowPlan() {
  const user = useContext(ContextForUserObj);
  const spacesController = useControllerForSpaceList(user.id);

  return (
    <div className='flex flex-row justify-center'>
      <p className='flex font-bold text-slate-300'>
        {getPlanName(user.priceId || '')}
      </p>
    </div>
  );
}
