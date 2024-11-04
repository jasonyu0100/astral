import { ContextForTaskList } from '@/architecture/controller/task/list';
import { ContextForTaskObj, TaskStatus } from '@/architecture/model/task/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesObjectiveSidebarBacklogAdd } from './add/main';
import { SpacesObjectiveBacklogItem } from './item/main';

export function SpacesObjectiveSidebarBacklog() {
  const taskListController = useContext(ContextForTaskList);
  const tasks = taskListController.state.objs;
  const backlog = tasks.filter(
    (task) => task.taskStatus === TaskStatus.BACKLOG,
  );

  return (
    <div
      className='flex w-full flex-col overflow-auto'
      style={{ height: '100%' }}
    >
      <GlassWindowFrame className='h-full w-full flex-shrink-0'>
        <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
          {backlog.map((task) => (
            <ContextForTaskObj.Provider value={task}>
              <SpacesObjectiveBacklogItem />
            </ContextForTaskObj.Provider>
          ))}
          <HorizontalDivider />
          <SpacesObjectiveSidebarBacklogAdd />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
