import { ContextForChapterWayList } from '@/(server)/controller/space/chapter/way/list';
import { ContextForChapterWayObj } from '@/(server)/model/space/chapter/way/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { SpacesJourneyLogTableItem } from './item/main';

export function SpacesJourneyTableList() {
  const wayListController = useContext(ContextForChapterWayList);

  return (
    <div className='flex w-full flex-col space-y-[1rem] pt-[2rem]'>
      {wayListController.state.objs.map((log, index) => (
        <ContextForIndexable.Provider value={index}>
          <ContextForChapterWayObj.Provider value={log}>
            <SpacesJourneyLogTableItem />
          </ContextForChapterWayObj.Provider>
        </ContextForIndexable.Provider>
      ))}
    </div>
  );
}
