import { ContextForTaskListFromSpace } from '@/architecture/controller/task/list-from-space';
import { TaskStatus } from '@/architecture/model/task/main';
import { useContext } from 'react';

export function SpacesIdeasSidebarChaptersProgress() {
  const allTaskListFromController = useContext(ContextForTaskListFromSpace);
  const tasks = allTaskListFromController.state.objs;
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
    <div className='flex h-[5rem] w-full flex-row items-center space-x-[1rem] p-[1rem] shadow-glow'>
      <p className={'w-[3rem] text-lg font-bold text-slate-300'}>
        {percentage.toFixed(0)}%
      </p>
      <div className='relative h-[3rem] w-full overflow-hidden rounded-full bg-blue-500'>
        <div
          className='absolute top-0 h-full bg-green-500'
          style={{
            left: `0px`,
            width: `${(done.length / (upcoming.length + current.length + done.length)) * 100 || 0}%`,
          }}
        ></div>
        <div
          className='absolute top-0 h-full bg-yellow-500 '
          style={{
            left: `${(done.length / (upcoming.length + current.length + done.length)) * 100 || 0}%`,
            width: `${(current.length / (current.length + done.length + upcoming.length)) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
