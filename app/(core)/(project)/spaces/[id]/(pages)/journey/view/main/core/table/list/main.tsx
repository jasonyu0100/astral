import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { ContextForChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { SpacesJourneyLogTableItem } from './item/main';

export function SpacesJourneyTableList() {
  const logListController = useContext(ContextForChapterLogList);

  return (
    <div className='flex w-full flex-col space-y-[1rem] pt-[2rem]'>
      {logListController.state.objs.map((log, index) => (
        <ContextForIndexable.Provider value={index}>
          <ContextForChapterLogObj.Provider value={log}>
            <SpacesJourneyLogTableItem />
          </ContextForChapterLogObj.Provider>
        </ContextForIndexable.Provider>
      ))}
    </div>
  );
}
