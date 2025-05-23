import { useControllerForSpaceList } from '@/architecture/controller/space/list';
import { ContextForUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';

export function NetworkCreativeRowSpaces() {
  const user = useContext(ContextForUserObj);
  const spacesController = useControllerForSpaceList(user.id);

  return (
    <div className='flex flex-row justify-center'>
      <p className='flex font-bold text-slate-300'>
        {spacesController.state.objs.length}
      </p>
    </div>
  );
}
