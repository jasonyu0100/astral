import { ContextForSpacesBoard } from '@/(core)/(project)/spaces/[id]/(pages)/board/controller/main';
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
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import { SpacesBoardLogTableItemAuthor } from './fields/author/main';
import { SpacesBoardLogTableItemCard } from './fields/card/main';
import { SpacesBoardLogTableItemLength } from './fields/length/main';
import { SpacesBoardLogTableItemNumber } from './fields/number/main';
import { SpacesBoardLogTableItemStatus } from './fields/status/main';

export function SpacesBoardLogTableItem() {
  const task = useContext(ContextForTaskObj);
  const userController = useControllerForUserMain(task.userId);
  const taskListController = useContext(ContextForTaskList);
  const linkListController = useControllerForTaskLinkList(task.id);
  const journeyController = useContext(ContextForSpacesBoard);
  const selected = journeyController.state.selectedTasks.includes(task);

  return (
    <ContextForTaskLinkList.Provider value={linkListController}>
      <ContextForUserMain.Provider value={userController}>
        <GlassWindowFrame className='w-full py-[2rem]'>
          <GlassWindowContents
            className='grid w-full grid-cols-7 items-center justify-items-center'
            onClick={() => {
              if (journeyController.state.selectedTasks.includes(task)) {
                journeyController.actions.updateSelectedTasks(
                  journeyController.state.selectedTasks.filter(
                    (selectedLog) => selectedLog !== task,
                  ),
                );
              } else {
                taskListController.actions.stateActions.select(task);
                journeyController.actions.updateSelectedTasks([
                  ...journeyController.state.selectedTasks,
                  task,
                ]);
              }
            }}
          >
            <SpacesBoardLogTableItemNumber />
            <SpacesBoardLogTableItemCard />
            <SpacesBoardLogTableItemStatus />
            <SpacesBoardLogTableItemLength />
            <SpacesBoardLogTableItemAuthor />
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
