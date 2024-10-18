import { ContextForTaskLinkList } from '@/(server)/controller/way/link/list';
import { useContext } from 'react';

export function SpacesBoardLogTableItemLength() {
  const linkListController = useContext(ContextForTaskLinkList);
  return (
    <div>
      <p className='text-light text-sm font-bold text-slate-300'>
        {linkListController.state.objs.length}
      </p>
    </div>
  );
}
