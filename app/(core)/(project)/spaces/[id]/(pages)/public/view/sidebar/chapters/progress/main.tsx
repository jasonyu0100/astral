import { ContextForTaskListFromSpace } from '@/architecture/controller/task/list-from-space';
import { TaskStatus } from '@/architecture/model/task/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';

export function SpacesPublicSidebarChaptersProgress() {
  const allTaskListFromController = useContext(ContextForTaskListFromSpace);
  const tasks = allTaskListFromController.state.objs;
  const upcoming = tasks.filter(
    (task) => task.taskStatus === TaskStatus.UPCOMING,
  );
  const current = tasks.filter(
    (task) => task.taskStatus === TaskStatus.CURRENT,
  );
  const done = tasks.filter((task) => task.taskStatus === TaskStatus.DONE);

  return (
    <div className='flex flex-col space-y-[1rem] p-[1rem] shadow-glow'>
      <div className='flex flex-row justify-between'>
        <p className={'text-xl font-bold text-slate-300'}>Overall</p>
      </div>
      <HorizontalDivider />
      <div className='relative h-[2rem] w-full overflow-hidden rounded-full bg-blue-500'>
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
            width: `${(done.length / (upcoming.length + current.length + done.length)) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
