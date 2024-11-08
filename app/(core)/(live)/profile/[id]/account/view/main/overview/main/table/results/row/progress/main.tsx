import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForTaskListFromSpace } from '@/architecture/controller/task/list-from-space';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { TaskStatus } from '@/architecture/model/task/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function UserProfileRowProgress() {
  const space = useContext(ContextForSpaceObj);
  const timeDiff = new Date().getTime() - new Date(space.created).getTime();
  const taskListController = useContext(ContextForTaskListFromSpace);
  const tasks = taskListController.state.objs;
  const pending = tasks.filter(
    (task) => task.taskStatus === TaskStatus.PENDING,
  );
  const current = tasks.filter(
    (task) => task.taskStatus === TaskStatus.CURRENT,
  );
  const done = tasks.filter((task) => task.taskStatus === TaskStatus.DONE);

  return (
    <div className='col-span-2 flex items-center justify-center'>
      <GlassWindowFrame
        className='w-full flex-shrink-0'
        roundedFx={roundedFx['rounded-full']}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents
          onClick={() => {
            window.location.href = spacesMap.spaces.id.work.link(space.id);
          }}
          className='flex h-full w-full cursor-pointer flex-row items-center justify-between space-x-[1rem] p-[0.5rem]'
        >
          <div className='relative h-[1rem] w-full overflow-hidden rounded-full bg-blue-500'>
            <div
              className='absolute left-0 top-0 h-full bg-purple-500'
              style={{
                width: `${(pending.length / (pending.length + current.length + done.length)) * 100}%`,
              }}
            ></div>
            <div
              className='absolute top-0 h-full bg-yellow-500'
              style={{
                left: `${(pending.length / (pending.length + current.length + done.length)) * 100}%`,
                width: `${(current.length / (pending.length + current.length + done.length)) * 100}%`,
              }}
            ></div>
            <div
              className='absolute top-0 h-full bg-green-500'
              style={{
                left: `${((pending.length + current.length) / (pending.length + current.length + done.length)) * 100}%`,
                width: `${(done.length / (pending.length + current.length + done.length)) * 100}%`,
              }}
            ></div>
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
