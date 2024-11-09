import { ContextForTaskListFromChapter } from '@/architecture/controller/task/list-from-chapter';
import { ContextForTaskObj, TaskStatus } from '@/architecture/model/task/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesFocusSidebarBacklogAdd } from './add/main';
import { SpacesFocusBacklogItem } from './item/main';

export function SpacesFocusSidebarArchive() {
  const taskListController = useContext(ContextForTaskListFromChapter);
  const tasks = taskListController.state.objs;
  const archive = tasks.filter(
    (task) => task.taskStatus === TaskStatus.ARCHIVE,
  );

  return (
    <div
      className='flex w-full flex-col overflow-auto'
      style={{ height: '100%' }}
    >
      <GlassWindowFrame className='h-full w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
          {archive.map((task) => (
            <ContextForTaskObj.Provider value={task}>
              <SpacesFocusBacklogItem />
            </ContextForTaskObj.Provider>
          ))}
          <HorizontalDivider />
          <SpacesFocusSidebarBacklogAdd />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
