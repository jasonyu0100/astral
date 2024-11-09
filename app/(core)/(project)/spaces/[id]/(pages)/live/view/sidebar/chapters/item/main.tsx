import { ExplorerProjectsSidebarOption } from '@/(core)/(dashboard)/explorer/projects/view/sidebar/(common)/list/option/main';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import {
  ContextForTaskListFromChapter,
  calculateCompletionColor,
} from '@/architecture/controller/task/list-from-chapter';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { TaskStatus } from '@/architecture/model/task/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForSpacesLive } from '../../../../controller/main';
import { ContextForSpacesLiveModals } from '../../../../modal/controller/main';
import { SpacesLiveSidebarChaptersItemDescription } from './description/main';
import { SpacesLiveSidebarChapterItemTasks } from './tasks/main';

export function SpacesLiveSidebarChaptersChapter() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const spacesLiveModalController = useContext(ContextForSpacesLiveModals);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const selected = chapterListController.state.objId === chapterObj.id;
  const taskListController = useContext(ContextForTaskListFromChapter);
  const tasks = taskListController.state.objs;
  const upcoming = tasks.filter(
    (task) => task.taskStatus === TaskStatus.UPCOMING,
  );
  const current = tasks.filter(
    (task) => task.taskStatus === TaskStatus.CURRENT,
  );
  const done = tasks.filter((task) => task.taskStatus === TaskStatus.DONE);
  const completionColor = calculateCompletionColor(taskListController);
  const spacesLiveController = useContext(ContextForSpacesLive);

  return (
    <div
      className='w-full cursor-pointer'
      onClick={() => {
        chapterListController.actions.stateActions.select(chapterObj);
      }}
    >
      {selected ? (
        <GlassWindowFrame
          name={ExplorerProjectsSidebarOption.name}
          borderFx={borderFx['border-all']}
          roundedFx={roundedFx['rounded']}
          className='p-[1rem]'
        >
          <GlassWindowContents className='flex flex-col space-y-[1rem]'>
            <SpacesLiveSidebarChaptersItemDescription />
            <SpacesLiveSidebarChapterItemTasks />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-20']} />
        </GlassWindowFrame>
      ) : (
        <GlassWindowFrame
          name={ExplorerProjectsSidebarOption.name}
          borderFx={borderFx['border-around']}
          roundedFx={roundedFx['rounded']}
          className='p-[1rem]'
        >
          <GlassWindowContents>
            <p className={ctwn('text-lg font-bold text-slate-300')}>
              {chapterObj?.title || 'Untitled'}
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      )}
    </div>
  );
}
