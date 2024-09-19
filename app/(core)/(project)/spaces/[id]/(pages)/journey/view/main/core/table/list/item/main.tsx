import { ContextForSpacesJourney } from '@/(core)/(project)/spaces/[id]/(pages)/journey/controller/main';
import {
  ContextForLogLinkList,
  useControllerForLogLinkList,
} from '@/(server)/controller/space/chapter/way/link/list';
import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/way/list';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/(server)/controller/user/main';
import { ContextForChapterWayObj } from '@/(server)/model/space/chapter/way/main';
import { glassFx } from '@/style/data';
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
  const log = useContext(ContextForChapterWayObj);
  const userController = useControllerForUserMain(log.userId);
  const logListController = useContext(ContextForChapterLogList);
  const linkListController = useControllerForLogLinkList(log.id);
  const journeyController = useContext(ContextForSpacesJourney);
  const selected = journeyController.state.selectedLogs.includes(log);

  return (
    <ContextForLogLinkList.Provider value={linkListController}>
      <ContextForUserMain.Provider value={userController}>
        <GlassWindowFrame className='w-full py-[2rem]'>
          <GlassWindowContents
            className='grid w-full grid-cols-7 items-center justify-items-center'
            onClick={() => {
              if (journeyController.state.selectedLogs.includes(log)) {
                journeyController.actions.updateSelectedLogs(
                  journeyController.state.selectedLogs.filter(
                    (selectedLog) => selectedLog !== log,
                  ),
                );
              } else {
                logListController.actions.stateActions.select(log);
                journeyController.actions.updateSelectedLogs([
                  ...journeyController.state.selectedLogs,
                  log,
                ]);
              }
            }}
          >
            <SpacesJourneyLogTableItemNumber />
            <SpacesJourneyLogTableItemCard />
            <SpacesJourneyLogTableItemStatus />
            <SpacesJourneyLogTableItemLength />
            <SpacesJourneyLogTableItemAuthor />
          </GlassWindowContents>
          {selected ? (
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          ) : (
            <GlassWindowPane glassFx={glassFx.none} />
          )}
        </GlassWindowFrame>
      </ContextForUserMain.Provider>
    </ContextForLogLinkList.Provider>
  );
}
