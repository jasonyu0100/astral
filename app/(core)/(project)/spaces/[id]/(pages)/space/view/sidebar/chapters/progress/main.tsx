import { ContextForTaskListFromSpace } from '@/architecture/controller/task/list-from-space';
import { TaskStatus } from '@/architecture/model/task/main';
import { useContext } from 'react';

export function SpacesSpaceSidebarChaptersProgress() {
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
    <div className='flex h-[5rem] w-full flex-col items-center space-y-[1rem] p-[1rem] shadow-glow'>
      <div className='relative h-[3rem] w-full overflow-hidden rounded-full bg-blue-500'>
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
    </div>
  );
}
