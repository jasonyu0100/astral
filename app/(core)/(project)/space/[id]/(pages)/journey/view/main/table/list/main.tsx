import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { ContextForChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { SpaceJourneyLogTableListItem } from './item/main';

export function SpaceJourneyTableList() {
  const logListController = useContext(ContextForChapterLogList);
  console.log(logListController.state.objs);

  return (
    <div className='flex w-full flex-col pt-[2rem]'>
      {logListController.state.objs.map((log, index) => (
        <ContextForIndexable.Provider value={index}>
          <ContextForChapterLogObj.Provider value={log}>
            <SpaceJourneyLogTableListItem />
          </ContextForChapterLogObj.Provider>
        </ContextForIndexable.Provider>
      ))}
    </div>
  );
}
