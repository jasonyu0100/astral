import { ContextForLogLinkList } from '@/(server)/controller/space/chapter/log/link/list';
import { useContext } from 'react';

export function SpaceJourneyLogTableItemLength() {
  const linkListController = useContext(ContextForLogLinkList);
  return (
    <div>
      <p className='text-light text-sm font-bold text-slate-300'>
        {linkListController.state.objs.length}
      </p>
    </div>
  );
}
