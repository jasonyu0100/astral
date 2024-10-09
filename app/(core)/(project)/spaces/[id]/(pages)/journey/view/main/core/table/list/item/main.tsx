import { ContextForSpacesJourney } from '@/(core)/(project)/spaces/[id]/(pages)/journey/controller/main';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/(server)/controller/user/main';
import {
  ContextForTaskLinkList,
  useControllerForTaskLinkList,
} from '@/(server)/controller/way/link/list';
import { ContextForTaskList } from '@/(server)/controller/way/list';
import { ContextForTaskObj } from '@/(server)/model/task/main';
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
  const task = useContext(ContextForTaskObj);
  const userController = useControllerForUserMain(task.userId);
  const wayListController = useContext(ContextForTaskList);
  const linkListController = useControllerForTaskLinkList(task.id);
  const journeyController = useContext(ContextForSpacesJourney);
  const selected = journeyController.state.selectedLogs.includes(task);

  return (
    <ContextForTaskLinkList.Provider value={linkListController}>
      <ContextForUserMain.Provider value={userController}>
        <GlassWindowFrame className='w-full py-[2rem]'>
          <GlassWindowContents
            className='grid w-full grid-cols-7 items-center justify-items-center'
            onClick={() => {
              if (journeyController.state.selectedLogs.includes(task)) {
                journeyController.actions.updateSelectedLogs(
                  journeyController.state.selectedLogs.filter(
                    (selectedLog) => selectedLog !== task,
                  ),
                );
              } else {
                wayListController.actions.stateActions.select(task);
                journeyController.actions.updateSelectedLogs([
                  ...journeyController.state.selectedLogs,
                  task,
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
    </ContextForTaskLinkList.Provider>
  );
}
