import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { ContextForChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { useContext } from 'react';
import { SpaceJourneyLogListItemActive } from './item/active/main';
import { SpaceJourneyLogListItemInactive } from './item/inactive/main';

export function SpaceJourneyLogList() {
  const logListController = useContext(ContextForChapterLogList);

  return (
    <div className='flex w-full flex-col pt-[2rem]'>
      {logListController.state.objs.map((log) => (
        <ContextForChapterLogObj.Provider value={log}>
          {logListController.actions.stateActions.checkActive(log) ? (
            <SpaceJourneyLogListItemActive />
          ) : (
            <SpaceJourneyLogListItemInactive />
          )}
        </ContextForChapterLogObj.Provider>
      ))}
    </div>
  );
}
