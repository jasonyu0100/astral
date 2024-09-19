import { ContextForLogLinkList } from '@/(server)/controller/space/chapter/way/link/list';
import { useContext } from 'react';

export function SpacesJourneyLogTableItemLength() {
  const linkListController = useContext(ContextForLogLinkList);
  return (
    <div>
      <p className='text-light text-sm font-bold text-slate-300'>
        {linkListController.state.objs.length}
      </p>
    </div>
  );
}
