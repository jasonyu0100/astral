import { ContextForSpacesJourney } from '@/(core)/(project)/spaces/[id]/(pages)/journey/controller/main';
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
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { SpacesJourneyLogTableItemAuthor } from './fields/author/main';
import { SpacesJourneyLogTableItemCard } from './fields/card/main';
import { SpacesJourneyLogTableItemLength } from './fields/length/main';
import { SpacesJourneyLogTableItemNumber } from './fields/number/main';
import { SpacesJourneyLogTableItemStatus } from './fields/status/main';

export function SpacesJourneyLogTableItem() {
  const log = useContext(ContextForChapterLogObj);
  const userController = useControllerForUserMain(log.userId);
  const linkListController = useControllerForLogLinkList(log.id);
  const logListController = useContext(ContextForChapterLogList);
  const {
    state: { selectedLogs },
    actions: { updateSelectedLogs },
  } = useContext(ContextForSpacesJourney);
  const selected = logListController.state.objId === log.id;

  return (
    <ContextForLogLinkList.Provider value={linkListController}>
      <ContextForUserMain.Provider value={userController}>
        <GlassWindowFrame
          className='w-full py-[1rem]'
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents
            className='grid w-full grid-cols-7 items-center justify-items-center'
            onClick={() => {
              if (selected) {
                updateSelectedLogs(
                  selectedLogs.filter((selectedLog) => {
                    return selectedLog.id !== log.id;
                  }),
                );
              } else {
                updateSelectedLogs([...selectedLogs, log]);
              }
              logListController.actions.stateActions.select(log);
            }}
          >
            <SpacesJourneyLogTableItemNumber />
            <SpacesJourneyLogTableItemCard />
            <SpacesJourneyLogTableItemStatus />
            <SpacesJourneyLogTableItemLength />
            <SpacesJourneyLogTableItemAuthor />
          </GlassWindowContents>
          {selected ? (
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          ) : (
            <GlassWindowPane glassFx={glassFx.none} />
          )}
        </GlassWindowFrame>
      </ContextForUserMain.Provider>
    </ContextForLogLinkList.Provider>
  );
}
