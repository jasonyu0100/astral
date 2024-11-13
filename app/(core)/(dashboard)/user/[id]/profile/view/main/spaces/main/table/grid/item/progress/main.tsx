import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForTaskListFromSpace } from '@/architecture/controller/task/list-from-space';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { TaskStatus } from '@/architecture/model/task/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import Link from 'next/link';
import { useContext } from 'react';

export function UserProfileRowProgress() {
  const space = useContext(ContextForSpaceObj);
  const timeDiff = new Date().getTime() - new Date(space.created).getTime();
  const taskListController = useContext(ContextForTaskListFromSpace);
  const tasks = taskListController.state.objs;
  const upcoming = tasks.filter(
    (task) => task.taskStatus === TaskStatus.UPCOMING,
  );
  const current = tasks.filter(
    (task) => task.taskStatus === TaskStatus.CURRENT,
  );
  const done = tasks.filter((task) => task.taskStatus === TaskStatus.DONE);
  const percentage =
    (done.length / (upcoming.length + current.length + done.length)) * 100 || 0;

  return (
    <div className='col-span-2 flex items-center justify-center space-x-[1rem]'>
      <Link href={spacesMap.spaces.id.focus.link(space.id)} className='w-full'>
        <GlassWindowFrame
          className='w-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='flex h-full w-full cursor-pointer flex-row items-center justify-between space-x-[1rem]'>
            <div className='relative h-[1rem] w-full overflow-hidden rounded-full bg-blue-500'>
              <div
                className='absolute top-0 h-full bg-yellow-500 '
                style={{
                  left: `0px`,
                  width: `${(current.length / (current.length + done.length + upcoming.length)) * 100}%`,
                }}
              ></div>
              <div
                className='absolute top-0 h-full bg-green-500'
                style={{
                  left: `${(current.length / (current.length + done.length + upcoming.length)) * 100}%`,
                  width: `${(done.length / (upcoming.length + current.length + done.length)) * 100 || 0}%`,
                }}
              ></div>
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </Link>
      <div className='flex w-[3rem] flex-row justify-between'>
        <p className={'text-sm font-bold text-slate-300'}>
          {percentage.toFixed(0)}%
        </p>
      </div>
    </div>
  );
}
