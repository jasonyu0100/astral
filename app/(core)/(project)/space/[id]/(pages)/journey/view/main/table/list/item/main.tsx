import {
  ContextForLogLinkList,
  useControllerForLogLinkList,
} from '@/(server)/controller/space/chapter/log/link/list';
import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/(server)/controller/user/main';
import { ContextForChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { useContext } from 'react';
import { SpaceJourneyLogTableItemActive } from './active/main';
import { SpaceJourneyLogTableItemInactive } from './inactive/main';

export function SpaceJourneyLogTableListItem() {
  const logListController = useContext(ContextForChapterLogList);
  const log = useContext(ContextForChapterLogObj);
  const active = logListController.actions.stateActions.checkActive(log);
  const userController = useControllerForUserMain(log.userId);
  const linkListController = useControllerForLogLinkList(log.id);

  return (
    <>
      <ContextForLogLinkList.Provider value={linkListController}>
        <ContextForUserMain.Provider value={userController}>
          {active ? (
            <SpaceJourneyLogTableItemActive />
          ) : (
            <SpaceJourneyLogTableItemInactive />
          )}
        </ContextForUserMain.Provider>
      </ContextForLogLinkList.Provider>
    </>
  );
}
