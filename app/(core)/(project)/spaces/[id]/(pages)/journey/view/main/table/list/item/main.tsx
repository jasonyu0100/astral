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
import { SpacesJourneyLogTableItemActive } from './active/main';
import { SpacesJourneyLogTableItemInactive } from './inactive/main';

export function SpacesJourneyLogTableListItem() {
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
            <SpacesJourneyLogTableItemActive />
          ) : (
            <SpacesJourneyLogTableItemInactive />
          )}
        </ContextForUserMain.Provider>
      </ContextForLogLinkList.Provider>
    </>
  );
}
