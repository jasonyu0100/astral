import { useControllerForSpaceList } from '@/server/controller/space/list';
import { ContextForUserObj } from '@/server/model/user/main';
import { useContext } from 'react';

export function NetworkCreativeRowSpaces() {
  const user = useContext(ContextForUserObj);
  const spacesController = useControllerForSpaceList(user.id);

  return (
    <div className='flex font-bold text-slate-300'>
      {spacesController.state.objs.length}
    </div>
  );
}
